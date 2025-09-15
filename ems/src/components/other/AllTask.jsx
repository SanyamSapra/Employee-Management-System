import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
  const [userData] = useContext(AuthContext)

  return (
    <div className="bg-white/10 backdrop-blur-lg p-5 rounded-2xl mt-5 shadow-xl border border-gray-700">
      <div className="bg-gradient-to-r from-emerald-500 to-teal-400 mb-4 py-3 px-4 flex justify-between rounded-xl text-white font-semibold shadow-md">
        <h2 className="w-1/5 text-center">Employee</h2>
        <h3 className="w-1/5 text-center">New</h3>
        <h5 className="w-1/5 text-center">Active</h5>
        <h5 className="w-1/5 text-center">Completed</h5>
        <h5 className="w-1/5 text-center">Failed</h5>
      </div>

      {userData.map((elem, idx) => (
        <div
          key={idx}
          className="bg-white/5 border border-gray-700 mb-3 py-2 px-4 flex justify-between rounded-xl shadow hover:scale-[1.02] transition-transform"
        >
          <h2 className="w-1/5 text-center font-medium text-gray-200">{elem.firstName}</h2>
          <h3 className="w-1/5 text-center text-blue-400">{elem.taskCounts.newTask}</h3>
          <h5 className="w-1/5 text-center text-yellow-400">{elem.taskCounts.active}</h5>
          <h5 className="w-1/5 text-center text-green-400">{elem.taskCounts.completed}</h5>
          <h5 className="w-1/5 text-center text-red-500">{elem.taskCounts.failed}</h5>
        </div>
      ))}
    </div>
  )
}

export default AllTask
