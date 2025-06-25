import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ActivityIndicator, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();
  const [userType, setUserType] = useState('student');
  const [formData, setFormData] = useState({ email: '', password: '', phone: '' });
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setFormData({ email: '', password: '', phone: '' });
      setSuccess('Logged in successfully!');
      setTimeout(() => setSuccess(''), 1000);
      navigation.navigate('Dashboard');
    }, 1000);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.logo} onPress={() => navigation.navigate('Landing')}>TESTWALE.AI</Text>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Login</Text>
        {success ? <Text style={styles.success}>{success}</Text> : null}
        <Text style={styles.label}>Enter Email*</Text>
        <TextInput
          style={styles.input}
          value={formData.email}
          onChangeText={(text) => handleInputChange('email', text)}
          placeholder="Write here"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Text style={styles.label}>Password*</Text>
        <TextInput
          style={styles.input}
          value={formData.password}
          onChangeText={(text) => handleInputChange('password', text)}
          placeholder="Write here"
          secureTextEntry
        />
        <Text style={styles.label}>Phone*</Text>
        <View style={styles.phoneRow}>
          <Image source={{ uri: 'https://c.animaapp.com/mayx5w53ABHDjN/img/image-50.png' }} style={styles.flag} />
          <TextInput
            style={styles.phoneInput}
            value={formData.phone}
            onChangeText={(text) => handleInputChange('phone', text)}
            placeholder="Write here"
            keyboardType="phone-pad"
          />
        </View>
        {/* User type buttons */}
        <View style={styles.userTypeRow}>
          <TouchableOpacity
            style={[styles.userTypeButton, userType === 'student' && styles.userTypeButtonActive]}
            onPress={() => setUserType('student')}
            disabled={loading}
          >
            <Text style={[styles.userTypeText, userType === 'student' && styles.userTypeTextActive]}>Student</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.userTypeButton, userType === 'mentor' && styles.userTypeButtonActive]}
            onPress={() => setUserType('mentor')}
            disabled={loading}
          >
            <Text style={[styles.userTypeText, userType === 'mentor' && styles.userTypeTextActive]}>Mentor</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleSubmit}
          disabled={loading}
        >
          {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.loginButtonText}>Login</Text>}
        </TouchableOpacity>
        <TouchableOpacity style={styles.signupLink} onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.signupText}>Don't have an Account? <Text style={{ color: '#001e32', textDecorationLine: 'underline' }}>Sign up</Text></Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', padding: 20 },
  logo: { 
    fontWeight: 'bold', 
    color: '#15609e', 
    fontSize: 32, 
    position: 'absolute',
    top: 60,
    left: 20,
    zIndex: 2,
  },
  formContainer: { width: '100%', maxWidth: 400, backgroundColor: '#f0ddff91', borderRadius: 20, padding: 20, alignItems: 'center' },
  title: { fontSize: 28, fontWeight: 'bold', color: '#001e32', marginBottom: 16 },
  label: { fontSize: 16, color: '#000000c4', alignSelf: 'flex-start', marginTop: 12 },
  input: { width: '100%', height: 42, backgroundColor: '#fff', borderColor: '#ccc', borderWidth: 1, borderRadius: 8, paddingHorizontal: 12, marginTop: 4 },
  phoneRow: { flexDirection: 'row', alignItems: 'center', width: '100%', backgroundColor: '#fff', borderColor: '#ccc', borderWidth: 1, borderRadius: 8, marginTop: 4 },
  flag: { width: 32, height: 32, marginLeft: 8 },
  phoneInput: { flex: 1, height: 42, paddingHorizontal: 12 },
  userTypeRow: { flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 20 },
  userTypeButton: { flex: 1, height: 45, borderRadius: 30, borderWidth: 1, borderColor: '#2f2f68', backgroundColor: '#fff', marginHorizontal: 4, justifyContent: 'center', alignItems: 'center' },
  userTypeButtonActive: { backgroundColor: '#5e2f7c', borderColor: '#5e2f7c' },
  userTypeText: { color: '#001e32', fontWeight: 'bold' },
  userTypeTextActive: { color: '#fff' },
  loginButton: { width: '100%', height: 50, backgroundColor: '#001e32', borderRadius: 25, justifyContent: 'center', alignItems: 'center', marginTop: 24 },
  loginButtonText: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  success: { color: '#2e7d32', marginTop: 8, marginBottom: 8 },
  signupLink: { marginTop: 24 },
  signupText: { color: '#000000c4', fontSize: 16 },
}); 