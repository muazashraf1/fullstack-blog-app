import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function BlogDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [singleBlog, setSingleBlog] = useState(null)

  const singleFetching = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate('/login')
    } return
    try {
      const fetching = await axios.get(`http://127.0.0.1:8000/api/blogs/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setSingleBlog(fetching.data)
    } catch (error) {
      console.error("Error in fetching single blog:", error)
    }
  }

  useEffect(() => {
    singleFetching()
  }, [id])

  if (!singleBlog) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <p className="text-xl text-gray-500">Loading...</p>
      </div>
    )
  }


  const handleDelete = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate('/login')
    } return
    
    try {
      const deleting = await axios.delete(`http://127.0.0.1:8000/api/blogs/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      if (deleting.status === 204) {
        // singleFetching()
        navigate('/blog-list')
      }
    } catch (error) {
      console.error("error in deleting:", error)
    }
  }

  console.log(id);


  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 flex justify-center">


      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">


        <div className="relative">

          {/* Back Button */}
          <button
            onClick={() => navigate('/blog-list')}
            className="absolute top-4 left-4 bg-white/80 backdrop-blur px-4 py-2 rounded-lg shadow hover:shadow-md hover:scale-105 transition"
          >
            ← Back
          </button>

          {/* Image */}
          <img
            src={singleBlog.image}
            alt={singleBlog.title}
            className="w-full h-[400px] object-cover"
          />

        </div>

        {/* Action Bar (Edit/Delete) */}
        <div className="flex justify-end gap-3 px-6 py-4 border-b bg-gray-50">

          {/* Edit Button */}
          <button
            onClick={() => navigate(`/update-blog/${id}/`)}
            className="px-5 py-2 bg-blue-500 text-white rounded-xl shadow-md 
    hover:bg-blue-600 hover:scale-105 transition-all duration-200"
          >
            ✏️ Edit
          </button>

          {/* Delete Button */}
          <button
            onClick={handleDelete}
            className="px-5 py-2 bg-red-500 text-white rounded-xl shadow-md 
    hover:bg-red-600 hover:scale-105 transition-all duration-200"
          >
            🗑️ Delete
          </button>

        </div>
        {/* Content */}
        <div className="p-8">

          {/* Title */}
          <h1 className="text-3xl font-bold mb-4">
            {singleBlog.title}
          </h1>

          {/* Author + Date */}
          <div className="flex justify-between items-center text-sm text-gray-500 mb-6">
            <p>By {singleBlog.author}</p>
            <p>{new Date(singleBlog.created_at).toLocaleDateString()}</p>
          </div>

          {/* Status Badge */}
          <span className={`inline-block px-3 py-1 text-xs rounded-full mb-4 
            ${singleBlog.status === "published"
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {singleBlog.status}
          </span>

          {/* Content */}
          <p className="text-gray-700 leading-relaxed text-lg">
            {singleBlog.content}
          </p>

        </div>

      </div>

    </div>
  )
}

export default BlogDetail