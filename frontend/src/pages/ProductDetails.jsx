import React, { useEffect, useState } from 'react'
import Layout from '../components/BaseLayout/Layout'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const apiKey = import.meta.env.VITE_API_URL

const ProductDetails = () => {
    const params = useParams()
    const [product,setProduct] = useState({})
    const [relatedProducts,setRelatedProducts] = useState([])


    //getting at initial time
    useEffect(()=>{
        if(params?.slug) getProduct()
    },[params?.slug]) 

    //get the product
    const getProduct = async()=>{
        try {
            const {data} = await axios.get(`${apiKey}/api/v1/product/single-product/${params.slug}`)
            setProduct(data?.product)
            getSimilarProduct(data?.product._id,data?.product.category._id)
            
        } catch (error) {
            console.log(error) 
        }

    }  

    //get similar product
    const getSimilarProduct = async (pid, cid) => {
        try {
          const { data } = await axios.get( `${apiKey}/api/v1/product/related-product/${pid}/${cid}`);
          setRelatedProducts(data?.products);
        } catch (error) {
          console.log(error);
        }
    };


    return (
    <Layout>
        {/* <h1>Product Details</h1>
        {JSON.stringify(product,null,4)} */}
      <div className="row container mt-5">
        <div className="col-md-3">
          <img
            src={`${apiKey}/api/v1/product/product-photo/${product._id}`}
            className="card-img-top"
            // width={"75px"}
            height={"400px"}
            alt={product.name}
          />
        </div>
        <div className="col-md-6 ">
          <h1 className="text-center">Product Details</h1>
          <h6>Name : {product.name}</h6>
          <h6>Author : {product.author}</h6>
          <h6>Description : {product.description}</h6>
          <h6>Price : {product.price}</h6>
          <h6>Category : {product?.category?.name}</h6>
          {/* <button className="btn btn-primary ms-0  mt-4">Add To Cart</button> */}
          <button className="btn btn-primary ms-0  mt-4">Go Back</button>
          {/* <NavLink
            to="/categories"
            className="list-group-item list-group-item-action"
          >
           <button className="btn btn-primary ms-0  mt-4" >Go Back</button>
          </NavLink> */}
        </div>
      </div>
      <hr />
      <div className="row container">
        <h3>Similar Products</h3>
        {relatedProducts.length < 1 && (
          <p className="text-center">No Similar Products found </p>
        )}
        <div className="d-flex flex-wrap">
          {relatedProducts?.map((p) => (
            <div className="card m-2" style={{ width: "18rem" }}>
              <img
                src={`${apiKey}/api/v1/product/product-photo/${p?._id}`}
                className="card-img-top"
                alt={p.name}
              />
              <div className="card-body">
                <h5 className="card-title text-center">{p.name}</h5>
                <p className="card-text text-center">{p.author}</p>
                <p className="card-text text-center"> &#8377; {p.price}</p>
                <button class="btn btn-secondary ms-1">Add To Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default ProductDetails