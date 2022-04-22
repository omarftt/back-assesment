import {Router} from 'express';
const router = Router();

import {createListFavs, getListFavs, getListFavById, deleteFavById} from '../controllers/listFavs.controller';
import {isAuthenticated} from '../middlewares/authjwt';

router.post('/',isAuthenticated, createListFavs);
router.get('/',isAuthenticated, getListFavs);
router.get('/:listId', isAuthenticated,getListFavById);
router.delete('/:listId',isAuthenticated, deleteFavById);


export default router;