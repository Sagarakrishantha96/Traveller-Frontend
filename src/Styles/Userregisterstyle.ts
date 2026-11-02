import { Color, Font } from "../Component/Share/Theme";

export const userRegister = {
  mobile: {
    mainWrapper: {
      display: "flex",
      flexDirection: "column" as "column",
      minHeight: "100vh",
      backgroundColor: Color.Background,
      fontFamily: Font.Default
    },
    leftWrapper: {
      display: "none",
      width: "50vw",
      background: `linear-gradient(160deg, ${Color.Primary} 0%, ${Color.PrimaryDark} 100%)`,
      color: Color.White,
      padding: "0",
      flexDirection: "column" as "column",
      justifyContent: "center" as "center"
    },
    brandTitle: {
      fontSize: "2.6vw",
      fontWeight: "bold" as "bold",
      margin: 0
    },
    brandText: {
      fontSize: "1.1vw",
      lineHeight: 1.6,
      marginTop: "1.2vw",
      opacity: 0.9,
      maxWidth: "32vw"
    },
    rightWrapper: {
      display: "flex",
      justifyContent: "center" as "center",
      alignItems: "center" as "center",
      width: "100%",
      padding: "8vw 0"
    },
    registerForm: {
      width: "90vw",
      backgroundColor: Color.White,
      padding: "6vw 5vw",
      borderRadius: "3vw",
      boxShadow: "0 4px 24px rgba(0, 0, 0, 0.06)",
      boxSizing: "border-box" as "border-box"
    },
    title: {
      color: Color.DeepBlack,
      fontSize: "6.5vw",
      fontWeight: "bold" as "bold",
      margin: 0
    },
    subTitle: {
      color: Color.SharpAsh,
      fontSize: "3.8vw",
      margin: "2vw 0 6vw 0"
    },
    row: {
      display: "block"
    },
    inputGroup: {
      display: "flex",
      flexDirection: "column" as "column",
      marginBottom: "4vw",
      flex: 1
    },
    label: {
      fontSize: "3.6vw",
      fontWeight: 500,
      color: Color.DeepBlack,
      marginBottom: "1.5vw"
    },
    input: {
      height: "11vw",
      padding: "0 3.5vw",
      fontSize: "3.8vw",
      fontFamily: Font.Default,
      border: `2px solid ${Color.LightAsh}`,
      borderRadius: "2.4vw",
      outline: "none",
      boxSizing: "border-box" as "border-box"
    },
    inputInvalid: {
      border: `2px solid ${Color.Red}`,
      backgroundColor: Color.LightRed
    },
    inputError: {
      color: Color.Red,
      fontSize: "3.2vw",
      marginTop: "1vw"
    },
    policyWrapper: {
      display: "flex",
      alignItems: "center" as "center",
      fontSize: "3.4vw",
      color: Color.SharpAsh,
      margin: "2vw 0 5vw 0"
    },
    policyLabel: {
      marginLeft: "2vw"
    },
    policyLabelInvalid: {
      color: Color.Red
    },
    alert: {
      padding: "3vw",
      borderRadius: "2vw",
      fontSize: "3.6vw",
      marginBottom: "4vw",
      textAlign: "center" as "center"
    },
    alertError: {
      color: Color.Red,
      backgroundColor: Color.LightRed,
      border: `1px solid ${Color.Red}`
    },
    alertSuccess: {
      color: Color.Green,
      backgroundColor: Color.LightGreen,
      border: `1px solid ${Color.Green}`
    },
    submitButton: {
      width: "100%",
      height: "12vw",
      border: "none",
      borderRadius: "2.4vw",
      backgroundColor: Color.Primary,
      color: Color.White,
      fontSize: "4.2vw",
      fontFamily: Font.Default,
      fontWeight: "bold" as "bold",
      textTransform: "uppercase" as "uppercase",
      cursor: "pointer"
    },
    submitButtonDisabled: {
      opacity: 0.6,
      cursor: "not-allowed"
    },
    loginNowWrapper: {
      textAlign: "center" as "center",
      fontSize: "3.6vw",
      color: Color.SharpAsh,
      marginTop: "5vw"
    },
    hyperLink: {
      color: Color.Primary,
      fontWeight: "bold" as "bold",
      cursor: "pointer",
      marginLeft: "1.5vw",
      textDecoration: "none"
    }
  },

  desktop: {
    mainWrapper: {
      flexDirection: "row" as "row"
    },
    leftWrapper: {
      display: "flex",
      padding: "0 6vw"
    },
    rightWrapper: {
      width: "50vw",
      padding: "3vw 0"
    },
    registerForm: {
      width: "36vw",
      padding: "2.6vw 2.8vw",
      borderRadius: "0.8vw"
    },
    title: {
      fontSize: "1.8vw"
    },
    subTitle: {
      fontSize: "0.95vw",
      margin: "0.5vw 0 1.6vw 0"
    },
    row: {
      display: "flex",
      gap: "1vw"
    },
    inputGroup: {
      marginBottom: "1.1vw"
    },
    label: {
      fontSize: "0.85vw",
      marginBottom: "0.4vw"
    },
    input: {
      height: "2.6vw",
      padding: "0 0.9vw",
      fontSize: "0.9vw",
      borderRadius: "0.5vw"
    },
    inputError: {
      fontSize: "0.75vw",
      marginTop: "0.3vw"
    },
    policyWrapper: {
      fontSize: "0.82vw",
      margin: "0.4vw 0 1.4vw 0"
    },
    policyLabel: {
      marginLeft: "0.5vw"
    },
    alert: {
      padding: "0.8vw",
      borderRadius: "0.5vw",
      fontSize: "0.85vw",
      marginBottom: "1.1vw"
    },
    submitButton: {
      height: "3vw",
      borderRadius: "0.5vw",
      fontSize: "0.95vw"
    },
    loginNowWrapper: {
      fontSize: "0.85vw",
      marginTop: "1.2vw"
    },
    hyperLink: {
      marginLeft: "0.4vw"
    }
  }
};