import { Injectable } from '@nestjs/common';
import { User } from './schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {}
    
    async createUser(): Promise<User> {
        const user = new this.userModel({
            name: "john doe",
            address: {
                street: "123 street",
                city: "karachi"
            }
        })
        return user.save();
    }

    async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }

}
