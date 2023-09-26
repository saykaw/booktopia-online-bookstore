import userModel from '../models/userModel.js';
import {hashPassword,comparePassword} from '../helper/authHelper.js';
import jwt from "jsonwebtoken";

//this is a post request, therefore use postman
//req,res : callback function
export const registerController = async(req,res) => {
    try{
        const {name,email,phone,password} =  req.body;
        //validation
        if(!name){
            return res.send({error: 'Name is required' })
        }
        if(!email){
            return res.send({error: 'Email is required' })
        }
        if(!phone){
            return res.send({error: 'Phone is required' })
        }
        if(!password){
            return res.send({error: 'Password is required' })
        }

        //existing user
        const existingUser =  await userModel.findOne({email})
        if(existingUser) {
            return res.status(200).send({
                success:true,
                message:'You are already registered'
            })
        }

        //regsiter user now
        const hashedPassword = await hashPassword(password);
        //key:value pair  - key : password ,value :hashedPassword
        //save the user 
        const user = new userModel ({name,email,phone,password:hashedPassword}).save()

        res.status(200).send({
            success:true,
            message:'User registered successfully',
            user
        })
    }
    catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in registration',
        })
    }
}



export const loginController = async(req,res) => {
    try{
        const {email,password} =  req.body;
        //validation
        if(!email || !password){
            return res.status(404).send({
                success : false,
                message: 'Invalid Email or Password' })
        }
        //after getting email, get user and their password
        //we decrypt the password
        const user = await userModel.findOne({email})
        if(!user){
            return res.status(404).send({
                success:false,
                message:'Email is not registered.'
            })
        }
        const match = await comparePassword(password, user.password)
        if(!match){
            return res.status(200).send({
                success:false,
                message:"Invalid password"
            })
        }

        //token creation
        const token = await jwt.sign({ _id:user._id }, process.env.JWT_SECRET, {expiresIn:'7d'})
        res.status(200).send({
            success:true,
            message:"Login Successful",
            user:{
                name:user.name,
                email:user.email,
                phone:user.phone
            },
            token,
        })

    }
    catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in Login',
        })
    }

}

export const testController = (req,res) => {
    res.send("protected route")
}
