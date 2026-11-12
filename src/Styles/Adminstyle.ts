import { Color, Font } from "../Component/Share/Theme";

export const admin = {
  mobile: {
    mainWrapper: {
      minHeight: "100vh",
      backgroundColor: Color.Background,
      fontFamily: Font.Default,
      color: Color.DeepBlack
    },
    banner: {
      padding: "7vw 5vw",
      background: `linear-gradient(135deg, #264653 0%, ${Color.PrimaryDark} 100%)`,
      color: Color.White
    },
    bannerTitle: {
      fontSize: "7vw",
      fontWeight: "bold" as "bold",
      margin: 0
    },
    bannerText: {
      fontSize: "3.4vw",
      opacity: 0.85,
      margin: "1vw 0 0 0"
    },
    statGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "2.5vw",
      marginTop: "5vw"
    },
    stat: {
      display: "flex",
      flexDirection: "column" as "column",
      padding: "3vw",
      borderRadius: "2.5vw",
      backgroundColor: "rgba(255, 255, 255, 0.12)"
    },
    statValue: {
      fontSize: "5.5vw",
      fontWeight: "bold" as "bold"
    },
    statLabel: {
      fontSize: "2.8vw",
      opacity: 0.85
    },
    content: {
      padding: "5vw"
    },
    tabs: {
      display: "flex",
      gap: "2vw",
      overflowX: "auto" as "auto",
      marginBottom: "4vw"
    },
    tab: {
      flexShrink: 0,
      padding: "2.2vw 4vw",
      border: `1px solid ${Color.MiddleAsh}`,
      borderRadius: "5vw",
      backgroundColor: Color.White,
      color: Color.SharpAsh,
      fontSize: "3.4vw",
      fontFamily: Font.Default,
      fontWeight: 600,
      cursor: "pointer"
    },
    tabActive: {
      border: `1px solid ${Color.Primary}`,
      backgroundColor: Color.Primary,
      color: Color.White
    },
    toolbar: {
      display: "flex",
      flexWrap: "wrap" as "wrap",
      gap: "2.5vw",
      marginBottom: "4vw"
    },
    searchInput: {
      flex: 1,
      minWidth: "40vw",
      height: "10.5vw",
      padding: "0 3vw",
      fontSize: "3.6vw",
      fontFamily: Font.Default,
      border: `1px solid ${Color.MiddleAsh}`,
      borderRadius: "2.4vw",
      outline: "none",
      boxSizing: "border-box" as "border-box"
    },
    filterSelect: {
      height: "10.5vw",
      padding: "0 2.5vw",
      fontSize: "3.6vw",
      fontFamily: Font.Default,
      border: `1px solid ${Color.MiddleAsh}`,
      borderRadius: "2.4vw",
      backgroundColor: Color.White
    },
    addButton: {
      height: "10.5vw",
      padding: "0 4.5vw",
      border: "none",
      borderRadius: "2.4vw",
      backgroundColor: Color.Primary,
      color: Color.White,
      fontSize: "3.6vw",
      fontFamily: Font.Default,
      fontWeight: "bold" as "bold",
      cursor: "pointer"
    },
    count: {
      fontSize: "3.2vw",
      color: Color.SharpAsh,
      margin: "0 0 3vw 0"
    },
    tableWrapper: {
      backgroundColor: Color.White,
      borderRadius: "3vw",
      boxShadow: "0 2px 14px rgba(0, 0, 0, 0.06)",
      overflowX: "auto" as "auto"
    },
    table: {
      width: "100%",
      borderCollapse: "collapse" as "collapse",
      fontSize: "3.4vw"
    },
    th: {
      padding: "3vw",
      textAlign: "left" as "left",
      fontSize: "3vw",
      fontWeight: 600,
      color: Color.SharpAsh,
      textTransform: "uppercase" as "uppercase",
      letterSpacing: "0.03em",
      borderBottom: `1px solid ${Color.LightAsh}`,
      whiteSpace: "nowrap" as "nowrap"
    },
    td: {
      padding: "3vw",
      borderBottom: `1px solid ${Color.LightAsh}`,
      verticalAlign: "middle" as "middle"
    },
    thumb: {
      width: "12vw",
      height: "12vw",
      borderRadius: "2vw",
      fontSize: "0.9em"
    },
    rowActions: {
      display: "flex",
      gap: "2vw",
      justifyContent: "flex-end" as "flex-end",
      whiteSpace: "nowrap" as "nowrap"
    },
    editButton: {
      padding: "1.5vw 3.5vw",
      border: `1px solid ${Color.Primary}`,
      borderRadius: "2vw",
      backgroundColor: Color.White,
      color: Color.Primary,
      fontSize: "3.2vw",
      fontFamily: Font.Default,
      fontWeight: 600,
      cursor: "pointer"
    },
    deleteButton: {
      padding: "1.5vw 3.5vw",
      border: `1px solid ${Color.Red}`,
      borderRadius: "2vw",
      backgroundColor: Color.LightRed,
      color: Color.Red,
      fontSize: "3.2vw",
      fontFamily: Font.Default,
      fontWeight: 600,
      cursor: "pointer"
    },
    empty: {
      padding: "8vw",
      textAlign: "center" as "center",
      color: Color.SharpAsh,
      fontSize: "3.6vw"
    },
    toast: {
      position: "fixed" as "fixed",
      bottom: "6vw",
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 30,
      padding: "3vw 5vw",
      borderRadius: "3vw",
      backgroundColor: Color.DeepBlack,
      color: Color.White,
      fontSize: "3.6vw",
      boxShadow: "0 6px 24px rgba(0, 0, 0, 0.25)"
    },
    message: {
      margin: "10vw 5vw",
      padding: "6vw",
      borderRadius: "3vw",
      backgroundColor: Color.White,
      textAlign: "center" as "center",
      fontSize: "3.8vw",
      color: Color.SharpAsh
    },
    messageError: {
      color: Color.Red,
      backgroundColor: Color.LightRed,
      border: `1px solid ${Color.Red}`
    },
    // ---- Form (modal) ----
    overlay: {
      position: "fixed" as "fixed",
      inset: 0,
      zIndex: 20,
      display: "flex",
      alignItems: "flex-end" as "flex-end",
      justifyContent: "center" as "center",
      backgroundColor: "rgba(0, 0, 0, 0.45)"
    },
    modal: {
      width: "100%",
      maxHeight: "92vh",
      overflowY: "auto" as "auto",
      padding: "5vw",
      backgroundColor: Color.White,
      borderRadius: "4vw 4vw 0 0",
      boxSizing: "border-box" as "border-box"
    },
    modalTitle: {
      fontSize: "5.2vw",
      fontWeight: "bold" as "bold",
      margin: "0 0 4vw 0"
    },
    formGrid: {
      display: "grid",
      gridTemplateColumns: "1fr",
      gap: "3vw"
    },
    field: {
      display: "flex",
      flexDirection: "column" as "column"
    },
    fieldWide: {
      gridColumn: "1 / -1"
    },
    label: {
      fontSize: "3.2vw",
      fontWeight: 600,
      color: Color.SharpAsh,
      marginBottom: "1.2vw"
    },
    required: {
      color: Color.Red
    },
    input: {
      height: "10.5vw",
      padding: "0 3vw",
      fontSize: "3.6vw",
      fontFamily: Font.Default,
      border: `2px solid ${Color.LightAsh}`,
      borderRadius: "2.4vw",
      backgroundColor: Color.White,
      outline: "none",
      boxSizing: "border-box" as "border-box"
    },
    textarea: {
      minHeight: "22vw",
      padding: "2.5vw 3vw",
      fontSize: "3.6vw",
      fontFamily: Font.Default,
      border: `2px solid ${Color.LightAsh}`,
      borderRadius: "2.4vw",
      outline: "none",
      resize: "vertical" as "vertical",
      boxSizing: "border-box" as "border-box"
    },
    checkboxRow: {
      display: "flex",
      alignItems: "center" as "center",
      gap: "2vw",
      height: "10.5vw",
      fontSize: "3.6vw"
    },
    hint: {
      fontSize: "3vw",
      color: Color.SharpAsh,
      margin: "1vw 0 0 0"
    },
    stopsBox: {
      marginTop: "4vw",
      padding: "4vw",
      borderRadius: "3vw",
      backgroundColor: Color.Background
    },
    stopsTitle: {
      fontSize: "4vw",
      fontWeight: "bold" as "bold",
      margin: "0 0 1vw 0"
    },
    stopRow: {
      display: "grid",
      gridTemplateColumns: "6vw 1fr 22vw 9vw",
      alignItems: "center" as "center",
      gap: "2vw",
      marginTop: "2.5vw"
    },
    stopNumber: {
      fontSize: "3.4vw",
      fontWeight: "bold" as "bold",
      color: Color.Primary
    },
    iconButton: {
      height: "9vw",
      border: `1px solid ${Color.MiddleAsh}`,
      borderRadius: "2vw",
      backgroundColor: Color.White,
      fontSize: "3.6vw",
      cursor: "pointer"
    },
    linkButton: {
      marginTop: "3vw",
      padding: 0,
      border: "none",
      background: "none",
      color: Color.Primary,
      fontSize: "3.6vw",
      fontFamily: Font.Default,
      fontWeight: 600,
      cursor: "pointer"
    },
    formError: {
      marginTop: "4vw",
      padding: "3vw",
      borderRadius: "2vw",
      fontSize: "3.4vw",
      color: Color.Red,
      backgroundColor: Color.LightRed,
      border: `1px solid ${Color.Red}`
    },
    modalActions: {
      display: "flex",
      justifyContent: "flex-end" as "flex-end",
      gap: "3vw",
      marginTop: "5vw"
    },
    cancelButton: {
      height: "11vw",
      padding: "0 5vw",
      border: `1px solid ${Color.MiddleAsh}`,
      borderRadius: "2.4vw",
      backgroundColor: Color.White,
      color: Color.SharpAsh,
      fontSize: "3.8vw",
      fontFamily: Font.Default,
      fontWeight: 600,
      cursor: "pointer"
    },
    saveButton: {
      height: "11vw",
      padding: "0 6vw",
      border: "none",
      borderRadius: "2.4vw",
      backgroundColor: Color.Primary,
      color: Color.White,
      fontSize: "3.8vw",
      fontFamily: Font.Default,
      fontWeight: "bold" as "bold",
      cursor: "pointer"
    },
    buttonDisabled: {
      opacity: 0.6,
      cursor: "not-allowed"
    }
  },

  desktop: {
    banner: {
      padding: "2.4vw 6vw"
    },
    bannerTitle: {
      fontSize: "2.2vw"
    },
    bannerText: {
      fontSize: "0.95vw",
      margin: "0.3vw 0 0 0"
    },
    statGrid: {
      gridTemplateColumns: "repeat(6, 1fr)",
      gap: "1vw",
      marginTop: "1.6vw"
    },
    stat: {
      padding: "0.9vw 1.1vw",
      borderRadius: "0.7vw"
    },
    statValue: {
      fontSize: "1.6vw"
    },
    statLabel: {
      fontSize: "0.78vw"
    },
    content: {
      padding: "2vw 6vw"
    },
    tabs: {
      gap: "0.6vw",
      marginBottom: "1.4vw"
    },
    tab: {
      padding: "0.55vw 1.2vw",
      borderRadius: "1.5vw",
      fontSize: "0.9vw"
    },
    toolbar: {
      gap: "0.8vw",
      marginBottom: "1.2vw"
    },
    searchInput: {
      minWidth: "16vw",
      height: "2.5vw",
      padding: "0 0.8vw",
      fontSize: "0.9vw",
      borderRadius: "0.5vw"
    },
    filterSelect: {
      height: "2.5vw",
      padding: "0 0.6vw",
      fontSize: "0.9vw",
      borderRadius: "0.5vw"
    },
    addButton: {
      height: "2.5vw",
      padding: "0 1.4vw",
      borderRadius: "0.5vw",
      fontSize: "0.9vw"
    },
    count: {
      fontSize: "0.82vw",
      margin: "0 0 0.8vw 0"
    },
    tableWrapper: {
      borderRadius: "0.9vw"
    },
    table: {
      fontSize: "0.88vw"
    },
    th: {
      padding: "0.8vw 1vw",
      fontSize: "0.75vw"
    },
    td: {
      padding: "0.6vw 1vw"
    },
    thumb: {
      width: "3.2vw",
      height: "3.2vw",
      borderRadius: "0.5vw"
    },
    rowActions: {
      gap: "0.5vw"
    },
    editButton: {
      padding: "0.35vw 0.9vw",
      borderRadius: "0.45vw",
      fontSize: "0.8vw"
    },
    deleteButton: {
      padding: "0.35vw 0.9vw",
      borderRadius: "0.45vw",
      fontSize: "0.8vw"
    },
    empty: {
      padding: "2.5vw",
      fontSize: "0.95vw"
    },
    toast: {
      bottom: "2vw",
      padding: "0.8vw 1.5vw",
      borderRadius: "0.7vw",
      fontSize: "0.9vw"
    },
    message: {
      margin: "3vw 6vw",
      padding: "2vw",
      borderRadius: "0.9vw",
      fontSize: "1vw"
    },
    overlay: {
      alignItems: "center" as "center"
    },
    modal: {
      width: "46vw",
      maxHeight: "88vh",
      padding: "1.8vw 2vw",
      borderRadius: "1vw"
    },
    modalTitle: {
      fontSize: "1.4vw",
      margin: "0 0 1.2vw 0"
    },
    formGrid: {
      gridTemplateColumns: "1fr 1fr",
      gap: "0.9vw 1.1vw"
    },
    label: {
      fontSize: "0.78vw",
      marginBottom: "0.3vw"
    },
    input: {
      height: "2.5vw",
      padding: "0 0.7vw",
      fontSize: "0.9vw",
      borderRadius: "0.5vw"
    },
    textarea: {
      minHeight: "5vw",
      padding: "0.6vw 0.7vw",
      fontSize: "0.9vw",
      borderRadius: "0.5vw"
    },
    checkboxRow: {
      gap: "0.5vw",
      height: "2.5vw",
      fontSize: "0.9vw"
    },
    hint: {
      fontSize: "0.75vw",
      margin: "0.3vw 0 0 0"
    },
    stopsBox: {
      marginTop: "1.2vw",
      padding: "1vw 1.2vw",
      borderRadius: "0.7vw"
    },
    stopsTitle: {
      fontSize: "1vw",
      margin: "0 0 0.3vw 0"
    },
    stopRow: {
      gridTemplateColumns: "1.6vw 1fr 7vw 2.4vw",
      gap: "0.6vw",
      marginTop: "0.6vw"
    },
    stopNumber: {
      fontSize: "0.9vw"
    },
    iconButton: {
      height: "2.4vw",
      borderRadius: "0.45vw",
      fontSize: "0.9vw"
    },
    linkButton: {
      marginTop: "0.8vw",
      fontSize: "0.9vw"
    },
    formError: {
      marginTop: "1vw",
      padding: "0.7vw",
      borderRadius: "0.5vw",
      fontSize: "0.85vw"
    },
    modalActions: {
      gap: "0.8vw",
      marginTop: "1.4vw"
    },
    cancelButton: {
      height: "2.6vw",
      padding: "0 1.4vw",
      borderRadius: "0.5vw",
      fontSize: "0.9vw"
    },
    saveButton: {
      height: "2.6vw",
      padding: "0 1.8vw",
      borderRadius: "0.5vw",
      fontSize: "0.9vw"
    }
  }
};
