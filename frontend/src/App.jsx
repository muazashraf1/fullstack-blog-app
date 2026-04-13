import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import BlogList from './pages/BlogList'
import CreatePage from './pages/CreatePage'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog-list" element={<BlogList />} />
        <Route path="/create-blog" element={<CreatePage />} />
      </Routes>
    </>
  )
}

export default App