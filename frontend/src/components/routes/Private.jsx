import {useState,useEffect} from 'react';
import {useAuth} from "../../context/auth";
import {Outlet} from "react-router-dom";
import axios from "axios"; 
import Spinner from '../Spinner';
const apiKey = import.meta.env.VITE_API_URL


export default function PrivateRoute(){
    const[ok,setOk] = useState(false)
    const[auth,setAuth] = useAuth()

    useEffect(() => {
        const authCheck = async() => {
            const res = await axios.get(`${apiKey}/api/v1/user-auth`)
            if(res.data.ok){
                setOk(true)
            }else{
                setOk(flase)
            }
        }
        if (auth?.token) authCheck();
    },[auth?.token])

    return ok ? <Outlet/>: <Spinner/>

}