import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes,Route } from 'react-router-dom'
import { LoginRegister} from './component/LoginSignup'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Routes>
      
      <Route path='/' element={<LoginRegister/>}></Route>
    </Routes>
   </div>
  )
}

export default App
