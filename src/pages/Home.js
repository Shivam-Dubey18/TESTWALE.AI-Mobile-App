import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";

import Everything from "../components/Everything";
import Testimonials from "../components/Testimonials";
import LaunchPage from "../components/LaunchPage";
import Steps from "../components/Steps";
import Header from "../components/Header";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <View style={styles.pageWrapper}>
      <ScrollView contentContainerStyle={styles.container}>
        <Header />
        <LaunchPage />
        <Everything />
        <Steps />
        <Testimonials />
        <Footer />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  pageWrapper: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  container: {
    maxWidth: 1440,
    alignSelf: "center",
    width: "100%",
    backgroundColor: "#ffffff",
    paddingBottom: 24, // for spacing at bottom
  },
});

export default LandingPage;
