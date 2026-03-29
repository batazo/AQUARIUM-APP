import { useState, useEffect } from "react";
import { View, ImageBackground, Text, Platform } from "react-native";
import { Asset } from "expo-asset";
import { File } from "expo-file-system";
import { WebView } from "react-native-webview";
import { StatusBar } from "expo-status-bar";
import * as SystemUI from "expo-system-ui";
import * as NavigationBar from "expo-navigation-bar";
import { useKeepAwake } from "expo-keep-awake";
import appStyles from "./styles/app.style";

async function loadHtmlAsset(requireRef) {
  const [asset] = await Asset.loadAsync(requireRef);

  const file = new File(asset.localUri);
  return await file.text();
}

const App = () => {
  useKeepAwake();
  const [html, setHtml] = useState("");

  useEffect(() => {
    SystemUI.setBackgroundColorAsync("black");
    if (Platform.OS === "android") {
      NavigationBar.setVisibilityAsync("hidden");
    }
    loadHtmlAsset(require("./assets/index.html")).then(setHtml);
  }, []);

  if (!html) {
    return (
      <View style={appStyles.loading.bg}>
        <Text style={appStyles.loading.text}>LOADING...</Text>
      </View>
    );
  }

  return (
    <ImageBackground
      source={require("./assets/aq_bg.jpg")}
      style={appStyles.imageBg}
      imageStyle={{ marginTop: 11, height: "99%", width: "310%" }}
      resizeMode="stretch"
    >
      <WebView
        allowingReadAccessToURL="*"
        source={{ html }}
        originWhitelist={["*"]}
        allowFileAccess={true}
        style={appStyles.webview}
      />
      <StatusBar style="inverted" />
    </ImageBackground>
  );
};

export default App;
