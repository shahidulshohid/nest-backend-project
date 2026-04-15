
import { Injectable } from '@nestjs/common';
import { User } from '../user2/schemas/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name) private userModel: Model<User>,
    ) {}

    async createUser(data: any) {
        const hashedPassword = await bcrypt.hash(data.password, 10);

        const user = new this.userModel({
            ...data,
            password: hashedPassword,
        });

        return user.save();
    }
}
