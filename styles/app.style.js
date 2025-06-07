import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  loading: {
    bg: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "black",
    },
    text: { color: "white", justifyContent: "center" },
  },
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },
  imageBg: {
    flex: 1,
    backgroundColor: "black",
    //backgroundColor: "yellow",
  },
  webview: {
    flex: 1,
    backgroundColor: "transparent",
  },
});

export default styles;
