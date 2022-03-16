import { UserService } from "../services/userService";
import {Request, Response} from 'express'

class UserController {
    constructor(
        private userService: UserService
    ) { }

    async create(request: Request, response: Response){
        const {name} = request.body
        const newUser = this.userService.create(name)

        response.status(201).json(newUser)
    }
}