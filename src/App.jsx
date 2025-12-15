import React, { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import TrustedBy from './components/TrustedBy.jsx';

const App = () => {

    const [theme,setTheme] = useState(localStorage.getItem("theme")?localStorage.getItem('theme'):"light");

  return (
    <div className='dark:bg-black relative'>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero/>
      <TrustedBy/>
    </div>
  )
}

export default App