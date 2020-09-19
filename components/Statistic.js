import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Statistic = ({ style }) => {
  return (
    <View style={[styles.statistic, { ...style }]}>
      <View style={styles.item}>
        <Text style={styles.number}>123</Text>
        <Text style={styles.label}>Photos</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.number}>456</Text>
        <Text style={styles.label}>Followers</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.number}>789</Text>
        <Text style={styles.label}>Following</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statistic: {
    flex: 2,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  number: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
  },
  label: {
    textAlign: "center",
    fontSize: 16,
    color: "grey",
  },
});

export default Statistic;
