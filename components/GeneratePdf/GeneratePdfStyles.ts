import { Font, StyleSheet } from "@react-pdf/renderer";

Font.register({
  family: "Lato",
  fontStyle: "normal",
  fontWeight: "normal",
  fonts: [
    {
      src: "/fonts/Lato-Regular.ttf",
    },
    {
      src: "/fonts/Lato-Bold.ttf",
      fontWeight: "bold",
    },
    {
      src: "/fonts/Lato-Light.ttf",
      fontWeight: "lighter",
    },
  ],
});

export const styles = StyleSheet.create({
  page: {
    fontSize: "13pt",
    fontFamily: "Lato",
  },
  pageBackground: {
    position: "absolute",
    width: "100%",
    minHeight: "100vh",
  },
  section: {
    position: "relative",
  },
  section1: {
    marginTop: 200,
    marginLeft: 50,
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
  },
  section2: {
    marginTop: 30,
    marginLeft: 50,
  },
  // global styles
  header: {
    fontWeight: "bold",
  },
});
