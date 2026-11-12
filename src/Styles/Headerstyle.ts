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
    userBox: {
      display: "flex",
      alignItems: "center" as "center",
      gap: "3vw"
    },
    adminButton: {
      padding: "2vw 3vw",
      border: "none",
      borderRadius: "2vw",
      backgroundColor: "#264653",
      color: Color.White,
      fontSize: "3.2vw",
      fontFamily: Font.Default,
      fontWeight: 600,
      cursor: "pointer"
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
    userBox: {
      gap: "0.8vw"
    },
    adminButton: {
      padding: "0.45vw 0.9vw",
      borderRadius: "0.5vw",
      fontSize: "0.82vw"
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
