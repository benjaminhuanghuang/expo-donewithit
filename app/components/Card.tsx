import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import colors from "../config/colors";
//
import AppText from "./AppText/AppText";

export default function Card({ title, subTitle, image }) {
  return (
    <View style={styles.card}>
      <Image source={require(image)} />
      <View style={styles.detailsContainer}>
        <AppText>{title}</AppText>
        <AppText>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow:"hidden"
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  subTitle:{
    color: colors.secondary,
    fontWeight: "bold"
  },
  title:{
    marginBottom: 7
  }
});
