import React from "react";
import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";

export default function WelcomeScreen() {
  return (
    <ImageBackground style={styles.background} source={require("../assets/background.jpg")}>
      <Image style={styles.logo} source={require('../assets/logo-red.png')}></Image>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  logo: {
    width:100,
    height:100,
    position:'absolute',
    top:70
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
});
