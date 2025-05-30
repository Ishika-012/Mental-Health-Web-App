import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth.js'
import {login, logout} from './store/authSlice.js'
import './App.css'
import logo from './asset/Logo.png'
import Header from './header.jsx'
import Home from './Home.jsx'
import LeftNav from './LeftNav.jsx'
import Login from './login.jsx'
import Sign from './Sign.jsx'
import Login1 from './pages/Login.jsx';
import Signin from './pages/Signin.jsx';
import TaskBuilder from './task.jsx';
import About from './about.jsx'
import Introspect from './Introspect.jsx';
import Quiz from './quix.jsx';
import Chatbot from './Chatbot.jsx'

function App() {
  const [loading, setloading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
    if (userData) {
      dispatch(login({userData}))
    }
    else{
      dispatch(logout())
    }
    })
    .finally(() => setloading(false))
  })

  return !loading ? ( 
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login1 />} />
      <Route path="/signup" element={<Signin />} />
      <Route path="/task" element={< TaskBuilder/>} />
      {/* <Route path="/journal" element={<Journal/>} /> */}
      <Route path="/about" element={<About/>} />
      <Route path="/intro" element={<Introspect/>} />
      <Route path="/quiz" element={<Quiz/>} />
      </Routes>
    </BrowserRouter>
  
  
    </>
  ) : null;
}

export default App
