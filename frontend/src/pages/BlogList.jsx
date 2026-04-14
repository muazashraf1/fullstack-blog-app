// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// function BlogList() {
//     const [allBlogs, setAllBlogs] = useState([])


//     const fetchingAllBlogs = async() => {
//         try {
//             const response = await axios.get('http://127.0.0.1:8000/api/blogs/')
//             setAllBlogs(response.data)

//         } catch (error) {
//             console.error(error)
//         }
//     }

//     useEffect(() => {
//         fetchingAllBlogs()
//     }, [])
//     console.log(allBlogs);

//   return (
//     <div></div>
//   )
// }

// export default BlogList





import axios, { all } from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function BlogList() {
    const navigate = useNavigate()
    const [allBlogs, setAllBlogs] = useState([])

    const fetchingAllBlogs = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/blogs/')
            setAllBlogs(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchingAllBlogs()
    }, [])


    const handleView = (id) => {
        navigate(`/blog-detail/${id}`)
    }

    console.log(allBlogs);


    return (
        <div className="min-h-screen bg-gray-50 px-6 py-10">

            <h1 className="text-4xl font-bold text-center mb-10">
                Explore Blogs
            </h1>

            {allBlogs.length === 0 ? (

                // ✅ Centered Message
                <div className="flex items-center justify-center h-[60vh]">
                    <p className="text-3xl text-gray-600 font-semibold">
                        No Blogs Found Yet!
                    </p>
                </div>

            ) : (

                // ✅ Blogs Grid
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

                    {allBlogs.map((blog) => (
                        <div
                            key={blog.id}
                            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition duration-300"
                        >

                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-48 object-cover"
                            />

                            <div className="p-5">
                                <h2 className="text-xl font-semibold mb-2">
                                    {blog.title}
                                </h2>

                                <p className="text-gray-600 text-sm mb-3">
                                    {blog.content?.slice(0, 90)}...
                                </p>

                                <p className="text-xs text-gray-500 mb-4">
                                    By {blog.author}
                                </p>

                                <button
                                    onClick={() => handleView(blog.id)}
                                    className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm shadow hover:shadow-lg hover:scale-105 transition"
                                >
                                    Read More →
                                </button>

                                <button>Delete</button>
                                <button>Update</button>
                            </div>

                        </div>
                    ))}

                </div>
            )}
        </div>

    )
}

export default BlogList