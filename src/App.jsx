import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import { AuthProvider } from './components/AuthContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import AdminDashboard from './pages/AdminDashboard'
import ProjectDetail from './pages/ProjectDetail'
import Subscription from './pages/Subscription'
import Contact from './pages/Contact'

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Navbar />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-grow"
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projets" element={<Projects />} />
              <Route path="/a-propos" element={<About />} />
              <Route path="/connexion" element={<Login />} />
              <Route path="/tableau-de-bord" element={<Dashboard />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/projet/:id" element={<ProjectDetail />} />
              <Route path="/abonnement" element={<Subscription />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </motion.div>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App
