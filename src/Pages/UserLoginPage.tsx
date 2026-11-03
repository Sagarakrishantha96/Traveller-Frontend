import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginForm } from "../Component/Share/LoginForm";
import { userLogin } from "../Styles/Userloginstyle";
import { getComponentStyle } from "../Styles/MergeStyles";

const MOBILE_QUERY = "(max-width: 786px)";

export const UserLoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState<boolean>(window.matchMedia(MOBILE_QUERY).matches);

  // Watch the screen size, so the styles switch between mobile and desktop
  useEffect(() => {
    const media = window.matchMedia(MOBILE_QUERY);
    const handleResize = () => setIsMobile(media.matches);
    media.addEventListener("change", handleResize);
    return () => media.removeEventListener("change", handleResize);
  }, []);

  const styles = getComponentStyle(userLogin, isMobile);

  useEffect(() => {
    document.title = "Login - Travel Planner";
    // If the user is already logged in, send them to the home page
    if (localStorage.getItem("token")) {
      navigate("/home");
    }
  }, [navigate]);

  return (
    <div style={styles.mainWrapper}>
      <div style={styles.leftWrapper}>
        <h1 style={styles.brandTitle}>Travel Planner ✈️</h1>
        <p style={styles.brandText}>
          Welcome back! Pick up where you left off with your trips, itineraries and budgets.
        </p>
      </div>
      <div style={styles.rightWrapper}>
        <LoginForm
          styles={styles}
          title={isMobile ? "Login" : "Welcome Back"}
          goToRegister={() => navigate("/register")}
          onLoginSuccess={() => navigate("/home")}
        />
      </div>
    </div>
  );
};
