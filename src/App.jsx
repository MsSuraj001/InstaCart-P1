
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Components/Layout/Layout'
import Home from './Components/Pages/Home'

function App() {

  return (
    <>
     <Routes>
        <Route path='/' element={<Home/>}/>
     </Routes>
    </>
  )
}

export default App
