import express from 'express'
import {requireSignIn,isAdmin} from '../middleware/authMiddleware.js';
import { createProductController, deleteproductController, getphotoController, getproductController, getsingleProductController, updateproductController } from '../controller/productcontroller.js';
import formidable from 'express-formidable'

const router = express.Router();

//creating a product
router.post('/create-product',requireSignIn,isAdmin,formidable(),createProductController)

//get products
router.get('/get-products',getproductController)

//get a single product
router.get('/single-product/:slug',getsingleProductController)

//for photo
router.get('/product-photo/:pid',getphotoController)

//delete product
router.delete('/delete-product/:pid',deleteproductController)

//update product 
router.put('/update-product/:pid',requireSignIn,isAdmin,formidable(),updateproductController)

export default router