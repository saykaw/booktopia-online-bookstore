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
      <div className="form-container ">
            <form onSubmit={handleSubmit}>
            <h4 className="title">RESET PASSWORD</h4>

                <div className="mb-3">
                    <input  value = {email} onChange = {(e)=> setEmail(e.target.value)} type="email" id="email" className="form-control"
 placeholder="Enter Your Email " required/>
                </div>

                <div className="mb-3">
                    <input  value = {answer} onChange = {(e)=> setAnswer(e.target.value)}  className="form-control" type="text" id="answer" placeholder="Enter Favorite Sport"
                required/>
                </div>

                <div className="mb-3">
                    <input value = {newPassword} onChange = {(e)=> setnewPassword(e.target.value)} type="password" id="password" className="form-control" placeholder="Enter New Password" required/>
                </div>

                <button className="btn btn-primary" type="submit">RESET</button>
            </form>
        </div>
        
    </Layout>
  )
}

export default ForgotPassword