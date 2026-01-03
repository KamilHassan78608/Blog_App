import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Layout from './Layout/Layout.jsx';
import Home from './Pages/Home.jsx';
import Temp from './Temp.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
    // <Temp />
  )
}

export default App
