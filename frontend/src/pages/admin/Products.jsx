import React,{useState,useEffect} from 'react'
import AdminMenu from '../../components/BaseLayout/AdminMenu'
import Layout from '../../components/BaseLayout/Layout'
import axios from 'axios'
import toast from 'react-hot-toast'


const apiKey = import.meta.env.VITE_API_URL


const Products = () => {
    const [products,setProducts] = useState([])
    //get all products
    const getAllProducts = async () => {
        try {
            const {data} = await axios.get(`${apiKey}/api/v1/product/get-products`)
            setProducts(data.products)
        } catch (error) {
            console.log(error)
            toast.error('Something went wrong :(')
        }
    }

    useEffect(()=>{
        getAllProducts()
    },[])

  return (
    <Layout>
        <div className="row">
            <div className="col-md-3 ">
                <AdminMenu/>
            </div>
            <div className="col-md-9">
                <h1 className="text-center">All products list</h1>
                <div className="d-flex">
                {products?.map((p)=>(
                    <div className="card m-2" style={{ width: "18rem" }} key={p._id}>
                    <img className="card-img-top" src={p.photo} alt={p.name}/>
                    <div className="card-body">
                        <h5 className="card-title">{p.name}</h5>
                        <p className="card-text">{p.description}</p>
                    </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default Products