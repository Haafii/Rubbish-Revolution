import React from 'react'
import Login from './pages/Login'
import Footer from './components/Footer'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from './pages/Home';
import Header from './components/Header';
import Scanner from './pages/Scanner';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/scanner" element={<Scanner/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App