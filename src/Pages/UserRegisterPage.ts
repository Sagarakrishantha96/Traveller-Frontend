import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterForm } from "../Component/Share/RegisterForm";
import { userRegister } from "../Styles/Userregisterstyle";
import { getComponentStyle } from "../Styles/MergeStyles";

const MOBILE_QUERY = "(max-width: 786px)";

export const UserRegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState<boolean>(window.matchMedia(MOBILE_QUERY).matches);
  const [styles, setStyles] = useState<any>(getComponentStyle(userRegister, isMobile));

  // Watch the screen size, so the styles switch between mobile and desktop
  useEffect(() => {
    const media = window.matchMedia(MOBILE_QUERY);
    const handleResize = () => setIsMobile(media.matches);
    media.addEventListener("change", handleResize);
    return () => media.removeEventListener("change", handleResize);
  }, []);

  useEffect(() => {
    setStyles(getComponentStyle(userRegister, isMobile));
  }, [isMobile]);

  useEffect(() => {
    document.title = "Register - Travel Planner";
    // If the user is already logged in, send them to the home page
    if (localStorage.getItem("token")) {
      navigate("/home");
    }
  }, []);

  const goToLogin = () => navigate("/login");

  return (
    <div style={styles.mainWrapper}>
      <div style={styles.leftWrapper}>
        <h1 style={styles.brandTitle}>Travel Planner ✈️</h1>
        <p style={styles.brandText}>
          Plan your trips, build day-by-day itineraries, track your budget, and share your adventures with friends.
        </p>
      </div>
      <div style={styles.rightWrapper}>
        <RegisterForm
          styles={styles}
          title={isMobile ? "Register" : "Create Your Account"}
          goToLogin={goToLogin}
          onRegisterSuccess={goToLogin}
        />
      </div>
    </div>
  );
};
