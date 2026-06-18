import {User} from '../types/user.types';
import {CreateUserDto} from '../schemas/user.schema';
import pool from '../config/db';
import { ResultSetHeader } from 'mysql2';
class UserRepository{
    async findAllUser():Promise<User[]>{
        const [rows] = await pool.query<User[]>(
            'select id,name,email from users'
        );
        return rows;

    }

    async createUser(payload: CreateUserDto):Promise<number>{

       const [result] = await pool.execute<ResultSetHeader>(
        `insert into users(name,email,password)
         values(?,?,?)
        `,
        [payload.name, payload.email, payload.password]
       )

       return result.insertId;
    }

    async findSearchUser(name:string,email:string):Promise<User[]>{
        let sql = `select * from users where 1=1`;
        const queryParams: string[] = [];
        
        if(name && name?.trim() !=''){
            sql += ` and name like ?`;
            queryParams.push(`${name}%`)
        }

        if(email && email?.trim() !=''){
            sql += ` and email like ?`;
            queryParams.push(`${email}%`)
        }
        const [result] = await pool.execute<User[]>(
            sql,
            queryParams
        )
        return result;
    }

    async findUserById(userId:number):Promise<User[]>{
        const [result] = 
            await pool.execute<User[]>(
                'select * from users where id=?',
                [userId]
            )
        return result;
    }
}

export default new UserRepository();