import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AcceptTask = ({ data, employee }) => {
  const [userData, setUserData] = useContext(AuthContext)

  const updateTaskStatus = (status) => {
    const updatedData = userData.map((emp) => {
      if (emp.email === employee.email) {
        const updatedTasks = emp.tasks.map((task) =>
          task.taskTitle === data.taskTitle
            ? {
                ...task,
                active: false,
                completed: status === 'completed',
                failed: status === 'failed',
              }
            : task
        )

        return {
          ...emp,
          tasks: updatedTasks,
          taskCounts: {
            ...emp.taskCounts,
            active: emp.taskCounts.active - 1,
            completed: emp.taskCounts.completed + (status === 'completed' ? 1 : 0),
            failed: emp.taskCounts.failed + (status === 'failed' ? 1 : 0),
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
        <h3 className="bg-gradient-to-r from-yellow-400 to-orange-400 text-xs px-3 py-1 rounded-full text-black font-medium">
          {data.category}
        </h3>
        <h4 className="text-sm text-gray-400">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-xl font-semibold text-yellow-400">{data.taskTitle}</h2>
      <p className="text-sm mt-2 text-gray-300">{data.taskDescription}</p>
      <div className="flex justify-between mt-6 gap-2">
        <button
          onClick={() => updateTaskStatus('completed')}
          className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl font-medium py-2 text-xs text-white shadow-md hover:scale-105 transition-transform"
        >
          Mark as Completed
        </button>
        <button
          onClick={() => updateTaskStatus('failed')}
          className="flex-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl font-medium py-2 text-xs text-white shadow-md hover:scale-105 transition-transform"
        >
          Mark as Failed
        </button>
      </div>
    </div>
  )
}

export default AcceptTask
