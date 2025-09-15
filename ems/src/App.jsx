import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  const [user, setUser] = useState(null) // "admin" | "employee" | null
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData] = useContext(AuthContext)
  const [loading, setLoading] = useState(true)

  // Restore session on page refresh
  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')

    if (loggedInUser) {
      const storedUser = JSON.parse(loggedInUser)
      setUser(storedUser.role)
      setLoggedInUserData(storedUser.data || null)
    }
    setLoading(false)
  }, [])

  const handleLogin = (email, password) => {
  const storedAdmins = JSON.parse(localStorage.getItem('admin')) || []
  const storedEmployees = userData || []

  // ✅ Check for admin login
  const adminUser = storedAdmins.find(
    (a) => a.email === email && a.password === password
  )
  if (adminUser) {
    setUser('admin')
    setLoggedInUserData(null)
    localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin', data: adminUser }))
    return
  }

  // ✅ Check for employee login
  const employee = storedEmployees.find(
    (e) => e.email === email && e.password === password
  )
  if (employee) {
    setUser('employee')
    setLoggedInUserData(employee)
    localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }))
    return
  }

  alert('Invalid Credentials')
}


  const handleLogout = () => {
    setUser(null)
    setLoggedInUserData(null)
    localStorage.removeItem('loggedInUser')
  }

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-black text-white">
        <h2 className="text-xl font-semibold">Loading...</h2>
      </div>
    )
  }

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === 'admin' ? (
        <AdminDashboard changeUser={handleLogout} />
      ) : user === 'employee' ? (
        <EmployeeDashboard changeUser={handleLogout} data={loggedInUserData} />
      ) : null}
    </>
  )
}

export default App
