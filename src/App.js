import React from 'react';
import './App.css';
import Navbar from './componets/Navbar/index.js';
import Profile from './componets/pages/cam';
import { useSelector } from "react-redux";
import  LoginPage  from './componets/pages/login.jsx';
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
function App() {
  const { access_token } = useSelector(state => state.auth)
  return (
    <Router>
    <Navbar />
    <Routes>
    <Route path="/login" element={!access_token ? <LoginPage /> : <Navigate to="/cam" />} />
		
    <Route path='/cam'  element={< Profile />} />
    </Routes>
    </Router>
  );
  }
  
  export default App;
  