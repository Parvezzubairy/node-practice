import {Request, Response} from 'express';
import authService from '../services/auth.service';
class AuthController{

    async Login(
        req: Request,
        res: Response
    ){
        const result = await authService.login(req.body);
        return res.json(result);
    }
}

export default new AuthController();