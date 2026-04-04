import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
    private products = [
        {id: 1 , name: "Mobile" , price: 2000},
        {id: 2 , name: "Teblet" , price: 4000},
        {id: 3 , name: "Laptop" , price: 80000}
    ]

    getAllProducts() {
        return this.products;
    }
    getProductById(id: number) {
        return this.products.find((product) => product.id === id);
    }
}
