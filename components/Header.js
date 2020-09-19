import React from "react";
import { View, StyleSheet } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import ButtonCustom from "./ButtonCustom";

const Header = ({ style }) => {
  return (
    <View style={[styles.header, { ...style }]}>
      <ButtonCustom style={styles.backButton}>
        <AntDesign name="arrowleft" size={28} color="grey" />
      </ButtonCustom>
      <ButtonCustom style={styles.menuButton}>
        <MaterialIcons name="menu" size={30} color="grey" />
      </ButtonCustom>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  backButton: { width: 35, height: 35 },
  menuButton: { width: 35, height: 35 },
});

export default Header;
