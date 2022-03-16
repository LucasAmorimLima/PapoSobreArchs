import { UserService } from "../service/userService";
import { HttpRequest, HttpResponse, HttpStatusCodes } from "./types";

export class UserController {
    constructor(
        private userService: UserService
    ) { }

    async create(httpRequest: HttpRequest, httpResponse: HttpResponse) {
        try {
            const { body } = httpRequest

            const response = await this.userService.create(body)

            return {
                httpStatusCode: HttpStatusCodes.created.code,
                body: response
            }
        } catch (error: any) {
            return {
                httpStatusCode: HttpStatusCodes.serverError.code,
                body: error.message
            }
        }
    }
}