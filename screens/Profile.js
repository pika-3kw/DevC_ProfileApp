import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import ListPhoto from "../components/ListPhoto";
import Statistic from "../components/Statistic";
import UserInfo from "../components/UserInfo";
import Header from "../components/Header";

const Profile = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header style={{ flex: 0.5 }} />
      <UserInfo style={{ flex: 2 }} />
      <Statistic style={{ flex: 1 }} />
      <ListPhoto style={{ flex: 6 }} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Profile;
