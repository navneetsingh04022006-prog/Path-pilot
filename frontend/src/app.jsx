import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';

import DashboardLayout from './components/layout/DashboardLayout';
import ProtectedRoute from './components/layout/ProtectedRoute';
import DashboardPage from './pages/DashboardPage';
import RoadmapPage from './pages/RoadmapPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />

            {/* Protected dashboard */}
            <Route element={<ProtectedRoute />}>
              <Route path="/dashboard" element={<DashboardLayout />}>
                <Route index element={<DashboardPage />} />
                <Route path="roadmap" element={<RoadmapPage />} />
                <Route path="profile" element={<ProfilePage />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
