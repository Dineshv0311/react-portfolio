import { useState } from 'react'
import {LoadingScreen} from './components/Loading'
import Navbar from './components/sections/Navbar'
import {MobileMenu} from './components/MobileMenu'
import {Home} from './components/sections/Home'
import {About} from './components/sections/About'
import "./index.css"

function App() {
  const [loading,setLoading]=useState(false);
  const[menuOpen,setMenuOpen]=useState(false);
  return(
    <>
    {!loading && <LoadingScreen onComplete={()=>{setLoading(true)}}/>}{" "}
      <div className={`min-h-screen transition-opacity duration-700${loading ? 'opacity-100' : 'opacity-0'} bg-black text-gray-100`}>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Home/>
        <About/>
      </div>
    </>
  )
}
  
  

export default App
