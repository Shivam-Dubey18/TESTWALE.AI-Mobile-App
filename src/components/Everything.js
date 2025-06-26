import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
} from "react-native";

const features = [
  {
    icon: "https://c.animaapp.com/mb0st1hlJTP0DU/img/siicon-1.png",
    title: "AI Test Generator",
    description:
      "AI-powered exam generator tailored for students from Grade 1 to 12. Practice tests customized to your learning needs and track your progress.",
  },
  {
    icon: "https://c.animaapp.com/mb0st1hlJTP0DU/img/progress-icon-1.png",
    title: "Track Progress",
    description:
      "Monitor your learning journey with real-time progress tracking and personalized insights to improve your performance.",
  },
  {
    icon: "https://c.animaapp.com/mb0st1hlJTP0DU/img/bookicon-1.png",
    title: "Study Material",
    description:
      "Access curated study material and AI-recommended resources to strengthen your understanding and preparation.",
  },
];

const Everything = () => {
  const { width: screenWidth } = useWindowDimensions();
  const isTablet = screenWidth >= 768;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Everything you need to Excel</Text>
      <Text style={styles.subtext}>
        Our AI-powered tools adapt to your learning style and help you master any subject.
      </Text>

      <View
        style={[
          styles.cardContainer,
          { flexDirection: isTablet ? "row" : "column" },
        ]}
      >
        {features.map((feature, index) => (
          <View
            key={index}
            style={[
              styles.card,
              {
                width: isTablet ? 250 : "90%",
                marginBottom: isTablet ? 0 : 32,
                marginHorizontal: isTablet ? 12 : 0,
              },
            ]}
          >
            <Image
              source={{ uri: feature.icon }}
              style={styles.icon}
              resizeMode="contain"
            />
            <Text style={styles.cardTitle}>{feature.title}</Text>
            <Text style={styles.cardDescription}>{feature.description}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 32,
    paddingHorizontal: 16,
    backgroundColor: "#f0ddff91",
    alignItems: "center",
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2f2f68",
    textAlign: "center",
    marginBottom: 12,
  },
  subtext: {
    fontSize: 16,
    color: "#2f2f68",
    textAlign: "center",
    marginBottom: 24,
    maxWidth: 600,
  },
  cardContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
  card: {
    alignItems: "center",
    marginBottom: 32,
  },
  icon: {
    width: 80,
    height: 80,
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#001e32",
    marginBottom: 8,
    textAlign: "center",
  },
  cardDescription: {
    fontSize: 14,
    color: "#2f2f68",
    textAlign: "center",
  },
});

export default Everything;
