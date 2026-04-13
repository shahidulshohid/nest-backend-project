import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './schemas/book.schema';
import { Library } from './schemas/library.schema';
import { Model } from 'mongoose';

@Injectable()
export class LibraryService {
    constructor(
        @InjectModel(Book.name) private bookModel: Model<Book>,
        @InjectModel(Library.name) private libraryModel: Model<Library>
    ){}

    async createLibrary(): Promise<Library>{
        const book1 = await this.bookModel.create({
            title: 'Js ka Champion', author: 'Farzeen',
        }) 

        const book2 = await this.bookModel.create({
            title: 'Js ka Champion', author: 'Huzaifa',
        }) 

        const library = new this.libraryModel({
            name: 'Central library',
            books: [book1._id, book2._id]
        })
        return library.save();
    } 

    async getLivraries() : Promise<Library[]>{
        return this.libraryModel.find().populate('books');
    }

}
