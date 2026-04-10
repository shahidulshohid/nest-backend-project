import { Injectable } from '@nestjs/common';
import { Product } from './schemas/product.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProductService {
    constructor(@InjectModel(Product.name) private productModel: Model<Product>){}

    async createProduct(): Promise<Product> {
        const product = new this.productModel({
            title: 'Gaming laptop',
            tag: [
                {name: 'electronics'},
                {name: 'gaming'},
                {name: 'laptop'},
            ]
        })

        return product.save();
    }

    async getAllProducts(): Promise<Product[]> {
        return this.productModel.find()
    }
}
