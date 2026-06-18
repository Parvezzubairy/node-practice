import pool from "../config/db";
import { User } from "../types/user.types";

class AuthRepository{

    async findUserByEmail(email:string):Promise<User | null>{
        const [result] = await pool.execute<User[]>(
            `select * from users where email =?`,
            [email]
        )

        return result[0] ?? null;
    } 

}

export default new AuthRepository();