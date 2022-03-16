export interface IUserRepository {
    create(name: string): Promise<any>
}