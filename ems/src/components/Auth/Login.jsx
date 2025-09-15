import React, { useState } from 'react'

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    handleLogin(email, password)
    setEmail('')
    setPassword('')
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-10 w-[400px] border border-gray-700">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Welcome Back 👋</h2>
        <form onSubmit={submitHandler} className="flex flex-col gap-4">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-white/5 border border-gray-500 text-white rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400 placeholder-gray-400"
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="bg-white/5 border border-gray-500 text-white rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400 placeholder-gray-400"
            type="password"
            placeholder="Enter password"
          />
          <button className="mt-4 bg-gradient-to-r from-emerald-500 to-teal-400 hover:scale-105 transition-transform text-white font-semibold text-lg py-3 rounded-xl shadow-md">
            Log in
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
