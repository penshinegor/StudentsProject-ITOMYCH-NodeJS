import {Router} from 'express';
import {loginController, signUpController, updateInfoController} from '../controllers/user-controller';
import {loginValidation, signUpValidation, updateInfoValidation} from '../middleware/user-validation-middleware';
import {getListOfHeroesController} from '../controllers/class-controller';

const router = new Router();

router.post('/login', loginValidation, loginController);
router.post('/signup',signUpValidation, signUpController);
router.put('/update', updateInfoValidation, updateInfoController);
router.get('/heroes', getListOfHeroesController);

export default router;