import React from 'react'
import UserContextProvider from './context/userContextProvider'
import Profile from './Components/Profile'
import Login from './Components/Login'
function App() {
  return (
    <>
    <UserContextProvider>
      <div>
        <Login />
        <Profile />
      </div>
      </UserContextProvider>
    </>
  )
}

export default App
