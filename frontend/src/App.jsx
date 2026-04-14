import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import BlogList from './pages/BlogList'
import CreatePage from './pages/CreatePage'
import BlogDetail from './pages/BlogDetail'
import UpdateBlog from './pages/UpdateBlog'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog-list" element={<BlogList />} />
        <Route path="/create-blog" element={<CreatePage />} />
        <Route path="/blog-detail/:id" element={<BlogDetail />} />
        <Route path="/update-blog/:id" element={<UpdateBlog />} />
      </Routes>
    </>
  )
}

export default App