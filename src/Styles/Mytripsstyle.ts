import { Color, Font } from "../Component/Share/Theme";

export const myTrips = {
  mobile: {
    mainWrapper: {
      minHeight: "100vh",
      paddingBottom: "16vw",                 // room for the mobile bottom menu
      backgroundColor: Color.Background,
      fontFamily: Font.Default,
      color: Color.DeepBlack
    },
    banner: {
      display: "flex",
      flexDirection: "column" as "column",
      gap: "4vw",
      padding: "8vw 5vw",
      background: `linear-gradient(135deg, ${Color.Primary} 0%, ${Color.PrimaryDark} 100%)`,
      color: Color.White
    },
    bannerTitle: {
      fontSize: "8vw",
      fontWeight: "bold" as "bold",
      margin: 0
    },
    bannerText: {
      fontSize: "3.6vw",
      opacity: 0.9,
      margin: "1vw 0 0 0"
    },
    newTripButton: {
      alignSelf: "flex-start" as "flex-start",
      padding: "2.8vw 5vw",
      border: "none",
      borderRadius: "2.4vw",
      backgroundColor: Color.Accent,
      color: Color.DeepBlack,
      fontSize: "3.8vw",
      fontFamily: Font.Default,
      fontWeight: "bold" as "bold",
      cursor: "pointer"
    },
    content: {
      padding: "5vw"
    },
    tabs: {
      display: "flex",
      gap: "2vw",
      marginBottom: "5vw"
    },
    tab: {
      padding: "2vw 4.5vw",
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
    grid: {
      display: "grid",
      gridTemplateColumns: "1fr",
      gap: "4vw"
    },
    card: {
      display: "flex",
      flexDirection: "column" as "column",
      backgroundColor: Color.White,
      borderRadius: "3.5vw",
      overflow: "hidden",
      boxShadow: "0 2px 14px rgba(0, 0, 0, 0.06)",
      cursor: "pointer"
    },
    cardImageWrapper: {
      position: "relative" as "relative"
    },
    cardImage: {
      width: "100%",
      height: "42vw"
    },
    cardImageOverlay: {
      position: "absolute" as "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column" as "column",
      justifyContent: "flex-end" as "flex-end",
      padding: "4vw",
      background: "linear-gradient(180deg, rgba(0,0,0,0) 35%, rgba(0,0,0,0.7) 100%)",
      color: Color.White
    },
    cardTitle: {
      fontSize: "5.2vw",
      fontWeight: "bold" as "bold",
      margin: 0
    },
    cardDates: {
      fontSize: "3.4vw",
      opacity: 0.95,
      margin: "1vw 0 0 0"
    },
    statusBadge: {
      position: "absolute" as "absolute",
      top: "3vw",
      left: "3vw",
      padding: "1vw 3vw",
      borderRadius: "4vw",
      fontSize: "3vw",
      fontWeight: 700
    },
    statusUpcoming: {
      backgroundColor: Color.White,
      color: Color.Primary
    },
    statusOngoing: {
      backgroundColor: Color.Accent,
      color: Color.DeepBlack
    },
    statusCompleted: {
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      color: Color.White
    },
    cardBody: {
      display: "flex",
      justifyContent: "space-between" as "space-between",
      alignItems: "center" as "center",
      gap: "3vw",
      padding: "4vw"
    },
    cardMeta: {
      fontSize: "3.4vw",
      color: Color.SharpAsh,
      margin: 0
    },
    cardCost: {
      fontSize: "3.8vw",
      fontWeight: "bold" as "bold",
      color: Color.PrimaryDark,
      margin: "1vw 0 0 0"
    },
    deleteButton: {
      flexShrink: 0,
      width: "10vw",
      height: "10vw",
      border: `1px solid ${Color.LightAsh}`,
      borderRadius: "50%",
      backgroundColor: Color.White,
      fontSize: "4.2vw",
      cursor: "pointer"
    },
    empty: {
      display: "flex",
      flexDirection: "column" as "column",
      alignItems: "center" as "center",
      gap: "3vw",
      padding: "12vw 6vw",
      backgroundColor: Color.White,
      borderRadius: "3.5vw",
      textAlign: "center" as "center"
    },
    emptyIcon: {
      fontSize: "14vw"
    },
    emptyTitle: {
      fontSize: "5vw",
      fontWeight: "bold" as "bold",
      margin: 0
    },
    emptyText: {
      fontSize: "3.6vw",
      color: Color.SharpAsh,
      margin: 0
    },
    primaryButton: {
      padding: "3vw 6vw",
      border: "none",
      borderRadius: "2.4vw",
      background: `linear-gradient(135deg, ${Color.Primary} 0%, ${Color.PrimaryDark} 100%)`,
      color: Color.White,
      fontSize: "3.8vw",
      fontFamily: Font.Default,
      fontWeight: "bold" as "bold",
      cursor: "pointer"
    },
    message: {
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
    }
  },

  desktop: {
    mainWrapper: {
      paddingBottom: 0
    },
    banner: {
      flexDirection: "row" as "row",
      alignItems: "center" as "center",
      justifyContent: "space-between" as "space-between",
      padding: "2.8vw 6vw"
    },
    bannerTitle: {
      fontSize: "2.6vw"
    },
    bannerText: {
      fontSize: "1vw",
      margin: "0.3vw 0 0 0"
    },
    newTripButton: {
      alignSelf: "center" as "center",
      padding: "0.8vw 1.8vw",
      borderRadius: "0.5vw",
      fontSize: "0.95vw"
    },
    content: {
      padding: "2.4vw 6vw"
    },
    tabs: {
      gap: "0.6vw",
      marginBottom: "1.6vw"
    },
    tab: {
      padding: "0.5vw 1.3vw",
      borderRadius: "1.5vw",
      fontSize: "0.88vw"
    },
    grid: {
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "1.4vw"
    },
    card: {
      borderRadius: "1vw"
    },
    cardImage: {
      height: "12vw"
    },
    cardImageOverlay: {
      padding: "1.1vw"
    },
    cardTitle: {
      fontSize: "1.35vw"
    },
    cardDates: {
      fontSize: "0.88vw",
      margin: "0.25vw 0 0 0"
    },
    statusBadge: {
      top: "0.8vw",
      left: "0.8vw",
      padding: "0.25vw 0.8vw",
      borderRadius: "1vw",
      fontSize: "0.75vw"
    },
    cardBody: {
      gap: "0.8vw",
      padding: "1.1vw"
    },
    cardMeta: {
      fontSize: "0.85vw"
    },
    cardCost: {
      fontSize: "1vw",
      margin: "0.25vw 0 0 0"
    },
    deleteButton: {
      width: "2.4vw",
      height: "2.4vw",
      fontSize: "1vw"
    },
    empty: {
      gap: "0.8vw",
      padding: "4vw 2vw",
      borderRadius: "1vw"
    },
    emptyIcon: {
      fontSize: "4vw"
    },
    emptyTitle: {
      fontSize: "1.4vw"
    },
    emptyText: {
      fontSize: "0.95vw"
    },
    primaryButton: {
      padding: "0.8vw 1.8vw",
      borderRadius: "0.5vw",
      fontSize: "0.95vw"
    },
    message: {
      padding: "2vw",
      borderRadius: "0.9vw",
      fontSize: "1vw"
    }
  }
};
