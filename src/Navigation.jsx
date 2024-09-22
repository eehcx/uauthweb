// Dependencias
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
// Paginas de la web
import HomePage from "./pages/Home"
import RegisterPage from './pages/auth/Register';
import SignUpPage from './pages/auth/SignUp';
import LoginPage from './pages/auth/Login';
// Aplicación web
import DashboardPage from './pages/app/Dashboard';
import ConsolePage from './pages/app/Console';
import NewTemplate from './pages/app/forms/NewTemplate';

function Navigation() {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    console.log(isAuthenticated)
    return(
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route 
                    path="/console" 
                    element={<ConsolePage />} /*{isAuthenticated ? <ConsolePage /> : <Navigate to="/login" />} */
                />
                <Route 
                    path="/console/register" 
                    element={<RegisterPage />} 
                />
                <Route 
                    path="/dashboard" 
                    element={<DashboardPage />} 
                />
                <Route 
                    path="/dashboard/template" 
                    element={<NewTemplate /> } 
                />
            </Routes>
        </Router>
    )
}

export default Navigation