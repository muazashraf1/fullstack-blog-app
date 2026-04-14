import axios from 'axios'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

function UpdateBlog() {
    const { id } = useParams()
    const [errors, setErrors] = useState({})
    const [formData, setFormData] = useState({
        title: "",
        content: "",
        image: "",
        status: "",
    })

    const singleFetch = async () => {
        try {
            const fetching = await axios.get(`http://127.0.0.1:8000/api/blog/${id}/`)
            setFormData(fetching.data)
        } catch (error) {
            console.error("Error in fetching the blog for editing:", error)
        }
    }



    console.log(id);

    const handleChange = (e) => {
        const {name, value} = e.target 

        if(name === "image"){
            
        }
    }


    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">

            <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8">

                {/* Heading */}
                <h2 className="text-3xl font-bold text-center mb-6">
                    Edit The Blog
                </h2>

                <form className="space-y-5" onSubmit={handleSubmit}>

                    {/* Title */}
                    <div>
                        <label className="block mb-1 font-medium">Title</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder="Enter blog title..."
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />

                        {errors.title && <span className="text-red-700 text-lg">{errors.title}</span>}
                    </div>

                    {/* Content */}
                    <div>
                        <label className="block mb-1 font-medium">Content</label>
                        <textarea
                            rows="6"
                            name='content'
                            value={formData.content}
                            onChange={handleChange}
                            placeholder="Write your blog content..."
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        ></textarea>

                        {errors.content && <span className="text-red-700 text-lg">{errors.content}</span>}
                    </div>

                    {/* Image */}
                    <div>
                        <label className="block mb-1 font-medium">Upload Image</label>
                        <input
                            type="file"
                            onChange={handleChange}
                            name='image'
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-white"
                        />

                        {errors.image && <span className="text-red-700 text-lg">{errors.image}</span>}
                    </div>

                    {/* Status */}
                    <div>
                        <label className="block mb-1 font-medium">Status</label>
                        <select
                            name='status'
                            value={formData.status}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            <option value="draft">Draft</option>
                            <option value="published">Published</option>
                        </select>
                        {errors.status && <span className="text-red-700 text-lg">{errors.status}</span>}

                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 rounded-lg font-semibold shadow-md hover:shadow-xl hover:scale-[1.02] transition duration-300"
                    >
                        Create Blog 🚀
                    </button>

                </form>
            </div>

        </div>
    )
}

export default UpdateBlog