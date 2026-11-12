import { Color, Font } from "../Component/Share/Theme";

export const home = {
  mobile: {
    mainWrapper: {
      minHeight: "100vh",
      paddingBottom: "16vw",                 // room for the mobile bottom menu
      backgroundColor: Color.Background,
      fontFamily: Font.Default,
      color: Color.DeepBlack
    },
    hero: {
      padding: "12vw 5vw 22vw 5vw",
      backgroundColor: Color.PrimaryDark,
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: Color.White
    },
    heroEyebrow: {
      display: "inline-block",
      padding: "1vw 3vw",
      borderRadius: "5vw",
      backgroundColor: "rgba(255, 255, 255, 0.18)",
      fontSize: "3.2vw",
      fontWeight: 500,
      marginBottom: "3vw"
    },
    heroTitle: {
      fontSize: "8.5vw",
      fontWeight: "bold" as "bold",
      lineHeight: 1.15,
      margin: 0,
      textShadow: "0 2px 12px rgba(0, 0, 0, 0.35)"
    },
    heroText: {
      fontSize: "3.8vw",
      lineHeight: 1.6,
      opacity: 0.95,
      margin: "3vw 0 0 0",
      textShadow: "0 1px 8px rgba(0, 0, 0, 0.35)"
    },
    searchCard: {
      position: "relative" as "relative",
      margin: "-14vw 5vw 0 5vw",
      padding: "5vw",
      backgroundColor: Color.White,
      borderRadius: "4vw",
      boxShadow: "0 10px 40px rgba(0, 0, 0, 0.12)"
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
      fontSize: "3.2vw",
      fontWeight: 600,
      color: Color.SharpAsh,
      textTransform: "uppercase" as "uppercase",
      letterSpacing: "0.04em",
      marginBottom: "1.5vw"
    },
    input: {
      height: "11.5vw",
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
      height: "12.5vw",
      marginTop: "2vw",
      border: "none",
      borderRadius: "2.4vw",
      background: `linear-gradient(135deg, ${Color.Primary} 0%, ${Color.PrimaryDark} 100%)`,
      color: Color.White,
      fontSize: "4.2vw",
      fontFamily: Font.Default,
      fontWeight: "bold" as "bold",
      cursor: "pointer",
      boxShadow: "0 6px 18px rgba(14, 124, 134, 0.35)"
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
      padding: "8vw 5vw 0 5vw"
    },
    sectionTitle: {
      fontSize: "5.6vw",
      fontWeight: "bold" as "bold",
      margin: 0
    },
    sectionSubTitle: {
      fontSize: "3.4vw",
      color: Color.SharpAsh,
      margin: "1vw 0 4vw 0"
    },
    destinationGrid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "3vw"
    },
    destinationCard: {
      position: "relative" as "relative",
      height: "40vw",
      borderRadius: "3.5vw",
      overflow: "hidden",
      cursor: "pointer",
      border: "3px solid transparent",
      padding: 0,
      textAlign: "left" as "left",
      fontFamily: Font.Default
    },
    destinationCardActive: {
      border: `3px solid ${Color.Accent}`
    },
    destinationImage: {
      position: "absolute" as "absolute",
      inset: 0,
      width: "100%",
      height: "100%"
    },
    destinationOverlay: {
      position: "absolute" as "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column" as "column",
      justifyContent: "flex-end" as "flex-end",
      padding: "3vw",
      background: "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.75) 100%)",
      color: Color.White
    },
    destinationName: {
      fontSize: "4.4vw",
      fontWeight: "bold" as "bold"
    },
    destinationMeta: {
      fontSize: "3vw",
      opacity: 0.9
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
      gap: "4vw"
    },
    card: {
      display: "flex",
      flexDirection: "column" as "column",
      backgroundColor: Color.White,
      borderRadius: "3.5vw",
      overflow: "hidden",
      boxShadow: "0 2px 14px rgba(0, 0, 0, 0.06)"
    },
    cardImageWrapper: {
      position: "relative" as "relative"
    },
    cardImage: {
      width: "100%",
      height: "45vw"
    },
    cardImageBadge: {
      position: "absolute" as "absolute",
      top: "3vw",
      left: "3vw",
      padding: "1vw 2.8vw",
      borderRadius: "4vw",
      backgroundColor: "rgba(255, 255, 255, 0.92)",
      color: Color.PrimaryDark,
      fontSize: "3vw",
      fontWeight: 600
    },
    cardImageRating: {
      position: "absolute" as "absolute",
      top: "3vw",
      right: "3vw",
      padding: "1vw 2.5vw",
      borderRadius: "4vw",
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      color: Color.White,
      fontSize: "3vw",
      fontWeight: 600
    },
    cardBody: {
      display: "flex",
      flexDirection: "column" as "column",
      flex: 1,
      padding: "4vw"
    },
    cardTitle: {
      fontSize: "4.4vw",
      fontWeight: "bold" as "bold",
      margin: 0
    },
    cardMeta: {
      fontSize: "3.2vw",
      color: Color.SharpAsh,
      margin: "1.5vw 0 0 0"
    },
    cardText: {
      fontSize: "3.4vw",
      lineHeight: 1.5,
      color: Color.SharpAsh,
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
      color: Color.PrimaryDark
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
    showMoreRow: {
      display: "flex",
      justifyContent: "center" as "center",
      marginTop: "4vw"
    },
    planBanner: {
      display: "flex",
      flexDirection: "column" as "column",
      gap: "3vw",
      margin: "8vw 5vw",
      padding: "5vw",
      borderRadius: "3.5vw",
      background: `linear-gradient(135deg, ${Color.Primary} 0%, ${Color.PrimaryDark} 100%)`,
      color: Color.White
    },
    planBannerTitle: {
      fontSize: "4.6vw",
      fontWeight: "bold" as "bold",
      margin: 0
    },
    planBannerText: {
      fontSize: "3.4vw",
      opacity: 0.9,
      margin: 0
    },
    planBannerButton: {
      alignSelf: "flex-start" as "flex-start",
      padding: "2.5vw 5vw",
      border: "none",
      borderRadius: "2.4vw",
      backgroundColor: Color.Accent,
      color: Color.DeepBlack,
      fontSize: "3.8vw",
      fontFamily: Font.Default,
      fontWeight: "bold" as "bold",
      cursor: "pointer"
    },
    credit: {
      padding: "8vw 5vw",
      fontSize: "2.8vw",
      color: Color.SharpAsh,
      textAlign: "center" as "center"
    }
  },

  desktop: {
    mainWrapper: {
      paddingBottom: 0
    },
    hero: {
      padding: "5vw 6vw 7.5vw 6vw"
    },
    heroEyebrow: {
      padding: "0.3vw 0.9vw",
      borderRadius: "1.5vw",
      fontSize: "0.85vw",
      marginBottom: "1vw"
    },
    heroTitle: {
      fontSize: "3.2vw",
      maxWidth: "45vw"
    },
    heroText: {
      fontSize: "1.1vw",
      margin: "1vw 0 0 0",
      maxWidth: "40vw"
    },
    searchCard: {
      margin: "-4vw 6vw 0 6vw",
      padding: "1.6vw",
      borderRadius: "1vw"
    },
    searchRow: {
      flexDirection: "row" as "row",
      alignItems: "flex-end" as "flex-end",
      gap: "1vw"
    },
    label: {
      fontSize: "0.75vw",
      marginBottom: "0.4vw"
    },
    input: {
      height: "2.9vw",
      padding: "0 0.8vw",
      fontSize: "0.92vw",
      borderRadius: "0.5vw"
    },
    searchButton: {
      height: "2.9vw",
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
      padding: "3vw 6vw 0 6vw"
    },
    sectionTitle: {
      fontSize: "1.6vw"
    },
    sectionSubTitle: {
      fontSize: "0.9vw",
      margin: "0.3vw 0 1.2vw 0"
    },
    destinationGrid: {
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "1.2vw"
    },
    destinationCard: {
      height: "13vw",
      borderRadius: "1vw"
    },
    destinationOverlay: {
      padding: "1vw"
    },
    destinationName: {
      fontSize: "1.25vw"
    },
    destinationMeta: {
      fontSize: "0.8vw"
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
      gap: "1.4vw"
    },
    card: {
      borderRadius: "1vw"
    },
    cardImage: {
      height: "12vw"
    },
    cardImageBadge: {
      top: "0.8vw",
      left: "0.8vw",
      padding: "0.25vw 0.8vw",
      borderRadius: "1vw",
      fontSize: "0.75vw"
    },
    cardImageRating: {
      top: "0.8vw",
      right: "0.8vw",
      padding: "0.25vw 0.7vw",
      borderRadius: "1vw",
      fontSize: "0.75vw"
    },
    cardBody: {
      padding: "1.1vw"
    },
    cardTitle: {
      fontSize: "1.1vw"
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
      fontSize: "0.88vw"
    },
    emptyText: {
      fontSize: "0.9vw",
      padding: "1vw 0"
    },
    showMoreRow: {
      marginTop: "1.4vw"
    },
    planBanner: {
      flexDirection: "row" as "row",
      alignItems: "center" as "center",
      justifyContent: "space-between" as "space-between",
      gap: "2vw",
      margin: "3vw 6vw",
      padding: "1.8vw 2.2vw",
      borderRadius: "1vw"
    },
    planBannerTitle: {
      fontSize: "1.4vw"
    },
    planBannerText: {
      fontSize: "0.9vw",
      marginTop: "0.3vw"
    },
    planBannerButton: {
      alignSelf: "center" as "center",
      padding: "0.8vw 1.8vw",
      borderRadius: "0.5vw",
      fontSize: "0.95vw",
      whiteSpace: "nowrap" as "nowrap"
    },
    credit: {
      padding: "2.5vw 6vw",
      fontSize: "0.75vw"
    }
  }
};
