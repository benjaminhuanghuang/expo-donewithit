import React from "react";
import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";
import colors from "../config/colors.js";
//
import AppButton from "../components/AppButton";
export default function WelcomeScreen() {
  return (
    <ImageBackground blurRadius={10} style={styles.background} source={require("../assets/background.jpg")}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")}></Image>
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="Login" onPress={()=>{}}   />
        <AppButton title="Register" color="secondary" onPress={()=>{}}/>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 100,
    height: 100,
  },
  tagline:{
    fontSize:25,
    fontWeight: "600",
    paddingVertical:20
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.Primary,
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.secondary,
  },
});
