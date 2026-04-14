import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function BlogDetail() {
  const { id } = useParams()
  const [singleBlog, setSingleBlog] = useState(null)

  const singleFetching = async () => {
    try {
      const fetching = await axios.get(`http://127.0.0.1:8000/api/blogs/${id}/`)
      setSingleBlog(fetching.data)
    } catch (error) {
      console.error("Error in fetching single blog:", error)
    }
  }

  useEffect(() => {
    singleFetching()
  }, [])

  if (!singleBlog) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <p className="text-xl text-gray-500">Loading...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 flex justify-center">

      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">

        {/* Image */}
        <img
          src={singleBlog.image}
          alt={singleBlog.title}
          className="w-full h-[400px] object-cover"
        />

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