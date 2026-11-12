import { Color, Font } from "../Component/Share/Theme";

export const header = {
  mobile: {
    header: {
      position: "sticky" as "sticky",
      top: 0,
      zIndex: 10,
      display: "flex",
      justifyContent: "space-between" as "space-between",
      alignItems: "center" as "center",
      padding: "3.5vw 5vw",
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      backdropFilter: "blur(8px)",
      borderBottom: `1px solid ${Color.LightAsh}`,
      fontFamily: Font.Default
    },
    brand: {
      fontSize: "5vw",
      fontWeight: "bold" as "bold",
      color: Color.Primary,
      margin: 0,
      cursor: "pointer"
    },
    nav: {
      position: "fixed" as "fixed",
      bottom: 0,
      left: 0,
      right: 0,
      display: "flex",
      justifyContent: "space-around" as "space-around",
      padding: "2vw 0",
      backgroundColor: Color.White,
      borderTop: `1px solid ${Color.LightAsh}`,
      zIndex: 10
    },
    navLink: {
      padding: "2vw 5vw",
      border: "none",
      borderRadius: "5vw",
      background: "none",
      color: Color.SharpAsh,
      fontSize: "3.6vw",
      fontFamily: Font.Default,
      fontWeight: 600,
      cursor: "pointer"
    },
    navLinkActive: {
      backgroundColor: Color.Background,
      color: Color.Primary
    },
    userBox: {
      display: "flex",
      alignItems: "center" as "center",
      gap: "3vw"
    },
    avatar: {
      width: "8vw",
      height: "8vw",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center" as "center",
      justifyContent: "center" as "center",
      backgroundColor: Color.Primary,
      color: Color.White,
      fontSize: "3.6vw",
      fontWeight: "bold" as "bold"
    },
    userName: {
      display: "none",
      fontSize: "3.6vw",
      color: Color.DeepBlack
    },
    logoutButton: {
      padding: "2vw 4vw",
      border: `1px solid ${Color.MiddleAsh}`,
      borderRadius: "2vw",
      backgroundColor: Color.White,
      color: Color.SharpAsh,
      fontSize: "3.4vw",
      fontFamily: Font.Default,
      cursor: "pointer"
    }
  },

  desktop: {
    header: {
      padding: "0.9vw 6vw"
    },
    brand: {
      fontSize: "1.4vw"
    },
    nav: {
      position: "static" as "static",
      gap: "0.4vw",
      padding: 0,
      marginLeft: "3vw",
      marginRight: "auto",
      borderTop: "none",
      backgroundColor: "transparent"
    },
    navLink: {
      padding: "0.45vw 1vw",
      borderRadius: "0.5vw",
      fontSize: "0.9vw"
    },
    userBox: {
      gap: "0.8vw"
    },
    avatar: {
      width: "2.2vw",
      height: "2.2vw",
      fontSize: "0.9vw"
    },
    userName: {
      display: "inline",
      fontSize: "0.9vw"
    },
    logoutButton: {
      padding: "0.45vw 1.1vw",
      borderRadius: "0.5vw",
      fontSize: "0.82vw"
    }
  }
};
