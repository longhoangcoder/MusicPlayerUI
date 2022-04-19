import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MusicPlayer from "./component/MusicPlayer";
export default function App() {
  return (
    <View style = {styles.container}>
      <StatusBar style="light"/>
      <MusicPlayer />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
});
