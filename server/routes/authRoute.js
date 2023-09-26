import express from 'express';
import {registerController,loginController,testController} from '../controller/authController.js'
import {requireSignIn,isAdmin} from '../middleware/authMiddleware.js';

//router object
const router = express.Router();


//routing
//REGISTER || METHOD POST
router.post('/register',registerController)

//LOGIN || POST 
router.post('/login',loginController)

//testing route
router.get('/test',requireSignIn,isAdmin, testController)
export default router; 