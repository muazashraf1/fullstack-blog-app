import React, { useState } from 'react'

function CreatePage() {
    const [formData, setFormData] = useState({
        title: "",
        content: "",
        image: "",
        status: "",
    })
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">

            <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8">

                {/* Heading */}
                <h2 className="text-3xl font-bold text-center mb-6">
                    Create New Blog
                </h2>

                <form className="space-y-5">

                    {/* Title */}
                    <div>
                        <label className="block mb-1 font-medium">Title</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            placeholder="Enter blog title..."
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    {/* Content */}
                    <div>
                        <label className="block mb-1 font-medium">Content</label>
                        <textarea
                            rows="6"
                            name='content'
                            value={formData.content}
                            placeholder="Write your blog content..."
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        ></textarea>
                    </div>

                    {/* Image */}
                    <div>
                        <label className="block mb-1 font-medium">Upload Image</label>
                        <input
                            type="file"
                            value={formData.image}
                            name='image'
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 bg-white"
                        />
                    </div>

                    {/* Status */}
                    <div>
                        <label className="block mb-1 font-medium">Status</label>
                        <select
                            name='status'
                            value={formData.status}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            <option value="draft">Draft</option>
                            <option value="published">Published</option>
                        </select>
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