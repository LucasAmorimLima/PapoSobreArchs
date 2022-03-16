import { UserRepository } from '../repository/userRepository'

export class UserService {
    constructor(
        private userRepository: UserRepository
    ) { }

    async create(name: string) {

        const newUser = await this.userRepository.create(name)

        return newUser
    }
}