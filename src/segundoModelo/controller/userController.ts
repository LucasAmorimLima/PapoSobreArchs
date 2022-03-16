import { UserService } from "../service/userService";

export class UserController {
    constructor(
        private userService: UserService
    ) {
        
    }
}