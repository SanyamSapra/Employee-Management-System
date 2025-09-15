import React from 'react'

const TaskListNumbers = ({ data }) => {
  const stats = [
    { label: "New Task", value: data.taskCounts.newTask, color: "from-blue-500 to-indigo-500" },
    { label: "Completed", value: data.taskCounts.completed, color: "from-green-500 to-emerald-500" },
    { label: "Active", value: data.taskCounts.active, color: "from-yellow-400 to-orange-400" },
    { label: "Failed", value: data.taskCounts.failed, color: "from-red-500 to-pink-500" },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
      {stats.map((s, i) => (
        <div
          key={i}
          className={`rounded-2xl p-6 shadow-lg text-white bg-gradient-to-r ${s.color} hover:scale-105 transition-transform`}
        >
          <h2 className="text-4xl font-bold">{s.value}</h2>
          <h3 className="text-lg mt-2 font-medium">{s.label}</h3>
        </div>
      ))}
    </div>
  )
}

export default TaskListNumbers
