import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './signup.jsx'
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import Login from './Login.jsx'
import Restropage from './Restropage.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
 <BrowserRouter>
 <Routes>
  <Route path='/register' element={<Signup/>}></Route>
  <Route path='/login' element={<Login/>}></Route>
  <Route path='/Restropage' element={<Restropage/>}></Route>
 </Routes>
 </BrowserRouter>  )
}

export default App
