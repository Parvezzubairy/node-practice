import { Request, Response } from "express";
import userservice from '../services/user.service';

class UserController{
    async getUser(
        req: Request,
        res: Response
    ){
        try{
            const users = 
                await userservice.getUsers();
            res.status(200).json(users);
        }
        catch(err){
            res.status(500).json({message:"something went wrong",error:err});
        }
    }
    async createUser(
        req: Request,
        res: Response
    ){
        try{
            const result = 
                await userservice.craeteUser(req.body);
            res.status(200).json({
                userId: result,
                msg: "User created successfully"
            })
        }catch(err){
             res.status(500).json({message:"something went wrong",error:err});
        }
    }

    async searchUser(
        req: Request,
        res: Response
    ){
        try{
            const users = 
                await userservice.searchUser(req.query);
            res.status(200).json(users);

        }catch(err){
            res.status(500).json({message:"something went wrong",error:err});
        }
    }
}

export default new UserController();