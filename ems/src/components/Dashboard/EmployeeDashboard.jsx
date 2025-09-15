import React from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  return (
    <div className="p-10 bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen text-white overflow-y-scroll">
      <Header changeUser={props.changeUser} data={props.data} />
      <TaskListNumbers data={props.data} />
      <TaskList data={props.data} />
    </div>
  )
}

export default EmployeeDashboard
