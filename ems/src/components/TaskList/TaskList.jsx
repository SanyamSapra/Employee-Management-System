import React from 'react'
import NewTask from './NewTask'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {
  if (!data?.tasks || data.tasks.length === 0) {
    return <p className="text-gray-400 text-sm mt-6">No tasks assigned yet.</p>
  }

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold text-gray-200 mb-6">Your Tasks</h2>

      <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
        {data.tasks.map((task, index) => {
          if (task.newTask) {
            return <NewTask key={index} data={task} employee={data} />
          }
          if (task.active) {
            return <AcceptTask key={index} data={task} employee={data} />
          }
          if (task.completed) {
            return <CompleteTask key={index} data={task} />
          }
          if (task.failed) {
            return <FailedTask key={index} data={task} />
          }
          return null
        })}
      </div>
    </div>
  )
}

export default TaskList
