import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        // password2: ''
    })
    const navigate = useNavigate()

    const handleChange = (e) => {
        const {name, value} = e.target

        setFormData({
            ...formData,
            [name] : value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios.post("http://127.0.0.1:8000/api/register/", formData)
            alert('registerd successfully')
            navigate('/login')
        } catch  (error){
            console.error("Error in signup:", error)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">

                {/* Heading */}
                <h2 className="text-3xl font-bold text-center mb-6">
                    Create Account ✨
                </h2>

                {/* Form */}
                <form className="space-y-5" onSubmit={handleSubmit}>

                    {/* Username */}
                    <div>
                        <label className="block mb-1 font-medium">Username</label>
                        <input
                            type="text"
                            name='username'
                            value={formData.username}
                            onChange={handleChange}
                            placeholder="Enter username"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 
              focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block mb-1 font-medium">Email</label>
                        <input
                            type="email"
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter email"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 
              focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block mb-1 font-medium">Password</label>
                        <input
                            type="password"
                            name='password'
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter password"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 
              focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    {/* Confirm Password */}
                    {/* <div>
                        <label className="block mb-1 font-medium">Confirm Password</label>
                        <input
                            type="password"
                            name='password2'
                            value={formData.password2}
                            onChange={handleChange}
                            placeholder="Confirm password"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 
              focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div> */}

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 
            text-white py-3 rounded-lg font-semibold shadow-md 
            hover:shadow-xl hover:scale-[1.02] transition duration-300"
                    >
                        Sign Up 🚀
                    </button>

                </form>

                {/* Footer */}
                <p className="text-center text-sm text-gray-500 mt-5">
                    Already have an account?
                    <span className="text-indigo-600 font-medium cursor-pointer ml-1">
                        Login
                    </span>
                </p>

            </div>

        </div>
    )
}

export default Register