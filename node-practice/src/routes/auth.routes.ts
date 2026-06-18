import {Router} from 'express';
import { validate } from '../middlewares/validate.middleware';
import { LoginSchema } from '../schemas/auth.schema';
import authController from '../controllers/auth.controller';

const router = Router();

router.post('/',validate(LoginSchema), authController.Login);

export default router;