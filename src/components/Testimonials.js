import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
} from "react-native";

const testimonials = [
  { id: "1" },
  { id: "2" },
  { id: "3" },
];

const Testimonials = () => {
  const screenWidth = Dimensions.get("window").width;
  const isTablet = screenWidth >= 768;

  const renderItem = () => (
    <View style={styles.card}>
      <View style={styles.avatarPlaceholder} />
    </View>
  );

  return (
    <View style={styles.wrapper}>
      <Text style={styles.heading}>Words from our Students</Text>

      <FlatList
        data={testimonials}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={isTablet ? 3 : 1}
        contentContainerStyle={styles.grid}
        columnWrapperStyle={isTablet ? styles.columnWrapper : null}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 24,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2f2f68",
    textAlign: "center",
    marginBottom: 24,
  },
  grid: {
    alignItems: "center",
    justifyContent: "center",
  },
  columnWrapper: {
    justifyContent: "space-around",
  },
  card: {
    width: 260,
    minHeight: 343,
    borderWidth: 1,
    borderColor: "#5e2f7c",
    borderRadius: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 24,
    marginHorizontal: 8,
    position: "relative",
    paddingTop: 60,
  },
  avatarPlaceholder: {
    position: "absolute",
    top: 34,
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#d9d9d9",
    alignSelf: "center",
  },
});

export default Testimonials;
