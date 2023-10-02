import express from 'express';
import {registerController,loginController,testController,forgotPasswordController} from '../controller/authController.js'
import {requireSignIn,isAdmin} from '../middleware/authMiddleware.js';

//router object
const router = express.Router();


//routing
//REGISTER || METHOD POST
router.post('/register',registerController)

//LOGIN || POST 
router.post('/login',loginController)

//forgot password || POST
router.post('/forgot-password',forgotPasswordController)

//testing route
router.get('/test',requireSignIn,isAdmin, testController)
export default router; 

//protected user auth 
router.get("/user-auth",requireSignIn,(req,res)=>{
    res.status(200).send({ok:true}) 
})


