import React,{useState}from 'react'
import Layout from '../../components/BaseLayout/Layout'
import './auth.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const apiKey = import.meta.env.VITE_API_URL

const ForgotPassword = () => {

    const [email,setEmail] = useState('') ;
    const [answer,setAnswer] = useState('');
    const [newPassword,setnewPassword] = useState('');
    const navigate = useNavigate()
    
    const handleSubmit = async (e)=> {
        e.preventDefault()  //stops refreshing
        try{
            const res = await axios.post(`${apiKey}/api/v1/forgot-password`,{email,answer,newPassword});
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
    <Layout title={'Forgot Password - Booktopia'}>
        <div className="auth-page">
            <h1>Reset Password</h1>
            <form onSubmit={handleSubmit}>

                <div className="form-elem">
                    <label htmlFor="email">Email:</label>
                    <input  value = {email} onChange = {(e)=> setEmail(e.target.value)} type="email" id="email" name="email" required/>
                </div>

                <div className="form-elem">
                    <label htmlFor="answer">What is your favourite sport?:</label>
                    <input  value = {answer} onChange = {(e)=> setAnswer(e.target.value)} type="text" id="answer" name="answer" required/>
                </div>

                <div className="form-elem">
                    <label htmlFor="password"> New Password:</label>
                    <input value = {newPassword} onChange = {(e)=> setnewPassword(e.target.value)} type="password" id="password" name="password" required/>
                </div>

                <button type="submit">Reset</button>
            </form>
        </div>
        
    </Layout>
  )
}

export default ForgotPassword