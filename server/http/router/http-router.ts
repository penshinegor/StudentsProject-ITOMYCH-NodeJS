import {Router} from 'express';
import {getListOfHeroes, loginValidation, signUpValidation, updateInfoValidation} from '../controllers/http-controllers';

const router = new Router();

router.post('/login', loginValidation);
router.post('/signup',signUpValidation);
router.put('/update', updateInfoValidation);
router.get('/heroes', getListOfHeroes);

export default router;