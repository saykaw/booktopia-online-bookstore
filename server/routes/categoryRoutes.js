import express from 'express';
import { isAdmin, requireSignIn } from '../middleware/authMiddleware.js';
import { createCategoryController , getCategoryController, updateCategoryController, viewCategoryController} from '../controller/categoryController.js';

//router object
const router = express.Router();

//post: create category
router.post('/create-category',requireSignIn,isAdmin,createCategoryController)

//put: update category
router.put('/update-category/:id',requireSignIn,isAdmin,updateCategoryController)

//view all categories
router.get('/view-categories',viewCategoryController)

//view a single category
router.get('/get-category',getCategoryController)


export default router