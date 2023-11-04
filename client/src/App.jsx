import { useState } from 'react'
import HomePage from './Components/HomePage'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Routes>
      <Route path = '/homepage' element={<HomePage/>}/>
    </Routes> */}
    <HomePage/>
    </>
  )
}

export default App
