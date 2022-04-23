import {Router} from 'express';
const router = Router();

import {signIn,signUp} from '../controllers/auth.controller';


router.post('/login',signIn)
router.post('/register',signUp)

export default router;