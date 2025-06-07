import { View } from "react-native";
import { WebView } from "react-native-webview";
import { StatusBar } from "expo-status-bar";
import { useKeepAwake } from "expo-keep-awake";
import appStyles from "./styles/app.style";

const App = () => {
  useKeepAwake();
  return (
    <View style={appStyles.container}>
      <WebView
        source={require("./bundled/index.html")}
        originWhitelist={["*"]}
        allowFileAccess={true}
        style={appStyles.webview}
        allowingReadAccessToURL="*"
      />
      <StatusBar style="light" />
    </View>
  );
};

export default App;
