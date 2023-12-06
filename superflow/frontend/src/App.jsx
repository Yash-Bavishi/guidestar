import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './screens/Login/Login'
import Step1 from './screens/Onboarding/Step1'
import Step2 from './screens/Onboarding/Step2'
import {Route, Routes, Link} from 'react-router-dom';
import Step3 from './screens/Onboarding/Step3'
import Home from './screens/Home/Home'
import Bread from './screens/Bread/Bread'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/onboard/step1" element={<Step1 />} />
        <Route path="/onboard/step2" element={<Step2 />} />
        <Route path="/onboard/step3" element={<Step3 />} />
        <Route path="/home" element={<Home />} />
        <Route path="/bread" element={<Bread />} />
      </Routes> 
      {/* <Login /> */}
    </>
  )
}

export default App
