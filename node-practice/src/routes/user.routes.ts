import {Router} from 'express';
import userController from '../controllers/user.controller';

const router = Router();

router.get('/',userController.getUser);
router.post('/', userController.createUser);
router.get('/search',userController.searchUser);

export default router;