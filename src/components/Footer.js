import React from "react";
import {
  View,
  Text,
  Linking,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // for Facebook, Instagram, Twitter

const Footer = () => {
  const { width } = useWindowDimensions();
  const isTablet = width >= 768;

  return (
    <View style={styles.container}>
      {/* Brand + Description */}
      <View style={styles.topSection}>
        <Text style={styles.logo}>TESTWALE.AI</Text>
        <Text style={styles.description}>
          AI-powered exam preparation platform for students {'\n'} from Grade 1 to 12.
        </Text>
        <View style={styles.socialIcons}>
          <TouchableOpacity
            onPress={() => Linking.openURL("https://facebook.com")}
            activeOpacity={0.7}
          >
            <FontAwesome name="facebook" size={24} color="#64748B" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL("https://instagram.com")}
            activeOpacity={0.7}
          >
            <FontAwesome name="instagram" size={24} color="#64748B" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL("https://twitter.com")}
            activeOpacity={0.7}
          >
            <FontAwesome name="twitter" size={24} color="#64748B" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Links */}
      <View style={[styles.linkContainer, isTablet && styles.linkContainerTablet]}>
        <TouchableOpacity
         activeOpacity={0.7}
         onPress={() => Linking.openURL("https://testwale.ai/AboutUs")}
        >
          <Text style={styles.link}>About Us</Text>
        </TouchableOpacity>
        <TouchableOpacity
         activeOpacity={0.7}
         onPress={() => Linking.openURL("https://testwale.ai/legal")}
        >
          <Text style={styles.link}>Legal</Text>
        </TouchableOpacity>
        <TouchableOpacity
         activeOpacity={0.7}
         onPress={() => Linking.openURL("https://testwale.ai/Support")}
        >
          <Text style={styles.link}>Support</Text>
        </TouchableOpacity>
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Copyright */}
      <Text style={styles.copyright}>© 2025 TESTWALE.AI. All rights reserved.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingVertical: 24,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  topSection: {
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#15609e",
    marginBottom: 6,
  },
  description: {
    fontSize: 13,
    color: "#64748B",
    textAlign: "center",
    marginBottom: 12,
  },
  socialIcons: {
    flexDirection: "row",
    gap: 20,
    marginBottom: 8,
  },
  linkContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 32,
    marginBottom: 8,
  },
  linkContainerTablet: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 10,
    gap: 90,
  },
  link: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1E293B",
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  divider: {
    height: 0.5,
    backgroundColor: "#F1F5F9",
    width: "100%",
    marginVertical: 16,
  },
  copyright: {
    fontSize: 11,
    color: "#94A3B8",
    textAlign: "center",
    marginTop: 4,
  },
});

export default Footer;
