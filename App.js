import React from "react";
import { StyleSheet, View } from "react-native";

import Profile from "./screens/Profile";

export default function App() {
  return (
    <View style={styles.container}>
      <Profile />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
});
