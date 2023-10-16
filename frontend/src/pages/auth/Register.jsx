import React,{useState} from 'react'
import Layout from '../../components/BaseLayout/Layout'
import './auth.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const apiKey = import.meta.env.VITE_API_URL

const Register = () => {
    const [name,setName] = useState('') 
    const [phone,setPhone] = useState('') 
    const [email,setEmail] = useState('') 
    const [address,setAddress] = useState('') 
    const [password,setPassword] = useState('')
    const [answer,setAnswer] = useState('')


    const navigate = useNavigate()

    const handleSubmit = async (e)=> {
        e.preventDefault()  //stops refreshing
        // console.log(name,email,password,phone);
        // toast.success('Registered Successfully')
        try{
            const res = await axios.post(`${apiKey}/api/v1/register`,{name,phone,address,email,password,answer});
            if (res && res.data.success){
                toast.success(res.data.message);
                navigate('/login')
            }
            else{
                toast.error(res.data.message);
            }

        }catch(error){
            toast.error('Something went wrong');
            console.log(error)
        }

    }

  return (
    <Layout title={'Register - Booktopia'}>
         <div className="form-container " style={{ minHeight: "90vh" }}>
            <form onSubmit={handleSubmit}>
                <h4 className="title">REGISTER</h4>

                <div className="mb-3">
                    <input  type="text" value = {name} onChange = {(e)=> setName(e.target.value)}  id="name" className="form-control"
                    placeholder="Enter Your Name" required  autoFocus/>
                </div>

                <div className="mb-3">
                    <input   type="email" value = {email} onChange = {(e)=> setEmail(e.target.value)} id="email" className="form-control" placeholder="Enter Your Email"
 required/>
                </div>

                <div className="mb-3">
                    <input  type="text" value = {address} onChange = {(e)=> setAddress(e.target.value)} id="address" className="form-control" placeholder="Enter Your Address"
required/>
                </div>

                <div className="mb-3">
                    <input type="text" value = {phone} onChange = {(e)=> setPhone(e.target.value)}  id="phone" className="form-control" placeholder="Enter Your Phone"  required/>
                </div>


                <div className="mb-3">
                    <input type="text"  value = {answer} onChange = {(e)=> setAnswer(e.target.value)}  id="answer" className="form-control" placeholder="Favourite Sport?"  required/>
                </div>

                <div className="mb-3">
                    <input type="password"  value = {password} onChange = {(e)=> setPassword(e.target.value)} id="password" className="form-control" placeholder="Enter your Password" required/>
                </div>

                <button type="submit" className="btn btn-primary">
                    Register
                 </button>
            </form>
        </div>
    </Layout>
  )
}

export default Register