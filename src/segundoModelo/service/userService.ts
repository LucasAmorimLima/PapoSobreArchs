import { IUserRepository } from "../repositories/IUserRepository";

export class UserService {
    constructor(
        private userRepository: IUserRepository
    ) { }

    async create(name: string){
        const newUser  = await this.userRepository.create(name)

        return newUser
    }
}