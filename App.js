import { useState, useEffect } from "react";
import {
  View,
  ImageBackground,
  Text,
  Dimensions,
  Platform,
} from "react-native";
import { useAssets } from "expo-asset";
import Constants from "expo-constants";
import { readAsStringAsync } from "expo-file-system";
import { WebView } from "react-native-webview";
import { StatusBar } from "expo-status-bar";
import * as SystemUI from "expo-system-ui";
import * as NavigationBar from "expo-navigation-bar";
import { useKeepAwake } from "expo-keep-awake";
import appStyles from "./styles/app.style";
const { height } = Dimensions.get("window");
const totalHeight = Constants.statusBarHeight + height;

const App = () => {
  useKeepAwake();
  const [index] = useAssets(require("./assets/index.html"));
  const [html, setHtml] = useState("");

  useEffect(() => {
    SystemUI.setBackgroundColorAsync("black");
    if (Platform.OS === "android") {
      NavigationBar.setBackgroundColorAsync("black");
      NavigationBar.setVisibilityAsync("hidden");
      NavigationBar.setBehaviorAsync("overlay-swipe");
    }
  }, []);

  useEffect(() => {
    if (index) {
      readAsStringAsync(index[0].localUri).then((data) => {
        setHtml(data);
      });
    }
  }, [index]);

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
      imageStyle={{ height: totalHeight, width: "250%" }}
      resizeMode="stretch"
    >
      <WebView
        allowingReadAccessToURL="*"
        source={{ html }}
        originWhitelist={["*"]}
        allowFileAccess={true}
        style={appStyles.webview}
      />
      <StatusBar style="light" />
    </ImageBackground>
  );
};

export default App;
