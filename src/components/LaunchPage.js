import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const LaunchPage = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>
        Learn Smarter with{"\n"}
        <Text style={styles.subHeading}>TESTWALE.AI</Text>
      </Text>

      <Text style={styles.description}>
        AI-powered exam generator tailored for students from Grade 1 to 12.
        Practice tests customized to your learning needs and track your
        progress.
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => navigation.navigate("GetStarted")}
        >
          <Text style={styles.primaryButtonText}>Start Learning Today</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.secondaryButtonText}>Competitive Exams</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/image-5.png")}
          style={styles.leftImage}
          resizeMode="contain"
        />

        <Image
          source={require("../assets/image-6.png")}
          style={styles.rightImage}
          resizeMode="contain"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2f2f68",
    textAlign: "center",
    marginTop: 40,
  },
  subHeading: {
    fontSize: 36,
    color: "#15609e",
    fontWeight: "900",
    marginTop: 8,
  },
  description: {
    fontSize: 16,
    color: "#2f2f68",
    textAlign: "center",
    marginTop: 24,
    paddingHorizontal: 16,
  },
  buttonContainer: {
    marginTop: 48,
    flexDirection: "column",
    alignItems: "center",
    gap: 16,
  },
  primaryButton: {
    backgroundColor: "#5e2f7c",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 999,
    marginBottom: 16,
  },
  primaryButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: "#2f2f68",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 999,
  },
  secondaryButtonText: {
    color: "#001e32",
    fontSize: 18,
    fontWeight: "600",
  },
  imageContainer: {
    marginTop: 40,
    width: "100%",
    alignItems: "center",
  },
  leftImage: {
    width: "90%",
    height: 200,
  },
  rightImage: {
    width: "90%",
    height: 200,
    transform: [{ rotate: "28deg" }],
    marginTop: 20,
  },
});

export default LaunchPage;
