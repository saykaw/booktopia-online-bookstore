import React,{useState} from 'react';
import Layout from '../../components/BaseLayout/Layout'
import './auth.css'
import axios from 'axios';
import { useNavigate ,useLocation} from 'react-router-dom';
import toast from 'react-hot-toast';
import { useAuth } from '../../context/auth';

const apiKey = import.meta.env.VITE_API_URL


const Login = () => {
    
    const [email,setEmail] = useState('') ;
    const [password,setPassword] = useState('');
    const [auth,setAuth] = useAuth()
    const navigate = useNavigate()
    const location  = useLocation()
    
    const handleSubmit = async (e)=> {
        e.preventDefault()  //stops refreshing
        // console.log(name,email,password,phone);
        // toast.success('Registered Successfully')
        try{
            const res = await axios.post(`${apiKey}/api/v1/login`,{email,password});
            if (res && res.data.success){
                toast.success(res.data.message);
                setAuth({
                    ...auth,
                    user: res.data.user,
                    token : res.data.token
                })
                localStorage.setItem('auth',JSON.stringify(res.data))
                navigate(location.state || '/')
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

                <button type="button" onClick={()=> {navigate('/forgot-password')}}>Forgot Password</button>

                <button type="submit">Login</button>
            </form>
        </div>
    </Layout>
  )
}

export default Login