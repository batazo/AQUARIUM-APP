import React from "react";
import { View, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";
import { StatusBar } from "expo-status-bar";
import { useKeepAwake } from "expo-keep-awake";

const App = () => {
   useKeepAwake();
   return (
      <View style={styles.container}>
         <WebView source={require("./bundled/index.html")} originWhitelist={["*"]} allowFileAccess={true} style={styles.webview} allowingReadAccessToURL="*" />
         <StatusBar style="light" />
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      overflow: "hidden",
   },
   webview: {
      flex: 1,
      overflow: "hidden",
   },
});

export default App;
