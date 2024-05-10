
import './App.css'

import { RegisterComponent } from './components/RegisterComponent.jsx'
import { LoginComponent } from './components/LoginComponent.jsx'
import { HomeComponent } from './components/HomeComponent.jsx'
import { ProtectedRoute } from './components/ProtectedRoute.jsx'

import { Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'

function App() {

  const [response, setResponse] = useState("error")
  const [userData, setUserData] = useState({}) 

  return (
    <>
      <Routes>
        <Route path="/" element={ <LoginComponent setResponse={setResponse} userData={setUserData}/> }/>
        <Route element={ <ProtectedRoute response={response} redirectTo="/"/> }>
          <Route path='/home' element={<HomeComponent userData={userData}/>}/>
        </Route>
        <Route path="/register" element={<RegisterComponent />} />
      </Routes>
    </>
  )
}

export default App
