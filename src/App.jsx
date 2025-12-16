import { useState } from 'react'
import {LoadingScreen} from './components/Loading'
import Navbar from './components/sections/Navbar'

import "./index.css"

function App() {
  const [loading,setLoading]=useState(false);
  return(
    <>
    {!loading && <LoadingScreen onComplete={()=>{setLoading(true)}}/>}{" "}
      <div className={`min-h-screen transition-opacity duration-700${loading ? 'opacity-100' : 'opacity-0'} bg-black text-gray-100`}>
        <Navbar />
      </div>
    </>
  )
}
  
  

export default App
