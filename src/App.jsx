import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { UserRegisterPage } from './Pages/UserRegisterPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/register" replace />} />
        <Route path="/register" element={<UserRegisterPage />} />
        {/* TODO: add /login and /home pages */}
        <Route path="*" element={<Navigate to="/register" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
