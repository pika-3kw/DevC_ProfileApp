import React from "react";
import { View, StyleSheet, Image } from "react-native";

import MasonryList from "react-native-masonry-list";

const photos = [
  {
    uri:
      "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
  },
  {
    uri:
      "https://images.unsplash.com/photo-1555445091-5a8b655e8a4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
  },
  {
    uri:
      "https://www.pandasecurity.com/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg",
  },
  {
    uri:
      "https://images.ctfassets.net/hrltx12pl8hq/5596z2BCR9KmT1KeRBrOQa/4070fd4e2f1a13f71c2c46afeb18e41c/shutterstock_451077043-hero1.jpg?fit=fill&w=800&h=400",
  },
  {
    uri:
      "https://www.pandasecurity.com/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg",
  },
  {
    uri:
      "https://images.pexels.com/photos/744667/pexels-photo-744667.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
];

const ListPhoto = ({ style }) => {
  return (
    <View style={[styles.listPhoto, { ...style }]}>
      <MasonryList images={photos} />
    </View>
  );
};

const styles = StyleSheet.create({
  listPhoto: {
    flex: 5,
    paddingHorizontal: 20,
  },
  image: {
    width: "50%",
    height: 200,
  },
});

export default ListPhoto;
