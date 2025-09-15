import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const NewTask = ({ data, employee }) => {
  const [userData, setUserData] = useContext(AuthContext)

  const handleAccept = () => {
    const updatedData = userData.map((emp) => {
      if (emp.email === employee.email) {
        const updatedTasks = emp.tasks.map((task) =>
          task.taskTitle === data.taskTitle ? { ...task, newTask: false, active: true } : task
        )

        return {
          ...emp,
          tasks: updatedTasks,
          taskCounts: {
            ...emp.taskCounts,
            newTask: emp.taskCounts.newTask - 1,
            active: emp.taskCounts.active + 1,
          },
        }
      }
      return emp
    })

    localStorage.setItem('employees', JSON.stringify(updatedData))
    setUserData(updatedData)
  }

  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-white/10 backdrop-blur-lg border border-gray-700 rounded-2xl shadow-lg hover:scale-[1.02] transition-transform">
      <div className="flex justify-between items-center">
        <h3 className="bg-gradient-to-r from-blue-500 to-indigo-500 text-xs px-3 py-1 rounded-full text-white font-medium">
          {data.category}
        </h3>
        <h4 className="text-sm text-gray-400">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-xl font-semibold text-emerald-400">{data.taskTitle}</h2>
      <p className="text-sm mt-2 text-gray-300">{data.taskDescription}</p>
      <div className="mt-6">
        <button
          onClick={handleAccept}
          className="w-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-xl font-medium py-2 text-sm text-white shadow-md hover:scale-105 transition-transform"
        >
          Accept Task
        </button>
      </div>
    </div>
  )
}

export default NewTask
