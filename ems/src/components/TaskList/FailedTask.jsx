import React from 'react'

const FailedTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-white/10 backdrop-blur-lg border border-gray-700 rounded-2xl shadow-lg hover:scale-[1.02] transition-transform">
      <div className="flex justify-between items-center">
        <h3 className="bg-gradient-to-r from-red-500 to-pink-500 text-xs px-3 py-1 rounded-full text-white font-medium">
          {data.category}
        </h3>
        <h4 className="text-sm text-gray-400">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-xl font-semibold text-red-400">{data.taskTitle}</h2>
      <p className="text-sm mt-2 text-gray-300">{data.taskDescription}</p>
      <div className="mt-6">
        <button className="w-full bg-gradient-to-r from-red-500 to-pink-500 rounded-xl font-medium py-2 text-sm text-white shadow-md">
          Failed ❌
        </button>
      </div>
    </div>
  )
}

export default FailedTask
