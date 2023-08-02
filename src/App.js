import React from 'react'
import "./App.css"
import Main from './components/Main'
import Footer from './components/Footer'
import About from './components/About'
import Topbar from './components/Topbar'

const App = () => {
  return (
    <div>
      <Main />
      <Topbar/>
      <About />
      <Footer/>
    </div>
  )
}

export default App
