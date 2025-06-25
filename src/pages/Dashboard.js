import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator, Modal, TouchableOpacity, Text, ScrollView, Platform, FlatList } from 'react-native';
import Header from '../components/Header';
import MainContent from '../components/MainContent';
import RNPickerSelect from 'react-native-picker-select';
import { useNavigation } from '@react-navigation/native';

const GRADES = [
  { label: '6th', value: '6th' },
  { label: '7th', value: '7th' },
  { label: '8th', value: '8th' },
  { label: '9th', value: '9th' },
  { label: '10th', value: '10th' },
  { label: '11th', value: '11th' },
  { label: '12th', value: '12th' },
];
const EXAMS = [
  { label: 'JEE mains', value: 'JEE mains' },
  { label: 'JEE advance', value: 'JEE advance' },
  { label: 'NEET', value: 'NEET' },
  { label: 'BITSAT', value: 'BITSAT' },
  { label: 'CUET', value: 'CUET' },
  { label: 'KCET', value: 'KCET' },
];

function Dashboard() {
  const navigation = useNavigation();
  const [name, setName] = useState('John Doe');
  const [grade, setGrade] = useState('');
  const [examtype, setExamType] = useState('');
  const [category, setCategory] = useState('');
  const [totalTestsTaken, settotalTestsTaken] = useState(0);
  const [AverageAccuracy, setAverageAccuracy] = useState(0);
  const [WeakTopics, setWeakTopics] = useState([]);
  const [Progress, setProgress] = useState({});
  const [recentActivities, setRecentActivities] = useState([]);
  const [topicsToFocus, setTopicsToFocus] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [showGradePicker, setShowGradePicker] = useState(false);
  const [showExamPicker, setShowExamPicker] = useState(false);

  const handleGradeChange = (value) => {
    setCategory(value);
    setGrade(value);
    setExamType('');
    setShowGradePicker(false);
  };

  const handleExamTypeChange = (value) => {
    setCategory(value);
    setExamType(value);
    setGrade('');
    setShowExamPicker(false);
  };

  useEffect(() => {
    setTimeout(() => {
      settotalTestsTaken(12);
      setAverageAccuracy('85%');
      setProgress({ Math: 80, Science: 90, English: 70 });
      setWeakTopics(2);
      setRecentActivities([
        { title: 'Math Test', score: 85, date: '2024-06-01' },
        { title: 'Science Quiz', score: 90, date: '2024-05-28' },
      ]);
      setTopicsToFocus([
        { title: 'Algebra', progress: 60, accuracy: '60%' },
        { title: 'Photosynthesis', progress: 40, accuracy: '40%' },
      ]);
      setLoading(false);
    }, 1000);
  }, [category]);

  const resources = [
    {
      id: 1,
      title: 'Mathematics Formula Sheet',
      description: 'Comprehensive collection of important formulas',
      type: 'PDF',
      subject: 'Mathematics',
    },
    {
      id: 2,
      title: 'Science Lab Manual',
      description: 'Step-by-step guide for common experiments',
      type: 'PDF',
      subject: 'Science',
    },
    {
      id: 3,
      title: 'History Timeline',
      description: 'Chronological overview of important events',
      type: 'PDF',
      subject: 'History',
    },
    {
      id: 4,
      title: 'Geography Maps',
      description: 'Collection of important geographical maps',
      type: 'PDF',
      subject: 'Geography',
    },
  ];

  const handleGenerateTest = () => {
    if (category) {
      navigation.navigate('TestPreview', { category });
    } else {
      navigation.navigate('TestPreview');
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#5e2f7c" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header />
      {/* Hamburger menu and modal */}
      <View style={styles.hamburgerRow}>
        <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.hamburgerButton}>
          <Text style={styles.hamburgerIcon}>☰</Text>
        </TouchableOpacity>
      </View>
      <MainContent
        totalTestsTaken={totalTestsTaken}
        AverageAccuracy={AverageAccuracy}
        WeakTopics={WeakTopics}
        name={name}
        Progress={Progress}
        recentActivities={recentActivities}
        topicsToFocus={topicsToFocus}
        resources={resources}
        handleGenerateTest={handleGenerateTest}
      />
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Options</Text>
            <Text style={styles.modalLabel}>Grade</Text>
            <View style={styles.pickerWrapper}>
              {Platform.OS === 'ios' ? (
                <>
                  <TouchableOpacity
                    style={styles.customPickerInput}
                    onPress={() => setShowGradePicker(true)}
                  >
                    <Text style={grade ? styles.customPickerText : styles.customPickerPlaceholder}>
                      {grade ? grade : 'Select grade'}
                    </Text>
                  </TouchableOpacity>
                  <Modal
                    visible={showGradePicker}
                    transparent
                    animationType="fade"
                    onRequestClose={() => setShowGradePicker(false)}
                  >
                    <TouchableOpacity style={styles.pickerModalOverlay} onPress={() => setShowGradePicker(false)}>
                      <View style={styles.pickerModalContent}>
                        <FlatList
                          data={GRADES}
                          keyExtractor={item => item.value}
                          renderItem={({ item }) => (
                            <TouchableOpacity
                              style={styles.pickerOption}
                              onPress={() => handleGradeChange(item.value)}
                            >
                              <Text style={styles.pickerOptionText}>{item.label}</Text>
                            </TouchableOpacity>
                          )}
                        />
                      </View>
                    </TouchableOpacity>
                  </Modal>
                </>
              ) : (
                <RNPickerSelect
                  onValueChange={handleGradeChange}
                  value={grade}
                  placeholder={{ label: 'Select grade', value: '' }}
                  items={GRADES}
                  style={pickerSelectStyles}
                  useNativeAndroidPickerStyle={false}
                />
              )}
            </View>
            <Text style={styles.modalLabel}>Competitive Exams</Text>
            <View style={styles.pickerWrapper}>
              {Platform.OS === 'ios' ? (
                <>
                  <TouchableOpacity
                    style={styles.customPickerInput}
                    onPress={() => setShowExamPicker(true)}
                  >
                    <Text style={examtype ? styles.customPickerText : styles.customPickerPlaceholder}>
                      {examtype ? examtype : 'Exams'}
                    </Text>
                  </TouchableOpacity>
                  <Modal
                    visible={showExamPicker}
                    transparent
                    animationType="fade"
                    onRequestClose={() => setShowExamPicker(false)}
                  >
                    <TouchableOpacity style={styles.pickerModalOverlay} onPress={() => setShowExamPicker(false)}>
                      <View style={styles.pickerModalContent}>
                        <FlatList
                          data={EXAMS}
                          keyExtractor={item => item.value}
                          renderItem={({ item }) => (
                            <TouchableOpacity
                              style={styles.pickerOption}
                              onPress={() => handleExamTypeChange(item.value)}
                            >
                              <Text style={styles.pickerOptionText}>{item.label}</Text>
                            </TouchableOpacity>
                          )}
                        />
                      </View>
                    </TouchableOpacity>
                  </Modal>
                </>
              ) : (
                <RNPickerSelect
                  onValueChange={handleExamTypeChange}
                  value={examtype}
                  placeholder={{ label: 'Exams', value: '' }}
                  items={EXAMS}
                  style={pickerSelectStyles}
                  useNativeAndroidPickerStyle={false}
                />
              )}
            </View>
            <TouchableOpacity style={styles.modalButton}>
              <Text style={styles.modalButtonText}>Help Centre</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton}>
              <Text style={styles.modalButtonText}>Log Out</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    minHeight: '100%',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  hamburgerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    marginLeft: 16,
    marginBottom: -16,
    zIndex: 10,
  },
  hamburgerButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: 'transparent',
  },
  hamburgerIcon: {
    fontSize: 32,
    color: '#2f2f68',
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 24,
    width: '80%',
    alignItems: 'center',
    elevation: 8,
    maxHeight: '80%',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2f2f68',
    marginBottom: 16,
  },
  modalLabel: {
    fontSize: 16,
    color: '#2f2f68',
    fontWeight: '600',
    alignSelf: 'flex-start',
    marginTop: 12,
  },
  pickerWrapper: {
    width: '100%',
    marginBottom: 8,
  },
  customPickerInput: {
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#f3f4f6',
    marginBottom: 8,
  },
  customPickerText: {
    color: '#2f2f68',
    fontSize: 16,
  },
  customPickerPlaceholder: {
    color: '#aaa',
    fontSize: 16,
  },
  pickerModalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pickerModalContent: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    width: '80%',
    maxHeight: 350,
  },
  pickerOption: {
    paddingVertical: 12,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  pickerOptionText: {
    fontSize: 16,
    color: '#2f2f68',
  },
  modalButton: {
    width: '100%',
    backgroundColor: '#001e32',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 16,
  },
  modalButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  closeButton: {
    marginTop: 20,
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#f7ecff',
    width: '100%',
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#2f2f68',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    color: '#2f2f68',
    backgroundColor: '#f3f4f6',
    marginBottom: 8,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    color: '#2f2f68',
    backgroundColor: '#f3f4f6',
    marginBottom: 8,
  },
  placeholder: {
    color: '#aaa',
  },
});

export default Dashboard;