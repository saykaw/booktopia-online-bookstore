import productModel from "../models/productModel.js"
import fs from 'fs'
import slugify from 'slugify'

export const createProductController = async(req,res) => {
    try{
        const {name,slug,author,description,price,category,quantity,shipping} = req.fields 
        const {photo} = req.files
        //validate the data
        switch(true){
            case !name:
                return res.status(500).send({error:'Name is required'})
            case !author:
                return res.status(500).send({error:'Author is required'})
            case !description:
                return res.status(500).send({error:'Description is required'})
            case !price:
                return res.status(500).send({error:'Price is required'})
            case !category:
                return res.status(500).send({error:'Category is required'})
            case !quantity:
                return res.status(500).send({error:'Quantity is required'})
            case !shipping:
                return res.status(500).send({error:'Shipping is required'})
            case photo && photo.size >1000000:
                return res.status(500).send({error:'Photo is required and should be less than 1MB'})   
        }

        const products = new productModel({...req.fields,slug:slugify(name)})
        if(photo){
            products.photo.data = fs.readFileSync(photo.path)
            products.photo.contentType = photo.type
        }
        await products.save()
        res.status(201).send({
            success:true,
            message:'Product created successfully',
            products,
        })


    }
    catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:'Error in creating product'
        })
    }
} 

export const getproductController = async(req,res) => {
    try{
        const products = await productModel.find({}).populate('category').select("-photo").limit(12).sort({createdAt : -1})
        res.status(200).send({
            success:true,
            count :products.length,
            message:'Product viewed successfully',
            products,
        })

    }
    catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:'Error in getting product'
        })

    }
}

export const getsingleProductController = async(req,res) => {
    try{
        const product = await productModel.findOne({slug:req.params.slug}).select("-photo").populate("category")
        res.status(200).send({
            success:true,
            message:'Single Product Fetched Successfully',
            product,
        })

    }
    catch(error){
        console.log(error)
         res.status(500).send({
            success:false,
            error,
            message:'Error in getting specified product'
         })
    }
}

export const getphotoController = async (req,res) => {
    try{
        const product = await productModel.findById(req.params.pid).select("photo")
        if(product.photo.data)
        {
            res.set("Content-type",product.photo.contentType)
            return res.status(200).send(product.photo.data)
        }

    }
    catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:'Error while getting photo'
         })
    }
}

export const deleteproductController = async(req,res) =>{
    try {
        await productModel.findByIdAndDelete(req.params.pid).select("-photo")
        res.status(200).send({
            success:true,
            message:'Product deleted successfully'
        })

        
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:'Error while deleting product'
         })   
    }
}

export const updateproductController =  async(req,res) => {
    try{
        const {name,slug,author,description,price,category,quantity,shipping} = req.fields 
        const {photo} = req.files
        //validate the data
        switch(true){
            case !name:
                return res.status(500).send({error:'Name is required'})
            case !author:
                return res.status(500).send({error:'Author is required'})
            case !description:
                return res.status(500).send({error:'Description is required'})
            case !price:
                return res.status(500).send({error:'Price is required'})
            case !category:
                return res.status(500).send({error:'Category is required'})
            case !quantity:
                return res.status(500).send({error:'Quantity is required'})
            case !shipping:
                return res.status(500).send({error:'Shipping is required'})
            case photo && photo.size >1000000:
                return res.status(500).send({error:'Photo is required and should be less than 1MB'})   
        }

        const products = await productModel.findByIdAndUpdate(req.params.pid,{...req.fields,slug:slugify(name)},{new:true})
        if(photo){
            products.photo.data = fs.readFileSync(photo.path)
            products.photo.contentType = photo.type
        }
        await products.save()
        res.status(201).send({
            success:true,
            message:'Product updated successfully',
            products,
        })


    }
    catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:'Error while updating product'
        })
    }
}