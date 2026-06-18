import {RowDataPacket} from 'mysql2';

export interface User extends RowDataPacket{
    id: number,
    name: string,
    email: string,
     password: string
}

export interface CreateUserDto{
    name: string,
    email: string
}

export interface SearchUserType{
    name?:string,
    email?:string
}

export interface GetUserById{
    userId:number
}