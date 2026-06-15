import userRepository from '../repositories/user.repository';
import {CreateUserDto,SearchUserType} from '../types/user.types';
import {GetUserByIdSchemaDto} from '../schemas/user.schema';
class UserService{

    async getUsers(){
        return userRepository.findAllUser();
    }

    async craeteUser(payload:CreateUserDto){
        return userRepository.createUser(payload);
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