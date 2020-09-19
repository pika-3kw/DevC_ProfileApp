import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const ButtonCustom = ({ handleClick, style, children }) => {
  return (
    <TouchableOpacity
      onPress={handleClick}
      style={[styles.button, { ...style }]}
    >
      <Text style={styles.label}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
    width: 100,
  },
  label: {
    color: "white",
    fontSize: 18,
  },
});

export default ButtonCustom;
