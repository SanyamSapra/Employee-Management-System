import React from 'react'

const Header = ({ changeUser, data }) => {
  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    changeUser('')
  }

  return (
    <div className="flex items-center justify-between bg-white/10 backdrop-blur-lg px-6 py-4 rounded-2xl shadow-xl border border-gray-700">
      <div>
        <h1 className="text-2xl font-semibold text-gray-200">
          Hello, <span className="text-emerald-400">{data ? data.firstName : 'Admin'}</span> 👋
        </h1>
        <p className="text-gray-400 text-sm">Welcome back to your dashboard</p>
      </div>
      <button
        onClick={logOutUser}
        className="bg-gradient-to-r from-red-500 to-pink-500 hover:scale-105 transition-transform text-white font-medium px-5 py-2 rounded-full shadow-md"
      >
        Log Out
      </button>
    </div>
  )
}

export default Header
