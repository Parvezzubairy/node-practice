import userRepository from '../repositories/user.repository';
import {CreateUserDto} from '../types/user.types';
class UserService{

    async getUsers(){
        return userRepository.findAllUser();
    }

    async craeteUser(payload:CreateUserDto){
        return userRepository.createUser(payload);
    }

}

export default new UserService();