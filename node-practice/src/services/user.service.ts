import userRepository from '../repositories/user.repository';
import {CreateUserDto,SearchUserType} from '../types/user.types';
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

}

export default new UserService();