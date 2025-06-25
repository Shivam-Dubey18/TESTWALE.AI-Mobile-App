import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const MainContent = ({
  name,
  totalTestsTaken,
  AverageAccuracy,
  WeakTopics,
  Progress,
  recentActivities = [],
  topicsToFocus = [],
  resources = [],
  handleGenerateTest,
}) => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {/* Greeting and Profile */}
      <View style={styles.greetingCard}>
        <View>
          <Text style={styles.greetingTitle}>Hi, {name}</Text>
          <Text style={styles.greetingSubtitle}>
            Generate personalized tests and improve {'\n'}your weak points
          </Text>
        </View>
        <View style={styles.profilePic} />
      </View>

      {/* Stats Cards */}
      <View style={styles.statsRow}>
        {[{ title: 'Total Tests Taken', value: totalTestsTaken || 0 },
          { title: 'Average Accuracy', value: AverageAccuracy || '0%' },
          { title: 'Weak Topics', value: WeakTopics || 0 }].map((item, index) => (
          <View key={index} style={styles.statsCard}>
            <Text style={styles.statsCardTitle}>{item.title}</Text>
            <Text style={styles.statsCardValue}>{item.value}</Text>
          </View>
        ))}
      </View>

      {/* AI Test Generator */}
      <View style={styles.aiTestCard}>
        <Text style={styles.aiTestTitle}>AI Test Generator</Text>
        <TouchableOpacity style={styles.generateButton} onPress={handleGenerateTest}>
          <Text style={styles.generateButtonText}>Generate Test</Text>
        </TouchableOpacity>
      </View>

      {/* Recent Activities & Progress */}
      <View style={styles.rowWrap}>
        <View style={styles.flexCard}>
          <Text style={styles.sectionTitle}>Recent Activities</Text>
          {recentActivities.length === 0 ? (
            <Text style={styles.emptyText}>No recent activities</Text>
          ) : recentActivities.map((activity, index) => (
            <View key={index} style={styles.activityCard}>
              <Text style={styles.activityTitle}>{activity.title}</Text>
              <View style={styles.activityRow}>
                <Text style={styles.activityScore}>Score - {activity.score}</Text>
                <Text style={styles.activityDate}>{activity.date}</Text>
              </View>
            </View>
          ))}
        </View>
        <View style={styles.flexCard}>
          <Text style={styles.sectionTitle}>Your Progress</Text>
          {Progress && typeof Progress === 'object' && Object.keys(Progress).length > 0 ? (
            Object.keys(Progress).map((topic, index) => (
              <View key={index} style={styles.progressItem}>
                <Text style={styles.progressTopic}>{topic}</Text>
                <View style={styles.progressBarBg}>
                  <View style={[styles.progressBarFill, { width: `${Progress[topic]}%` }]} />
                </View>
                <Text style={styles.progressPercent}>{Progress[topic]}% Accuracy</Text>
              </View>
            ))
          ) : (
            <Text style={styles.emptyText}>No progress data</Text>
          )}
        </View>
      </View>

      {/* Topics to Focus on */}
      <View style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>Topics to Focus on</Text>
        {topicsToFocus.length === 0 ? (
          <Text style={styles.emptyText}>No topics to focus on</Text>
        ) : topicsToFocus.map((topic, index) => (
          <View key={index} style={styles.topicCard}>
            <Text style={styles.topicTitle}>{topic.title}</Text>
            <View style={styles.progressBarBg}>
              <View style={[styles.progressBarFill, { width: `${topic.progress}%` }]} />
            </View>
            <Text style={styles.progressPercent}>{topic.accuracy} Accuracy</Text>
          </View>
        ))}
      </View>

      {/* Resources */}
      <View style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>Resources</Text>
        {resources.length === 0 ? (
          <Text style={styles.emptyText}>No resources</Text>
        ) : resources.map((resource) => (
          <View key={resource.id} style={styles.resourceCard}>
            <Text style={styles.resourceText}>{resource.description}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f8ff',
  },
  contentContainer: {
    padding: 12,
    paddingBottom: 32,
  },
  greetingCard: {
    backgroundColor: '#f7ecff',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 18,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
  },
  greetingTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2f2f68',
    marginBottom: 4,
  },
  greetingSubtitle: {
    fontSize: 14,
    color: '#2f2f68',
  },
  profilePic: {
    width: 50,
    height: 50,
    backgroundColor: '#D9D9D9',
    borderRadius: 30,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
    gap: 8,
  },
  statsCard: {
    flex: 1,
    backgroundColor: '#5e2f7c',
    borderRadius: 10,
    padding: 12,
    marginHorizontal: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statsCardTitle: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
    marginBottom: 2,
    textAlign: 'center',
  },
  statsCardValue: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
  },
  aiTestCard: {
    backgroundColor: '#f7ecff',
    borderRadius: 10,
    padding: 14,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  aiTestTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2f2f68',
  },
  generateButton: {
    backgroundColor: '#001e32',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 18,
  },
  generateButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  rowWrap: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 12,
  },
  flexCard: {
    flex: 1,
    backgroundColor: '#f7ecff',
    borderRadius: 10,
    padding: 14,
    marginHorizontal: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2f2f68',
    marginBottom: 8,
    textAlign: 'center',
  },
  emptyText: {
    color: '#aaa',
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 8,
  },
  activityCard: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    marginBottom: 8,
  },
  activityTitle: {
    fontWeight: '600',
    color: '#2f2f68',
    fontSize: 14,
    marginBottom: 2,
  },
  activityRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  activityScore: {
    backgroundColor: '#05ff6f82',
    color: '#2f2f68',
    fontSize: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },
  activityDate: {
    color: '#2f2f68',
    fontSize: 12,
  },
  progressItem: {
    marginBottom: 10,
  },
  progressTopic: {
    fontWeight: '600',
    color: '#2f2f68',
    fontSize: 14,
    marginBottom: 2,
  },
  progressBarBg: {
    width: '100%',
    backgroundColor: '#d9d9d9',
    borderRadius: 8,
    height: 8,
    marginBottom: 2,
    overflow: 'hidden',
  },
  progressBarFill: {
    backgroundColor: '#5e2f7c',
    height: 8,
    borderRadius: 8,
  },
  progressPercent: {
    color: '#2f2f68',
    fontSize: 12,
    textAlign: 'right',
  },
  sectionCard: {
    backgroundColor: '#f7ecff',
    borderRadius: 10,
    padding: 14,
    marginBottom: 12,
  },
  topicCard: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    marginBottom: 8,
  },
  topicTitle: {
    fontWeight: '600',
    color: '#2f2f68',
    fontSize: 14,
    marginBottom: 2,
  },
  resourceCard: {
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#2f2f68',
    padding: 10,
    marginBottom: 8,
  },
  resourceText: {
    color: '#444',
    fontSize: 14,
  },
});

export default MainContent;