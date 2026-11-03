import { Color, Font } from "../Component/Share/Theme";

export const home = {
  mobile: {
    mainWrapper: {
      minHeight: "100vh",
      backgroundColor: Color.Background,
      fontFamily: Font.Default,
      color: Color.DeepBlack
    },
    header: {
      display: "flex",
      justifyContent: "space-between" as "space-between",
      alignItems: "center" as "center",
      padding: "4vw 5vw",
      backgroundColor: Color.White,
      borderBottom: `1px solid ${Color.LightAsh}`
    },
    brand: {
      fontSize: "5vw",
      fontWeight: "bold" as "bold",
      color: Color.Primary,
      margin: 0
    },
    userBox: {
      display: "flex",
      alignItems: "center" as "center",
      gap: "3vw"
    },
    userName: {
      display: "none",
      fontSize: "3.6vw",
      color: Color.SharpAsh
    },
    logoutButton: {
      padding: "2vw 4vw",
      border: `1px solid ${Color.Primary}`,
      borderRadius: "2vw",
      backgroundColor: Color.White,
      color: Color.Primary,
      fontSize: "3.4vw",
      fontFamily: Font.Default,
      fontWeight: "bold" as "bold",
      cursor: "pointer"
    },
    hero: {
      padding: "8vw 5vw 18vw 5vw",
      background: `linear-gradient(160deg, ${Color.Primary} 0%, ${Color.PrimaryDark} 100%)`,
      color: Color.White
    },
    heroTitle: {
      fontSize: "7vw",
      fontWeight: "bold" as "bold",
      margin: 0
    },
    heroText: {
      fontSize: "3.8vw",
      lineHeight: 1.6,
      opacity: 0.9,
      margin: "2vw 0 0 0"
    },
    searchCard: {
      margin: "-12vw 5vw 0 5vw",
      padding: "5vw",
      backgroundColor: Color.White,
      borderRadius: "3vw",
      boxShadow: "0 4px 24px rgba(0, 0, 0, 0.08)"
    },
    searchRow: {
      display: "flex",
      flexDirection: "column" as "column",
      gap: "3vw"
    },
    field: {
      display: "flex",
      flexDirection: "column" as "column",
      flex: 1
    },
    label: {
      fontSize: "3.4vw",
      fontWeight: 500,
      color: Color.DeepBlack,
      marginBottom: "1.5vw"
    },
    input: {
      height: "11vw",
      padding: "0 3vw",
      fontSize: "3.8vw",
      fontFamily: Font.Default,
      border: `2px solid ${Color.LightAsh}`,
      borderRadius: "2.4vw",
      backgroundColor: Color.White,
      outline: "none",
      boxSizing: "border-box" as "border-box"
    },
    searchButton: {
      height: "12vw",
      marginTop: "2vw",
      border: "none",
      borderRadius: "2.4vw",
      backgroundColor: Color.Primary,
      color: Color.White,
      fontSize: "4vw",
      fontFamily: Font.Default,
      fontWeight: "bold" as "bold",
      cursor: "pointer"
    },
    searchButtonDisabled: {
      opacity: 0.6,
      cursor: "not-allowed"
    },
    searchError: {
      color: Color.Red,
      fontSize: "3.2vw",
      margin: "2vw 0 0 0"
    },
    alert: {
      margin: "4vw 5vw 0 5vw",
      padding: "3vw",
      borderRadius: "2vw",
      fontSize: "3.6vw",
      textAlign: "center" as "center",
      color: Color.Red,
      backgroundColor: Color.LightRed,
      border: `1px solid ${Color.Red}`
    },
    section: {
      padding: "6vw 5vw 0 5vw"
    },
    sectionTitle: {
      fontSize: "5.2vw",
      fontWeight: "bold" as "bold",
      margin: 0
    },
    sectionSubTitle: {
      fontSize: "3.4vw",
      color: Color.SharpAsh,
      margin: "1vw 0 3vw 0"
    },
    filterRow: {
      display: "flex",
      flexWrap: "wrap" as "wrap",
      alignItems: "center" as "center",
      gap: "2vw",
      marginBottom: "4vw"
    },
    chip: {
      padding: "1.5vw 3.5vw",
      border: `1px solid ${Color.MiddleAsh}`,
      borderRadius: "5vw",
      backgroundColor: Color.White,
      color: Color.SharpAsh,
      fontSize: "3.2vw",
      fontFamily: Font.Default,
      cursor: "pointer"
    },
    chipActive: {
      border: `1px solid ${Color.Primary}`,
      backgroundColor: Color.Primary,
      color: Color.White
    },
    priceSelect: {
      height: "8vw",
      padding: "0 2vw",
      fontSize: "3.2vw",
      fontFamily: Font.Default,
      border: `1px solid ${Color.MiddleAsh}`,
      borderRadius: "2vw",
      backgroundColor: Color.White
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "1fr",
      gap: "3vw"
    },
    card: {
      display: "flex",
      flexDirection: "column" as "column",
      padding: "4vw",
      backgroundColor: Color.White,
      borderRadius: "3vw",
      border: `1px solid ${Color.LightAsh}`
    },
    cardHeader: {
      display: "flex",
      justifyContent: "space-between" as "space-between",
      alignItems: "flex-start" as "flex-start",
      gap: "2vw"
    },
    cardTitle: {
      fontSize: "4.2vw",
      fontWeight: "bold" as "bold",
      margin: 0
    },
    badge: {
      flexShrink: 0,
      padding: "0.8vw 2.5vw",
      borderRadius: "3vw",
      backgroundColor: Color.Background,
      color: Color.Primary,
      fontSize: "3vw",
      fontWeight: 500
    },
    cardMeta: {
      fontSize: "3.2vw",
      color: Color.SharpAsh,
      margin: "1.5vw 0 0 0"
    },
    cardText: {
      fontSize: "3.4vw",
      lineHeight: 1.5,
      margin: "2vw 0 0 0"
    },
    cardFooter: {
      display: "flex",
      justifyContent: "space-between" as "space-between",
      alignItems: "center" as "center",
      marginTop: "auto",
      paddingTop: "3vw",
      fontSize: "3.4vw"
    },
    price: {
      fontWeight: "bold" as "bold",
      color: Color.DeepBlack
    },
    rating: {
      color: Color.Accent,
      fontWeight: "bold" as "bold"
    },
    link: {
      color: Color.Primary,
      fontWeight: "bold" as "bold",
      textDecoration: "none"
    },
    emptyText: {
      fontSize: "3.6vw",
      color: Color.SharpAsh,
      padding: "4vw 0"
    },
    note: {
      margin: "6vw 5vw",
      padding: "4vw",
      borderRadius: "2vw",
      fontSize: "3.4vw",
      lineHeight: 1.5,
      color: Color.PrimaryDark,
      backgroundColor: Color.LightGreen,
      border: `1px solid ${Color.MiddleAsh}`
    }
  },

  desktop: {
    header: {
      padding: "1.2vw 6vw"
    },
    brand: {
      fontSize: "1.5vw"
    },
    userBox: {
      gap: "1vw"
    },
    userName: {
      display: "inline",
      fontSize: "0.9vw"
    },
    logoutButton: {
      padding: "0.5vw 1.2vw",
      borderRadius: "0.5vw",
      fontSize: "0.85vw"
    },
    hero: {
      padding: "3.5vw 6vw 6vw 6vw"
    },
    heroTitle: {
      fontSize: "2.4vw"
    },
    heroText: {
      fontSize: "1.05vw",
      margin: "0.6vw 0 0 0",
      maxWidth: "45vw"
    },
    searchCard: {
      margin: "-3.5vw 6vw 0 6vw",
      padding: "1.6vw",
      borderRadius: "0.8vw"
    },
    searchRow: {
      flexDirection: "row" as "row",
      alignItems: "flex-end" as "flex-end",
      gap: "1vw"
    },
    label: {
      fontSize: "0.85vw",
      marginBottom: "0.4vw"
    },
    input: {
      height: "2.8vw",
      padding: "0 0.8vw",
      fontSize: "0.9vw",
      borderRadius: "0.5vw"
    },
    searchButton: {
      height: "2.8vw",
      marginTop: 0,
      padding: "0 2.2vw",
      borderRadius: "0.5vw",
      fontSize: "0.95vw"
    },
    searchError: {
      fontSize: "0.8vw",
      margin: "0.6vw 0 0 0"
    },
    alert: {
      margin: "1.2vw 6vw 0 6vw",
      padding: "0.8vw",
      borderRadius: "0.5vw",
      fontSize: "0.9vw"
    },
    section: {
      padding: "2.4vw 6vw 0 6vw"
    },
    sectionTitle: {
      fontSize: "1.5vw"
    },
    sectionSubTitle: {
      fontSize: "0.9vw",
      margin: "0.3vw 0 1vw 0"
    },
    filterRow: {
      gap: "0.6vw",
      marginBottom: "1.2vw"
    },
    chip: {
      padding: "0.4vw 1vw",
      borderRadius: "1.5vw",
      fontSize: "0.82vw"
    },
    priceSelect: {
      height: "2.1vw",
      padding: "0 0.6vw",
      fontSize: "0.82vw",
      borderRadius: "0.5vw",
      marginLeft: "auto"
    },
    grid: {
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "1.2vw"
    },
    card: {
      padding: "1.2vw",
      borderRadius: "0.8vw"
    },
    cardHeader: {
      gap: "0.6vw"
    },
    cardTitle: {
      fontSize: "1.05vw"
    },
    badge: {
      padding: "0.2vw 0.7vw",
      borderRadius: "1vw",
      fontSize: "0.75vw"
    },
    cardMeta: {
      fontSize: "0.8vw",
      margin: "0.4vw 0 0 0"
    },
    cardText: {
      fontSize: "0.85vw",
      margin: "0.6vw 0 0 0"
    },
    cardFooter: {
      paddingTop: "0.9vw",
      fontSize: "0.85vw"
    },
    emptyText: {
      fontSize: "0.9vw",
      padding: "1vw 0"
    },
    note: {
      margin: "2.4vw 6vw",
      padding: "1vw",
      borderRadius: "0.5vw",
      fontSize: "0.85vw"
    }
  }
};
