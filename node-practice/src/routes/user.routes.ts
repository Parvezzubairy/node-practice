import {Router} from 'express';
import userController from '../controllers/user.controller';
import { validate } from '../middlewares/validate.middleware';
import { CreateUserSchema } from '../schemas/user.schema';

const router = Router();

router.get('/',userController.getUser);
router.post('/', validate(CreateUserSchema), userController.createUser);
router.get('/search',userController.searchUser);
router.get('/:userId',userController.getUserById);

export default router;