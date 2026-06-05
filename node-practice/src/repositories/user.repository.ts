import {CreateUserDto, User} from '../types/user.types';
import pool from '../config/db';
import { ResultSetHeader } from 'mysql2';
class UserRepository{
    async findAllUser():Promise<User[]>{
        const [rows] = await pool.query<User[]>(
            'select id,name,email from users'
        );
        return rows;

    }

    async createUser(payload:CreateUserDto):Promise<number>{

       const [result] = await pool.execute<ResultSetHeader>(
        `insert into users(name,email)
         values(?,?)
        `,
        [payload.name,payload.email]
       )

       return result.insertId;
    }
}

export default new UserRepository();