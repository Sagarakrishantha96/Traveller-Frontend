import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { getLoggedInUser, logout } from "../Services/AuthService";
import { Color, Font } from "../Component/Share/Theme";

// Placeholder home page - shows who is logged in until the real dashboard is built
export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const user = getLoggedInUser();

  useEffect(() => {
    document.title = "Home - Travel Planner";
  }, []);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div style={{ minHeight: "100vh", padding: "40px 16px", backgroundColor: Color.Background, fontFamily: Font.Default }}>
      <h1 style={{ color: Color.DeepBlack, margin: 0 }}>Welcome, {user.fullName} 👋</h1>
      <p style={{ color: Color.SharpAsh }}>You are logged in as {user.email}.</p>
      <button onClick={handleLogout}
        style={{ padding: "10px 24px", border: "none", borderRadius: "8px", backgroundColor: Color.Primary,
          color: Color.White, fontFamily: Font.Default, fontWeight: "bold", cursor: "pointer" }}>
        Logout
      </button>
    </div>
  );
};
