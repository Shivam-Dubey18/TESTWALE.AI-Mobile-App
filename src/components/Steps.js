import React from "react";
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  FlatList,
} from "react-native";

const steps = [
  {
    title: "Create Account",
    description: "Sign up with your Email or Login to join",
    step: "Step 1",
  },
  {
    title: "Select your Grade",
    description:
      "Choose your Current grade level to get access to Relevant content",
    step: "Step 2",
  },
  {
    title: "Generate Tests",
    description:
      "Create Custom tests based on Subjects and Topics you need",
    step: "Step 3",
  },
  {
    title: "Track and Improve",
    description:
      "Review your results and focus on improving weak areas",
    step: "Step 4",
  },
];

const Steps = () => {
  const { width } = useWindowDimensions();
  const isTablet = width >= 768;

  const renderItem = ({ item, index }) => (
    <View
      style={[
        styles.card,
        index === 0 && { marginTop: 24 },
      ]}
    >
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{item.step}</Text>
      </View>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardDescription}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.wrapper}>
      <Text style={styles.heading}>Simple Steps to{"\n"}get Started</Text>

      <FlatList
        data={steps}
        keyExtractor={(item) => item.step}
        renderItem={({ item, index }) => renderItem({ item, index })}
        numColumns={isTablet ? 2 : 1}
        contentContainerStyle={styles.grid}
        columnWrapperStyle={isTablet ? { justifyContent: "space-between" } : null}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2f2f68",
    textAlign: "center",
    marginBottom: 20,
  },
  grid: {
    paddingBottom: 16,
  },
  card: {
    flex: 1,
  backgroundColor: "#f0ddff91",
  borderRadius: 16,
  padding: 40,
  paddingTop: 32, // <-- Add this to make space for badge
  marginBottom: 20,
  marginHorizontal: 8,
  minHeight: 180,
  justifyContent: "flex-start",
  elevation: 2,
  position: "relative", // important for absolute children like badge
  },
  badge: {
    position: "absolute",
    alignSelf: "center",
    top: -10,
    backgroundColor: "#5e2f7b",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  badgeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  cardTitle: {
    alignSelf: "center",
    marginTop: 24,
    fontSize: 18,
    fontWeight: "600",
    color: "#001e32",
    marginBottom: 8,
  },
  cardDescription: {
    alignSelf: "center",
    fontSize: 14,
    color: "#2f2f68",
  },
});

export default Steps;
