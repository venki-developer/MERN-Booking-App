import express from 'express';
import {getUser, login, register} from '../controllers/userController.js';
import authMidd from '../middlewares/Auth.js'
//user routes
const router = express.Router();

router.route('/register').post(register);

router.route('/login').post(login);

router.route('/get-user-by-id').post(authMidd,getUser);


export default router;