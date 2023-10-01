import React,{useState} from 'react';
import Layout from '../../components/BaseLayout/Layout'
import './auth.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Login = () => {
    
    const [email,setEmail] = useState('') ;
    const [password,setPassword] = useState('');
    const navigate = useNavigate()
    
    const handleSubmit = async (e)=> {
        e.preventDefault()  //stops refreshing
        // console.log(name,email,password,phone);
        // toast.success('Registered Successfully')
        try{
            const res = await axios.post('http://localhost:8080/api/v1/login',{email,password});
            if (res && res.data.success){
                toast.success(res.data.message);
                navigate('/')
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
    <Layout title={'Login - Booktopia'}>
        <div className="auth-page">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>

                <div className="form-elem">
                    <label htmlFor="email">Email:</label>
                    <input  value = {email} onChange = {(e)=> setEmail(e.target.value)} type="email" id="email" name="email" required/>
                </div>

                <div className="form-elem">
                    <label htmlFor="password">Password:</label>
                    <input value = {password} onChange = {(e)=> setPassword(e.target.value)} type="password" id="password" name="password" required/>
                </div>

                <button type="submit">Login</button>
            </form>
        </div>
    </Layout>
  )
}

export default Login