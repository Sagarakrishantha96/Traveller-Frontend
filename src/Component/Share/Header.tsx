import React from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../../Services/AuthService";
import { UserModel } from "../../Models/UserModel";
import { header } from "../../Styles/Headerstyle";
import { getComponentStyle } from "../../Styles/MergeStyles";
import { useIsMobile } from "./useIsMobile";

interface HeaderProps {
  user: UserModel;
}

// Top bar shown on every logged-in page
export const Header: React.FC<HeaderProps> = ({ user }) => {
  const navigate = useNavigate();
  const styles = getComponentStyle(header, useIsMobile());

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header style={styles.header}>
      <h1 style={styles.brand} onClick={() => navigate("/home")}>Travel Planner ✈️</h1>
      <div style={styles.userBox}>
        {user.role === "Admin" && <button style={styles.adminButton} onClick={() => navigate("/admin")}>🛠️ Admin</button>}
        <span style={styles.userName}>{user.fullName}</span>
        <span style={styles.avatar}>{user.fullName.charAt(0).toUpperCase()}</span>
        <button style={styles.logoutButton} onClick={handleLogout}>Logout</button>
      </div>
    </header>
  );
};
