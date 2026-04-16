import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target

        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const res = await axios.post('http://127.0.0.1:8000/api/login/', formData)
            localStorage.setItem("token", res.data.access)
        } catch (error) {
            console.error("Error in login:", error)
        }
    }

    
        const hanldeNavigate = () =>{
            navigate('/register')
        }


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">

                {/* Heading */}
                <h2 className="text-3xl font-bold text-center mb-6">
                    Welcome Back 👋
                </h2>

                {/* Form */}
                <form className="space-y-5" onSubmit={handleSubmit}>

                    {/* Email */}
                    <div>
                        <label className="block mb-1 font-medium">Email</label>
                        <input
                            type="email"
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
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
                            placeholder="Enter your password"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 
              focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    {/* Extra Options */}
                    <div className="flex justify-between items-center text-sm">
                        <label className="flex items-center gap-2">
                            <input type="checkbox" />
                            Remember me
                        </label>

                        <span className="text-indigo-600 cursor-pointer hover:underline">
                            Forgot Password?
                        </span>
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 
            text-white py-3 rounded-lg font-semibold shadow-md 
            hover:shadow-xl hover:scale-[1.02] transition duration-300"
                    >
                        Login 🚀
                    </button>

                </form>

                {/* Footer */}
                <p className="text-center text-sm text-gray-500 mt-5">
                    Don’t have an account?
                    <span onClick={hanldeNavigate} className="text-indigo-600 font-medium cursor-pointer ml-1">
                        Sign Up
                    </span>
                </p>

            </div>

        </div>
    )
}

export default Login