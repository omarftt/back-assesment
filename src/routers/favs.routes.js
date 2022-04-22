import {Router} from 'express';
const router = Router();

import {createFav} from '../controllers/favs.controller';
import {isAuthenticated} from '../middlewares/authjwt';

router.post('/:listId',isAuthenticated, createFav);


export default router;