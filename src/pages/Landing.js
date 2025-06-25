import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Landing() {
  const navigation = useNavigation();
  const windowWidth = Dimensions.get('window').width;

  return (
    <View style={{ flex: 1, backgroundColor: '#F4F8FB' }}>
      <Text style={styles.logo}>TESTWALE.AI</Text>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <Text style={styles.mainTitle}>
          Start Learning with our
        </Text>

        <View style={styles.sectionsContainer}>
          {/* AI Test Generator Section */}
          <View style={styles.section}>
            <View style={styles.imageContainer}>
              <View style={styles.circleBackground}>
                <Image
                  source={require('../assets/exam.png')}
                  style={styles.icon}
                  resizeMode="contain"
                />
              </View>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.sectionTitle}>
                AI Test Generator
              </Text>
              <Text style={styles.sectionText}>
                Find the teachers that genuinely care for your kid's future.
                Take personalized doubt sessions, detailed report discussions,
                and live data tracking of your ward's academic journey.
              </Text>
            </View>
          </View>

          {/* Resources Section */}
          <View style={[styles.section, styles.reverseSection]}>
            <View style={styles.textContainer}>
              <Text style={styles.sectionTitle}>
                Our Extensive Resources
              </Text>
              <Text style={styles.sectionText}>
                Access tailored resources to guide your child's academic journey
                with support from expert mentors and AI-driven tools.
              </Text>
            </View>
            <View style={styles.imageContainer}>
              <View style={styles.circleBackground}>
                <Image
                  source={require('../assets/book.png')}
                  style={styles.icon}
                  resizeMode="contain"
                />
              </View>
            </View>
          </View>

          {/* Competitive Exams Section */}
          <View style={styles.section}>
            <View style={styles.imageContainer}>
              <View style={styles.circleBackground}>
                <Image
                  source={require('../assets/res.png')}
                  style={styles.icon}
                  resizeMode="contain"
                />
              </View>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.sectionTitle}>
                Competitive Exams
              </Text>
              <Text style={styles.sectionText}>
                Prepare your child for competitive exams with mentorship,
                detailed feedback, and consistent support to build strong
                academic foundations.
              </Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>GET STARTED</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    fontWeight: 'bold',
    color: '#15609e',
    fontSize: 32,
    position: 'absolute',
    top: 60,
    left: 20,
    zIndex: 2,
  },
  container: {
    flex: 1,
    backgroundColor: '#F4F8FB',
  },
  contentContainer: {
    padding: 16,
    paddingBottom: 40,
    flexGrow: 1,
    paddingTop: 80,
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2F2F68',
    textAlign: 'center',
    marginBottom: 40,
    top: 35,
    lineHeight: 34,
  },
  sectionsContainer: {
    marginBottom: 40,
  },
  section: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 40,
  },
  reverseSection: {
    flexDirection: 'column-reverse',
  },
  imageContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleBackground: {
    width: 220,
    height: 220,
    backgroundColor: '#F7ECFF',
    borderRadius: 110,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#5E2F7C',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  icon: {
    width: 120,
    height: 120,
  },
  textContainer: {
    width: '100%',
    maxWidth: 600,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    color: '#404040',
    fontWeight: '600',
    marginBottom: 8,
    textAlign: 'center',
  },
  sectionText: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#001E32',
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 8,
    alignSelf: 'center',
    marginBottom: 32,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
});

// Add this to handle larger screens (tablets, etc.)
const { width } = Dimensions.get('window');
if (width >= 768) {
  Object.assign(styles, {
    mainTitle: {
      ...styles.mainTitle,
      fontSize: 56,
      lineHeight: 66,
    },
    section: {
      ...styles.section,
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: 48,
    },
    reverseSection: {
      ...styles.section,
      flexDirection: 'row-reverse',
    },
    circleBackground: {
      ...styles.circleBackground,
      width: 380,
      height: 380,
      borderRadius: 190,
    },
    icon: {
      ...styles.icon,
      width: 200,
      height: 200,
    },
    sectionTitle: {
      ...styles.sectionTitle,
      fontSize: 40,
      textAlign: 'left',
    },
    sectionText: {
      ...styles.sectionText,
      fontSize: 18,
      textAlign: 'left',
    },
    textContainer: {
      ...styles.textContainer,
      alignItems: 'flex-start',
    },
  });
}