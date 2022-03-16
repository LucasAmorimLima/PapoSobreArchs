import mongoose from 'mongoose'
import { IUserRepository } from './IUserRepository'

const userSchema = new mongoose.Schema(
    {
        _id: {
            type: Number
        },
        name:{
            type: String
        },
        
    }
)
const userModel = mongoose.model('user', userSchema)


export class UserRepository implements IUserRepository {
    async create(name: string): Promise<any> {
        const newUser = await userModel.create(name)

        return newUser
    }
}