import bcrypt from 'bcrypt';
import authRepository from "../repositories/auth.repository";
import { LoginSchemaDto } from "../schemas/auth.schema";
import { generateToken } from '../utils/jwt';

class AuthService{

    async login(payload: LoginSchemaDto){

        const email = payload.email;
        const password = payload.password;
        const user = 
            await authRepository.findUserByEmail(email);
        if(!user){
            throw new Error("Invalid email");
        }
        const isValid = 
            await bcrypt.compare(password, user.password);

        if(!isValid){
            throw new Error("Invalid password");
        }

        const token = generateToken(user.id);
        
        return {token};
    }


}

export default new AuthService();