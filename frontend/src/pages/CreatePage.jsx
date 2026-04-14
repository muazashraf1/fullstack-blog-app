import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function CreatePage() {
    const navigate = useNavigate()
    const [errors, setErrors] = useState({})
    const [formData, setFormData] = useState({
        title: "",
        content: "",
        image: "",
        status: "",
    })

    const handleValidation = () => {
        let errs = {}

        if (!formData.title) {
            errs.title = "Required blog name"
        }

        if (!formData.content) {
            errs.content = "Required blog content"
        }

        if (!formData.image) {
            errs.image = "Required blog image"
        }

        if (!formData.status) {
            errs.status = "Required blog status"
        }

        setErrors(errs)
        return Object.keys(errs).length === 0

    }

    const handleChange = (e) => {
        const { name, value, files } = e.target

        // if (files === "image") {
        if (name === "image") {
            setFormData({
                ...formData,
                image: files[0]
            })
        } else {
            setFormData({
                ...formData,
                [name]: value
            })
        }

    }

    // const handleSubmit = async (e) => {
    //     e.preventDefault()

    //     let isValid = handleValidation()

    //     if (isValid) {
    //         try {
    //             const posting = await axios.post('http://127.0.0.1:8000/api/blogs/', formData)
    //             console.log(posting.data)
    //         } catch (error) {
    //             console.error("Error adding blog:", error)
    //         }
    //     }

    // }


    const handleSubmit = async (e) => {
        e.preventDefault()

        let isValid = handleValidation()

        if (isValid) {
            try {
                const data = new FormData()
                data.append("title", formData.title)
                data.append("content", formData.content)
                data.append("image", formData.image)
                data.append("status", formData.status)

                const posting = await axios.post(
                    'http://127.0.0.1:8000/api/blogs/',
                    data,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data"
                        }
                    }
                )

                console.log(posting.data)
                navigate('/')

            } catch (error) {
                console.error("Error adding blog:", error)
            }
        }
    }

    console.log(formData.image)


    // console.log(formData);

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">

            <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8">

                {/* Heading */}
                <h2 className="text-3xl font-bold text-center mb-6">
                    Create New Blog
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

export default CreatePage