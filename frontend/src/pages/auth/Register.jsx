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
        <div className="auth-page">
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-elem">
                    <label htmlFor="name">Name:</label>
                    <input  value = {name} onChange = {(e)=> setName(e.target.value)} type="text" id="name" name="name" required/>
                </div>

                <div className="form-elem">
                    <label htmlFor="email">Email:</label>
                    <input  value = {email} onChange = {(e)=> setEmail(e.target.value)} type="email" id="email" name="email" required/>
                </div>

                <div className="form-elem">
                    <label htmlFor="address">Address:</label>
                    <input  value = {address} onChange = {(e)=> setAddress(e.target.value)} type="text" id="address" name="address" required/>
                </div>

                <div className="form-elem">
                    <label htmlFor="phone">Phone:</label>
                    <input  value = {phone} onChange = {(e)=> setPhone(e.target.value)} type="tel" id="phone" name="phone" required/>
                </div>


                <div className="form-elem">
                    <label htmlFor="answer">What is your favourite sport?</label>
                    <input  value = {answer} onChange = {(e)=> setAnswer(e.target.value)} type="text" id="answer" name="answer" required/>
                </div>

                <div className="form-elem">
                    <label htmlFor="password">Password:</label>
                    <input value = {password} onChange = {(e)=> setPassword(e.target.value)} type="password" id="password" name="password" required/>
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    </Layout>
  )
}

export default Register