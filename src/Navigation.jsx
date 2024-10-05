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
import MainComponent from './components/layouts/Main';
import UsersListComponent from './components/layouts/UsersList'
// Aplicación web - Envio de formularios
import ConsolePage from './pages/app/Console';
import NewTemplate from './pages/app/forms/NewTemplate';

function Navigation() {
    const isAuthenticated = useSelector(state => state.user.isAuthenticated)
    console.log(isAuthenticated)
    return(
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route 
                    path="/console" 
                    element={isAuthenticated ? <ConsolePage /> : <Navigate to="/login" />} /*{<ConsolePage />} */
                />
                <Route 
                    path="/console/register" 
                    element={isAuthenticated ? <RegisterPage /> : <Navigate to="/login" />}
                />
                <Route path="/project/:name" element={isAuthenticated ? <DashboardPage /> : <Navigate to="/login" />}>
                    <Route index element={<Navigate to="overview" />} /> 
                    <Route path="overview" element={<MainComponent />} />
                    <Route path="users" element={<UsersListComponent />} />
                </Route>
                <Route 
                    path="/project/template" 
                    element={isAuthenticated ? <NewTemplate /> : <Navigate to="/login" />}
                />
            </Routes>
        </Router>
    )
}

export default Navigation