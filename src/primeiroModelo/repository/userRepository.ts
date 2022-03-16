import mongoose from 'mongoose'

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


export class UserRepository {
    async create(name: string): Promise<any> {
        const newArticle = await userModel.create(name)

        return newArticle
    }
}