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
      <div className="row container mt-2">
        <div className="col-md-6">
          <img
            src={`${apiKey}/api/v1/product/product-photo/${product._id}`}
            className="card-img-top"
            alt={product.name}
            height="300"
            width={"350px"}
          />
        </div>
        <div className="col-md-6 ">
          <h1 className="text-center">Product Details</h1>
          <h6>Name : {product.name}</h6>
          <h6>Description : {product.description}</h6>
          <h6>Price : {product.price}</h6>
          <h6>Category : {product?.category?.name}</h6>
          <button class="btn btn-secondary ms-1">Add To Cart</button>
        </div>
      </div>
      <hr />
      <div className="row container">
        <h6>Similar Products</h6>
        {relatedProducts.length < 1 && (
          <p className="text-center">No Similar Products found</p>
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
                <h5 className="card-title">{p.name}</h5>
                <p className="card-text">{p.description.substring(0, 30)}...</p>
                <p className="card-text"> &#8377; {p.price}</p>
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