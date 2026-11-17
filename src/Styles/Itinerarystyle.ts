import { Color, Font } from "../Component/Share/Theme";

export const itinerary = {
  mobile: {
    mainWrapper: {
      minHeight: "100vh",
      paddingBottom: "16vw",                 // room for the mobile bottom menu
      backgroundColor: Color.Background,
      fontFamily: Font.Default,
      color: Color.DeepBlack
    },
    cover: {
      padding: "8vw 5vw 10vw 5vw",
      backgroundColor: Color.PrimaryDark,
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: Color.White
    },
    backLink: {
      padding: 0,
      border: "none",
      background: "none",
      color: Color.White,
      opacity: 0.9,
      fontSize: "3.4vw",
      fontFamily: Font.Default,
      cursor: "pointer"
    },
    coverTitle: {
      fontSize: "8vw",
      fontWeight: "bold" as "bold",
      margin: "4vw 0 0 0",
      textShadow: "0 2px 12px rgba(0, 0, 0, 0.35)"
    },
    coverSubTitle: {
      fontSize: "3.8vw",
      opacity: 0.95,
      margin: "1.5vw 0 0 0"
    },
    statRow: {
      display: "flex",
      flexWrap: "wrap" as "wrap",
      gap: "2.5vw",
      marginTop: "5vw"
    },
    stat: {
      display: "flex",
      flexDirection: "column" as "column",
      padding: "2.5vw 4vw",
      borderRadius: "2.5vw",
      backgroundColor: "rgba(255, 255, 255, 0.16)",
      backdropFilter: "blur(6px)"
    },
    statValue: {
      fontSize: "4.4vw",
      fontWeight: "bold" as "bold"
    },
    statLabel: {
      fontSize: "2.8vw",
      opacity: 0.85
    },
    content: {
      display: "flex",
      flexDirection: "column" as "column",
      gap: "5vw",
      padding: "5vw"
    },
    mainColumn: {
      display: "flex",
      flexDirection: "column" as "column",
      gap: "5vw",
      order: 2
    },
    sideColumn: {
      display: "flex",
      flexDirection: "column" as "column",
      gap: "4vw",
      order: 1
    },
    card: {
      padding: "4.5vw",
      backgroundColor: Color.White,
      borderRadius: "3.5vw",
      boxShadow: "0 2px 14px rgba(0, 0, 0, 0.06)"
    },
    cardTitle: {
      fontSize: "4.4vw",
      fontWeight: "bold" as "bold",
      margin: "0 0 3vw 0"
    },
    leg: {
      display: "flex",
      gap: "3vw",
      alignItems: "flex-start" as "flex-start",
      padding: "3vw 0",
      borderTop: `1px dashed ${Color.LightAsh}`
    },
    legIcon: {
      flexShrink: 0,
      width: "10vw",
      height: "10vw",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center" as "center",
      justifyContent: "center" as "center",
      backgroundColor: Color.Background,
      fontSize: "5vw"
    },
    legTitle: {
      fontSize: "3.8vw",
      fontWeight: 600,
      margin: 0
    },
    legMeta: {
      fontSize: "3.2vw",
      color: Color.SharpAsh,
      margin: "1vw 0 0 0"
    },
    tag: {
      display: "inline-block",
      marginLeft: "1.5vw",
      padding: "0.3vw 2vw",
      borderRadius: "3vw",
      backgroundColor: Color.LightGreen,
      color: Color.Green,
      fontSize: "2.8vw",
      fontWeight: 600
    },
    routeSummary: {
      display: "flex",
      justifyContent: "space-between" as "space-between",
      paddingTop: "3vw",
      borderTop: `1px solid ${Color.LightAsh}`,
      fontSize: "3.4vw",
      fontWeight: 600
    },
    carNote: {
      fontSize: "3.2vw",
      color: Color.SharpAsh,
      margin: "3vw 0 0 0"
    },
    dayBlock: {
      display: "flex",
      flexDirection: "column" as "column"
    },
    dayHeader: {
      display: "flex",
      alignItems: "center" as "center",
      gap: "3vw",
      marginBottom: "4vw"
    },
    dayBadge: {
      flexShrink: 0,
      display: "flex",
      flexDirection: "column" as "column",
      alignItems: "center" as "center",
      justifyContent: "center" as "center",
      width: "14vw",
      height: "14vw",
      borderRadius: "3vw",
      background: `linear-gradient(135deg, ${Color.Primary} 0%, ${Color.PrimaryDark} 100%)`,
      color: Color.White,
      lineHeight: 1.1
    },
    dayBadgeLabel: {
      fontSize: "2.6vw",
      opacity: 0.85
    },
    dayBadgeNumber: {
      fontSize: "5.5vw",
      fontWeight: "bold" as "bold"
    },
    dayTitle: {
      fontSize: "5vw",
      fontWeight: "bold" as "bold",
      margin: 0
    },
    dayDate: {
      fontSize: "3.4vw",
      color: Color.SharpAsh,
      margin: "0.5vw 0 0 0"
    },
    timeline: {
      position: "relative" as "relative",
      display: "flex",
      flexDirection: "column" as "column",
      gap: "3vw",
      paddingLeft: "6vw",
      borderLeft: `2px solid ${Color.LightAsh}`,
      marginLeft: "6vw"
    },
    connector: {
      fontSize: "3vw",
      color: Color.SharpAsh,
      marginLeft: "1vw"
    },
    itemCard: {
      position: "relative" as "relative",
      display: "flex",
      flexDirection: "column" as "column",
      backgroundColor: Color.White,
      borderRadius: "3vw",
      overflow: "hidden",
      boxShadow: "0 2px 14px rgba(0, 0, 0, 0.06)"
    },
    travelCard: {
      backgroundColor: Color.LightGreen,
      boxShadow: "none",
      border: `1px solid ${Color.MiddleAsh}`
    },
    dot: {
      position: "absolute" as "absolute",
      left: "-8.1vw",
      top: "5vw",
      width: "3.6vw",
      height: "3.6vw",
      borderRadius: "50%",
      backgroundColor: Color.Primary,
      border: `3px solid ${Color.Background}`
    },
    itemImage: {
      width: "100%",
      height: "40vw"
    },
    itemBody: {
      padding: "4vw"
    },
    itemTime: {
      fontSize: "3.2vw",
      fontWeight: 600,
      color: Color.Primary
    },
    itemTitle: {
      fontSize: "4.4vw",
      fontWeight: "bold" as "bold",
      margin: "1vw 0 0 0"
    },
    itemMeta: {
      fontSize: "3.2vw",
      color: Color.SharpAsh,
      margin: "1.5vw 0 0 0"
    },
    itemNote: {
      display: "inline-block",
      marginTop: "2vw",
      padding: "1vw 2.5vw",
      borderRadius: "2vw",
      backgroundColor: "#FFF7ED",
      color: "#9A3412",
      fontSize: "3vw"
    },
    stayCard: {
      display: "flex",
      gap: "3vw",
      marginTop: "4vw",
      padding: "3vw",
      backgroundColor: Color.White,
      borderRadius: "3vw",
      border: `2px solid ${Color.Accent}`
    },
    stayImage: {
      flexShrink: 0,
      width: "24vw",
      height: "24vw",
      borderRadius: "2vw"
    },
    stayLabel: {
      fontSize: "2.8vw",
      fontWeight: 600,
      color: "#B45309",
      textTransform: "uppercase" as "uppercase",
      letterSpacing: "0.04em"
    },
    stayName: {
      fontSize: "4vw",
      fontWeight: "bold" as "bold",
      margin: "0.5vw 0 0 0"
    },
    otherStays: {
      marginTop: "2vw",
      fontSize: "3.2vw",
      color: Color.SharpAsh
    },
    otherStayRow: {
      display: "flex",
      justifyContent: "space-between" as "space-between",
      gap: "2vw",
      padding: "1.5vw 0",
      borderTop: `1px dashed ${Color.LightAsh}`
    },
    costRow: {
      display: "flex",
      justifyContent: "space-between" as "space-between",
      padding: "2vw 0",
      fontSize: "3.6vw",
      color: Color.SharpAsh
    },
    costTotal: {
      display: "flex",
      justifyContent: "space-between" as "space-between",
      marginTop: "2vw",
      paddingTop: "3vw",
      borderTop: `2px solid ${Color.LightAsh}`,
      fontSize: "4.4vw",
      fontWeight: "bold" as "bold",
      color: Color.PrimaryDark
    },
    costNote: {
      fontSize: "2.8vw",
      color: Color.SharpAsh,
      margin: "2vw 0 0 0"
    },
    primaryButton: {
      width: "100%",
      height: "12vw",
      border: "none",
      borderRadius: "2.4vw",
      background: `linear-gradient(135deg, ${Color.Primary} 0%, ${Color.PrimaryDark} 100%)`,
      color: Color.White,
      fontSize: "4vw",
      fontFamily: Font.Default,
      fontWeight: "bold" as "bold",
      cursor: "pointer"
    },
    secondaryButton: {
      width: "100%",
      height: "12vw",
      border: `2px solid ${Color.Primary}`,
      borderRadius: "2.4vw",
      backgroundColor: Color.White,
      color: Color.Primary,
      fontSize: "3.8vw",
      fontFamily: Font.Default,
      fontWeight: "bold" as "bold",
      cursor: "pointer"
    },
    dangerButton: {
      width: "100%",
      height: "12vw",
      border: `1px solid ${Color.Red}`,
      borderRadius: "2.4vw",
      backgroundColor: Color.LightRed,
      color: Color.Red,
      fontSize: "3.8vw",
      fontFamily: Font.Default,
      fontWeight: "bold" as "bold",
      cursor: "pointer"
    },
    buttonDisabled: {
      opacity: 0.6,
      cursor: "not-allowed"
    },
    savedNote: {
      margin: "0 0 3vw 0",
      fontSize: "3.8vw",
      fontWeight: "bold" as "bold",
      color: Color.Green
    },
    actionError: {
      margin: "3vw 0 0 0",
      fontSize: "3.2vw",
      color: Color.Red
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
    credit: {
      padding: "4vw 5vw 8vw 5vw",
      fontSize: "2.8vw",
      color: Color.SharpAsh,
      textAlign: "center" as "center"
    }
  },

  desktop: {
    mainWrapper: {
      paddingBottom: 0
    },
    cover: {
      padding: "2.5vw 6vw 3vw 6vw"
    },
    backLink: {
      fontSize: "0.9vw"
    },
    coverTitle: {
      fontSize: "2.8vw",
      margin: "1.2vw 0 0 0"
    },
    coverSubTitle: {
      fontSize: "1.1vw",
      margin: "0.4vw 0 0 0"
    },
    statRow: {
      gap: "0.8vw",
      marginTop: "1.6vw"
    },
    stat: {
      padding: "0.7vw 1.3vw",
      borderRadius: "0.7vw"
    },
    statValue: {
      fontSize: "1.25vw"
    },
    statLabel: {
      fontSize: "0.75vw"
    },
    content: {
      flexDirection: "row" as "row",
      alignItems: "flex-start" as "flex-start",
      gap: "2vw",
      padding: "2.4vw 6vw"
    },
    mainColumn: {
      flex: 1,
      gap: "2.5vw",
      order: 1
    },
    sideColumn: {
      position: "sticky" as "sticky",
      top: "5vw",
      width: "24vw",
      gap: "1.2vw",
      order: 2
    },
    card: {
      padding: "1.3vw",
      borderRadius: "0.9vw"
    },
    cardTitle: {
      fontSize: "1.15vw",
      margin: "0 0 0.8vw 0"
    },
    leg: {
      gap: "0.8vw",
      padding: "0.8vw 0"
    },
    legIcon: {
      width: "2.4vw",
      height: "2.4vw",
      fontSize: "1.2vw"
    },
    legTitle: {
      fontSize: "0.95vw"
    },
    legMeta: {
      fontSize: "0.8vw",
      margin: "0.25vw 0 0 0"
    },
    tag: {
      marginLeft: "0.4vw",
      padding: "0.1vw 0.5vw",
      borderRadius: "0.8vw",
      fontSize: "0.7vw"
    },
    routeSummary: {
      paddingTop: "0.8vw",
      fontSize: "0.88vw"
    },
    carNote: {
      fontSize: "0.8vw",
      margin: "0.8vw 0 0 0"
    },
    dayHeader: {
      gap: "1vw",
      marginBottom: "1.2vw"
    },
    dayBadge: {
      width: "3.8vw",
      height: "3.8vw",
      borderRadius: "0.8vw"
    },
    dayBadgeLabel: {
      fontSize: "0.7vw"
    },
    dayBadgeNumber: {
      fontSize: "1.5vw"
    },
    dayTitle: {
      fontSize: "1.5vw"
    },
    dayDate: {
      fontSize: "0.9vw"
    },
    timeline: {
      gap: "1vw",
      paddingLeft: "2vw",
      marginLeft: "1.9vw"
    },
    connector: {
      fontSize: "0.8vw",
      marginLeft: "0.3vw"
    },
    itemCard: {
      flexDirection: "row" as "row",
      borderRadius: "0.9vw"
    },
    dot: {
      left: "-2.55vw",
      top: "1.4vw",
      width: "1vw",
      height: "1vw"
    },
    itemImage: {
      width: "13vw",
      height: "auto",
      minHeight: "9vw"
    },
    itemBody: {
      flex: 1,
      padding: "1.1vw 1.3vw"
    },
    itemTime: {
      fontSize: "0.85vw"
    },
    itemTitle: {
      fontSize: "1.15vw",
      margin: "0.25vw 0 0 0"
    },
    itemMeta: {
      fontSize: "0.82vw",
      margin: "0.4vw 0 0 0"
    },
    itemNote: {
      marginTop: "0.6vw",
      padding: "0.25vw 0.7vw",
      borderRadius: "0.5vw",
      fontSize: "0.78vw"
    },
    stayCard: {
      gap: "1vw",
      marginTop: "1.2vw",
      marginLeft: "1.9vw",
      padding: "0.9vw",
      borderRadius: "0.9vw"
    },
    stayImage: {
      width: "7vw",
      height: "7vw",
      borderRadius: "0.6vw"
    },
    stayLabel: {
      fontSize: "0.72vw"
    },
    stayName: {
      fontSize: "1.05vw"
    },
    otherStays: {
      marginTop: "0.5vw",
      fontSize: "0.8vw"
    },
    otherStayRow: {
      gap: "0.6vw",
      padding: "0.35vw 0"
    },
    costRow: {
      padding: "0.5vw 0",
      fontSize: "0.9vw"
    },
    costTotal: {
      marginTop: "0.5vw",
      paddingTop: "0.8vw",
      fontSize: "1.15vw"
    },
    costNote: {
      fontSize: "0.72vw",
      margin: "0.6vw 0 0 0"
    },
    primaryButton: {
      height: "2.8vw",
      borderRadius: "0.5vw",
      fontSize: "0.95vw"
    },
    secondaryButton: {
      height: "2.8vw",
      borderRadius: "0.5vw",
      fontSize: "0.92vw"
    },
    dangerButton: {
      height: "2.8vw",
      borderRadius: "0.5vw",
      fontSize: "0.92vw"
    },
    savedNote: {
      margin: "0 0 0.8vw 0",
      fontSize: "0.95vw"
    },
    actionError: {
      margin: "0.8vw 0 0 0",
      fontSize: "0.82vw"
    },
    message: {
      margin: "3vw 6vw",
      padding: "2vw",
      borderRadius: "0.9vw",
      fontSize: "1vw"
    },
    credit: {
      padding: "1vw 6vw 2.5vw 6vw",
      fontSize: "0.75vw"
    }
  }
};
