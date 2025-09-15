import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext)
  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [asignTo, setAsignTo] = useState('')
  const [category, setCategory] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()

    const task = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    }

    const updatedData = userData.map((elem) => {
      if (asignTo === elem.firstName) {
        return {
          ...elem,
          tasks: [...elem.tasks, task],
          taskCounts: {
            ...elem.taskCounts,
            newTask: elem.taskCounts.newTask + 1,
          },
        }
      }
      return elem
    })

    localStorage.setItem('employees', JSON.stringify(updatedData))
    setUserData(updatedData)

    setTaskTitle('')
    setCategory('')
    setAsignTo('')
    setTaskDate('')
    setTaskDescription('')
  }

  return (
    <div className="p-6 bg-white/10 backdrop-blur-lg mt-5 rounded-2xl shadow-xl border border-gray-700">
      <h2 className="text-xl font-semibold mb-4 text-gray-200">Create New Task</h2>
      <form
        onSubmit={submitHandler}
        className="flex flex-wrap w-full items-start justify-between gap-6"
      >
        <div className="w-1/2">
          <div className="mb-4">
            <h3 className="text-sm text-gray-300 mb-1">Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="text-sm py-2 px-3 w-4/5 rounded-xl outline-none bg-white/5 border border-gray-500 text-white placeholder-gray-400 focus:ring-2 focus:ring-emerald-400"
              type="text"
              placeholder="Make a UI design"
            />
          </div>

          <div className="mb-4">
            <h3 className="text-sm text-gray-300 mb-1">Date</h3>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="text-sm py-2 px-3 w-4/5 rounded-xl outline-none bg-white/5 border border-gray-500 text-white placeholder-gray-400 focus:ring-2 focus:ring-emerald-400"
              type="date"
            />
          </div>

          <div className="mb-4">
            <h3 className="text-sm text-gray-300 mb-1">Assign to</h3>
            <input
              value={asignTo}
              onChange={(e) => setAsignTo(e.target.value)}
              className="text-sm py-2 px-3 w-4/5 rounded-xl outline-none bg-white/5 border border-gray-500 text-white placeholder-gray-400 focus:ring-2 focus:ring-emerald-400"
              type="text"
              placeholder="Employee name"
            />
          </div>

          <div className="mb-4">
            <h3 className="text-sm text-gray-300 mb-1">Category</h3>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="text-sm py-2 px-3 w-4/5 rounded-xl outline-none bg-white/5 border border-gray-500 text-white placeholder-gray-400 focus:ring-2 focus:ring-emerald-400"
              type="text"
              placeholder="design, dev, etc"
            />
          </div>
        </div>

        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-1">Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="w-full h-44 text-sm py-2 px-3 rounded-xl outline-none bg-white/5 border border-gray-500 text-white placeholder-gray-400 focus:ring-2 focus:ring-emerald-400"
          ></textarea>
          <button className="bg-gradient-to-r from-emerald-500 to-teal-400 py-3 hover:scale-105 transition-transform px-5 rounded-xl text-sm mt-4 w-full text-white font-medium shadow-md">
            Create Task
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateTask
