import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { logout } from "../../Services/AuthService";
import { UserModel } from "../../Models/UserModel";
import { header } from "../../Styles/Headerstyle";
import { getComponentStyle } from "../../Styles/MergeStyles";
import { useIsMobile } from "./useIsMobile";

interface HeaderProps {
  user: UserModel;
}

// Each link is highlighted on any of its pages
const links = [
  { label: "Plan a trip", path: "/home", pages: ["/home", "/itinerary"] },
  { label: "My Trips", path: "/trips", pages: ["/trips"] }
];

// Top bar shown on every logged-in page
export const Header: React.FC<HeaderProps> = ({ user }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const styles = getComponentStyle(header, useIsMobile());

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header style={styles.header}>
      <h1 style={styles.brand} onClick={() => navigate("/home")}>Travel Planner ✈️</h1>
      <nav style={styles.nav}>
        {links.map((link) => (
          <button key={link.path} onClick={() => navigate(link.path)}
            style={{ ...styles.navLink, ...(link.pages.some((p) => pathname.startsWith(p)) ? styles.navLinkActive : {}) }}>
            {link.label}
          </button>
        ))}
      </nav>
      <div style={styles.userBox}>
        <span style={styles.userName}>{user.fullName}</span>
        <span style={styles.avatar}>{user.fullName.charAt(0).toUpperCase()}</span>
        <button style={styles.logoutButton} onClick={handleLogout}>Logout</button>
      </div>
    </header>
  );
};
