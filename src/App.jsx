import React from 'react'
import { Routes, Route } from 'react-router-dom'

// Components
import Navbar from './components/Navbar'

// Pages
import Main from './pages/Main'
import Input from './pages/Input'

const App = () => {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/input' element={<Input />} />
        </Routes>
      </>
    )
}

export default App