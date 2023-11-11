import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
//need css

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  async function registerUser (event) {
    event.preventDefault()
    const response = await fetch('http://localhost:8080/api/register',{
      method : 'POST',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    })

    const data = await response.json()
    console.log(data)

    if(data.status === 'ok'){
      navigate('/login')
    }
  }

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={registerUser}>
          <input 
          value = {name}
          onChange={(e)=> setName(e.target.value)}
          type="text" 
          placeholder='Name'
          />
          <br />
          <br />
          <input 
          value = {email}
          onChange={(e)=> setEmail(e.target.value)}
          type="email" 
          placeholder='Email'
          />
          <br />
          <br />
          <input 
          value = {password}
          onChange={(e)=> setPassword(e.target.value)}
          type="password" 
          placeholder='Password'
          />
          <br />
          <br />
          <input type="submit" value="Register" />
      </form>
    </div>
  )
}

export default Register;