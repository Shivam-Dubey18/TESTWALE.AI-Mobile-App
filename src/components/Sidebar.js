import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import ChevronBottomNormal from '../icons/ChevronBottomNormal';

const Sidebar = ({ grade, examtype, handleGradeChange, handleExamTypeChange }) => {
  return (
    <View style={styles.sidebar}>
      {/* Content with padding */}
      <View style={styles.content}>
        <Text style={styles.heading}>GRADE</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={grade}
            style={styles.picker}
            onValueChange={handleGradeChange}
            dropdownIconColor="#2f2f68"
          >
            <Picker.Item label="Select grade" value="" />
            <Picker.Item label="6th" value="6th" />
            <Picker.Item label="7th" value="7th" />
            <Picker.Item label="8th" value="8th" />
            <Picker.Item label="9th" value="9th" />
            <Picker.Item label="10th" value="10th" />
            <Picker.Item label="11th" value="11th" />
            <Picker.Item label="12th" value="12th" />
          </Picker>
          <View style={styles.chevronIcon}><ChevronBottomNormal size={18} /></View>
        </View>
        <Text style={styles.subheading}>Competitive exams</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={examtype}
            style={styles.picker}
            onValueChange={handleExamTypeChange}
            dropdownIconColor="#2f2f68"
          >
            <Picker.Item label="Exams" value="" />
            <Picker.Item label="JEE mains" value="JEE mains" />
            <Picker.Item label="JEE advance" value="JEE advance" />
            <Picker.Item label="NEET" value="NEET" />
            <Picker.Item label="BITSAT" value="BITSAT" />
            <Picker.Item label="CUET" value="CUET" />
            <Picker.Item label="KCET" value="KCET" />
          </Picker>
          <View style={styles.chevronIcon}><ChevronBottomNormal size={18} /></View>
        </View>
      </View>

      {/* HR element for the visual line, spans full width */}
      <View style={styles.hr} />

      {/* Bottom content with padding */}
      <View style={styles.bottomContent}>
        <TouchableOpacity style={styles.bottomButton}>
          <Text style={styles.bottomButtonIcon}>?</Text>
          <Text style={styles.bottomButtonText}>Help Center</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton}>
          <Text style={styles.bottomButtonIcon}>⎋</Text>
          <Text style={styles.bottomButtonText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sidebar: {
    width: '100%',
    maxWidth: 350,
    backgroundColor: '#001e32',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
  },
  content: {
    padding: 12,
    flexGrow: 1,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 30,
    marginBottom: 8,
    textAlign: 'center',
  },
  pickerContainer: {
    width: 300,
    alignSelf: 'center',
    marginBottom: 12,
    position: 'relative',
    justifyContent: 'center',
  },
  picker: {
    width: '100%',
    height: 40,
    backgroundColor: '#f3f4f6',
    color: '#2f2f68',
    borderRadius: 8,
  },
  chevronIcon: {
    position: 'absolute',
    right: 10,
    top: '50%',
    marginTop: -9,
    zIndex: 1,
  },
  subheading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 30,
    marginBottom: 8,
    textAlign: 'center',
  },
  hr: {
    borderTopWidth: 1,
    borderTopColor: 'white',
    width: '100%',
    marginVertical: 8,
  },
  bottomContent: {
    padding: 12,
    alignItems: 'center',
    marginBottom: 12,
  },
  bottomButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    paddingVertical: 8,
    width: '100%',
    justifyContent: 'center',
    marginBottom: 8,
  },
  bottomButtonIcon: {
    fontSize: 18,
    color: 'white',
    marginRight: 6,
  },
  bottomButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default Sidebar;