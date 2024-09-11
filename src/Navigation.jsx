// Dependencias
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Paginas de la web
import HomePage from "./pages/Home"
import RegisterPage from './pages/auth/Register';
// Aplicación web
import DashboardPage from './pages/app/Dashboard';
import ConsolePage from './pages/app/Console';

function Navigation() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/console" element={<ConsolePage />} />
                <Route path="/console/register" element={<RegisterPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
            </Routes>
        </Router>
    )
}

export default Navigation