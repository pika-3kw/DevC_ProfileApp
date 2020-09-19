import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

import ButtonCustom from "./ButtonCustom";

const sourceImg =
  "https://i.pinimg.com/236x/b4/a3/5b/b4a35b768e6ad75b184f2e104d9eb650.jpg";

const UserInfo = ({ style }) => {
  return (
    <View style={[styles.userInfo, { ...style }]}>
      <View style={styles.left}>
        <Image
          style={styles.avatar}
          source={{
            uri: sourceImg,
          }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.right}>
        <View style={styles.info}>
          <Text style={styles.name}>Giang Nam</Text>
          <Text style={styles.job}>Student</Text>
        </View>
        <View style={styles.actions}>
          <ButtonCustom style={styles.folowButton}>Follow</ButtonCustom>
          <ButtonCustom style={styles.sendButton}>
            <MaterialIcons name="send" size={24} color="white" />
          </ButtonCustom>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  userInfo: {
    flex: 3,
    backgroundColor: "white",
    paddingHorizontal: 20,
    flexDirection: "row",
  },

  left: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  right: { flex: 3, justifyContent: "space-evenly" },
  avatar: {
    flex: 1,
    width: 100,
    height: 100,
    borderRadius: 999,
  },
  folowButton: {
    backgroundColor: "#3B73FF",
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: "#56D8FF",
    width: 70,
    marginLeft: 10,
  },
  info: {},
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  job: {
    fontSize: 18,
    color: "grey",
  },
  actions: {
    flexDirection: "row",
  },
});

export default UserInfo;
