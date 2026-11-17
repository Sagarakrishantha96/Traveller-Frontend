import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { UserRegisterPage } from './Pages/UserRegisterPage'
import { UserLoginPage } from './Pages/UserLoginPage'
import { HomePage } from './Pages/HomePage'
import { ItineraryPage } from './Pages/ItineraryPage'
import { AdminPage } from './Pages/AdminPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/register" element={<UserRegisterPage />} />
        <Route path="/login" element={<UserLoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/itinerary" element={<ItineraryPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
