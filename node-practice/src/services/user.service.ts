import bcrypt from 'bcrypt'
import userRepository from '../repositories/user.repository';
import {SearchUserType} from '../types/user.types';
import {GetUserByIdSchemaDto, CreateUserDto} from '../schemas/user.schema';
class UserService{

    async getUsers(){
        return userRepository.findAllUser();
    }

    async craeteUser(payload:CreateUserDto){
        const saltRounds = 10;
        const pass = payload.password;
        const hashedPass = await bcrypt.hash(pass,saltRounds); 
        return userRepository.createUser({
            ...payload,
            password: hashedPass
        });
    }

    async searchUser(payload:SearchUserType){
        const {name='',email=''} = payload;
        return userRepository.findSearchUser(name,email);
    }

    async getUserById(payload:GetUserByIdSchemaDto){
        const id = Number(payload.userId);
        return userRepository.findUserById(id);
    }

}

export default new UserService();