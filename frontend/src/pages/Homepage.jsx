import React, { useState, useEffect } from "react";
import Layout from '../components/BaseLayout/Layout'
// import {useAuth} from '../context/auth'
import axios from "axios";
import { Checkbox, Radio } from "antd";
import { Prices } from "../components/Prices";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/cart";
import toast from "react-hot-toast";
// import "../styles/HomePageStyles.css";

const apiKey = import.meta.env.VITE_API_URL

const Homepage = () => {
  // const[auth,setAuth] = useAuth();
  const navigate= useNavigate( )
  const [cart,setCart] = useCart()
  const[products,setProducts] = useState([])
  const[categories,setCategories] = useState([])
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  //viewing the categories
  const getAllCategory = async(req,res) => {
    try {
      const {data} = await axios.get(`${apiKey}/api/v1/category/view-categories`)
      if(data?.success){
        setCategories(data?.category)
      }
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(()=>{
    getAllCategory();
    getTotal();
  },[])
  

  const getAllProducts = async( ) => {
    try{
      setLoading(true)
      const {data} = await axios.get(`${apiKey}/api/v1/product/product-list/${page}`);
      setLoading(false)
      setProducts(data.products)
    }
    catch(error){
      setLoading(false)
      console.log(error)
    }
  }

  useEffect(()=>{
    if(!checked.length || !radio.length)  getAllProducts()
  },[checked.length,radio.length])

  useEffect(()=>{
    if(checked.length || radio.length)  filterProduct()
  },[checked,radio])



  //get total count 
  const getTotal = async() => {
    try {
      const {data} = await axios.get(`${apiKey}/api/v1/product/product-count`)
      setTotal(data?.total)
      
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(()=> {
    if(page === 1) return ;
    LoadMore();
  },[page])

  //load more
  const LoadMore = async () => {
    try {
      setLoading(true)
      const {data} = await axios.get(`${apiKey}/api/v1/product/product-list/${page}`)
      setLoading(false)
      setProducts([...products,...data?.products])
    } catch (error) {
      console.group(error)
      setLoading(false)
    }
  }


  //filter by category
  const handleFilter = (value,id) =>{
    let all = [...checked]
    if (value){
      all.push(id)
    }else{
      all = all.filter(c => c!==id )
    }
    setChecked(all)
  }


  //getting the filtered product
  const filterProduct = async() => {
    try {
      const {data} = await axios.post(`${apiKey}/api/v1/product/product-filters`,{checked,radio})
      setProducts(data?.products)
      
    } catch (error) {
      console.log(error)
      
    }
  }
  return (
    <Layout title={'Booktopia - Best Offers'}> 
      <div className="row mt-5">
        <div className="col-md-3">
          < h3 className="text-center">Filter by category</h3>
          <div className="d-flex flex-column m-5">
          {categories?.map (c => (
            <Checkbox key={c._id} onChange={(e) => handleFilter(e.target.checked, c._id)}>{c.name}</Checkbox>
          ))}
          </div> 
          < h3 className="text-center mt-4">Filter by Price</h3>
          <div className="d-flex flex-column  m-5">
            <Radio.Group onChange={e => setRadio(e.target.value)}>
              {Prices?.map((p) => (
              <div key={p._id}>
                <Radio value={p.array}> {p.name} </Radio>
              </div>
              ))}
            </Radio.Group>
          </div>  
          <div className="d-flex flex-column  m-3">
            <button className="btn btn-danger" onClick = { () => window.location.reload()}>Reset Filters</button>
          </div>
        </div>
        <div className="col-md-9">
          <h1 className="text-center">All Books</h1>
          <div className="d-flex flex-wrap">
          {products?.map((p)=>(
                    <div className="card m-4" style={{ width: "18rem" }}>
                        <img className="card-img-top" src={`${apiKey}/api/v1/product/product-photo/${p._id}`} alt={p.name} style={{ width: "18rem", height:"400px"  }}/>
                        <div className="card-body">
                          <h5 className="card-title">{p.name}</h5>
                          <p className="card-text">{p.description.substring(0,30)}...</p>
                          <p className="card-text"> &#8377; {p.price}</p>
                          <button className="btn btn-primary ms-2" onClick={()=>navigate(`/product/${p.slug}`)}>More details</button>
                          <button className="btn btn-secondary ms-2" 
                          onClick={()=>
                            {setCart([...cart,p])
                            localStorage.setItem('cart',JSON.stringify([...cart,p]))
                            toast.success("Item added to cart!!");
                          }}>Add to cart
                          </button>
                        </div>
                    </div>
                ))}
           </div>
          <div className="m-4 p-4">
            {products && products.length < total && (
              <button className="btn btn-warning" 
              onClick={(e)=> {
              e.preventDefault()
              setPage(page+1)}}>
                {loading ? "Loading ..." : "Load More"}
              </button>
            )} 
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Homepage