import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import BlogList from './pages/BlogList'
import CreatePage from './pages/CreatePage'
import BlogDetail from './pages/BlogDetail'
import UpdateBlog from './pages/UpdateBlog'
import Register from './pages/Register'
import Login from './pages/Login'
import ProtectedRoutes from './components/ProtectedRoutes'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog-list" element={
          <BlogList />
        } />
        <Route path="/create-blog" element={
          <ProtectedRoutes>
            <CreatePage />
          </ProtectedRoutes>
        } />
        <Route path="/blog-detail/:id" element={
          <ProtectedRoutes>
            <BlogDetail />
          </ProtectedRoutes>
        } />
        <Route path="/update-blog/:id" element={
          <ProtectedRoutes>
            <UpdateBlog />
          </ProtectedRoutes>
        } />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App