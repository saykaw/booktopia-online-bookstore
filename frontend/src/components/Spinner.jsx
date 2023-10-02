import React,{useState,useEffect} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';

const Spinner = () => {
    const [count,setCount] = useState(5);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(()=>{
        const interval = setInterval(()=>{
            setCount((prevValue)=> --prevValue)
        },1000)
        count === 0 && navigate('/login',{
          state: location.pathname
        })
        return () => clearInterval(interval)
    },[count,navigate,location])
  return (
    <div style={{ width: '100px', margin: 'auto', display: 'block'}}>
      <ClipLoader color="#000" size={100}/>
      <h1>Redirecting to Login in {count} seconds</h1>
    </div>
  );
};

export default Spinner;