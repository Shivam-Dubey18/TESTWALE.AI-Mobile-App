import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ActivityIndicator, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SignUp() {
  const navigation = useNavigation();
  const [userType, setUserType] = useState('student');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    phone: '',
  });
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const [privacy, setPrivacy] = useState(false);

  const handleInputChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setFormData({
        email: '',
        password: '',
        name: '',
        phone: '',
      });
      setPrivacy(false);
      setSuccess('Signed up successfully!');
      setTimeout(() => setSuccess(''), 2000);
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.header} onPress={() => navigation.navigate('Landing')}>TESTWALE.AI</Text>
        <View style={styles.formContainer}>
          {loading && <ActivityIndicator size="large" color="#5e2f7c" style={{ marginBottom: 16 }} />}
          <TouchableOpacity
            style={styles.signUpButton}
            onPress={handleSubmit}
            disabled={loading}
          >
            <Text style={styles.signUpButtonText}>{loading ? 'Signing Up...' : 'Sign Up'}</Text>
          </TouchableOpacity>
          {success ? (
            <View style={styles.successBox}>
              <Text style={styles.successText}>{success}</Text>
            </View>
          ) : null}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Enter Email*</Text>
            <TextInput
              style={styles.input}
              value={formData.email}
              onChangeText={(text) => handleInputChange('email', text)}
              placeholder="Write here"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Password*</Text>
            <TextInput
              style={styles.input}
              value={formData.password}
              onChangeText={(text) => handleInputChange('password', text)}
              placeholder="Write here"
              secureTextEntry
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Name*</Text>
            <TextInput
              style={styles.input}
              value={formData.name}
              onChangeText={(text) => handleInputChange('name', text)}
              placeholder="Write here"
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Phone*</Text>
            <View style={styles.phoneInputContainer}>
            <Image
                source={{ uri: 'https://c.animaapp.com/mayvxnx3gy0U8I/img/image-50.png' }}
                style={styles.flagImage}
                resizeMode="contain"
              />
              <TextInput
                style={styles.phoneInput}
                value={formData.phone}
                onChangeText={(text) => handleInputChange('phone', text)}
                placeholder="Write here"
                keyboardType="phone-pad"
              />
            </View>
          </View>
          <View style={styles.privacyContainer}>
            <Switch
              value={privacy}
              onValueChange={setPrivacy}
              trackColor={{ false: '#ccc', true: '#5e2f7c' }}
              thumbColor={privacy ? '#5e2f7c' : '#f4f3f4'}
            />
            <Text style={styles.privacyLabel}>Agree with Privacy Policy</Text>
          </View>
          <View style={styles.userTypeContainer}>
            <TouchableOpacity
              style={[styles.userTypeButton, userType === 'student' ? styles.userTypeSelected : styles.userTypeUnselected]}
              onPress={() => setUserType('student')}
              disabled={!privacy}
            >
              <Text style={styles.userTypeTextStudent}>Student</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.userTypeButton, userType === 'mentor' ? styles.userTypeSelected : styles.userTypeUnselected]}
              onPress={() => setUserType('mentor')}
              disabled={!privacy}
            >
              <Text style={styles.userTypeTextMentor}>Mentor</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>
              Already have an Account?{' '}
              <Text
                style={styles.loginLink}
                onPress={() => navigation.navigate('Login')}
              >
                Login
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  innerContainer: {
    flex: 1,
    width: '100%',
    maxWidth: 700,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontWeight: 'bold',
    color: '#15609e',
    fontSize: 32,
    position: 'absolute',
    top: 60,
    left: 20,
    zIndex: 2,
  },
  formContainer: {
    marginTop: 80,
    width: '95%',
    backgroundColor: '#f0ddff91',
    borderRadius: 20,
    padding: 16,
    zIndex: 10,
  },
  signUpButton: {
    width: 200,
    height: 45,
    backgroundColor: '#001e32',
    borderRadius: 50,
    marginTop: 10,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  signUpButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 22,
  },
  successBox: {
    marginTop: 16,
    padding: 12,
    backgroundColor: '#e6ffed',
    borderRadius: 8,
  },
  successText: {
    color: '#2e7d32',
    fontSize: 16,
  },
  inputGroup: {
    marginTop: 16,
  },
  label: {
    fontWeight: '500',
    color: '#000000c4',
    marginBottom: 4,
    fontSize: 18,
  },
  input: {
    width: '100%',
    height: 42,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    color: '#333',
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
  },
  flagImage: {
    width: 40,
    height: 33,
    marginLeft: 4,
  },
  phoneInput: {
    flex: 1,
    height: 42,
    paddingHorizontal: 12,
    fontSize: 16,
    color: '#333',
  },
  privacyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  privacyLabel: {
    fontWeight: '500',
    color: '#2f2f68',
    fontSize: 18,
    marginLeft: 8,
  },
  userTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24,
    gap: 16,
  },
  userTypeButton: {
    flex: 1,
    height: 55,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
    borderWidth: 1,
  },
  userTypeSelected: {
    backgroundColor: '#5e2f7c',
    borderColor: 'transparent',
  },
  userTypeUnselected: {
    backgroundColor: '#fff',
    borderColor: '#2f2f68',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  userTypeTextStudent: {
    fontWeight: '600',
    color: '#ffffff',
    fontSize: 18,
  },
  userTypeTextMentor: {
    fontWeight: '600',
    color: '#001e32',
    fontSize: 18,
  },
  loginContainer: {
    marginTop: 24,
    alignItems: 'center',
  },
  loginText: {
    color: '#000000c4',
    fontWeight: '300',
    fontSize: 18,
  },
  loginLink: {
    color: '#000',
    fontWeight: '300',
    textDecorationLine: 'underline',
  },
  backgroundImage: {
    position: 'absolute',
    width: 400,
    height: 300,
    right: -80,
    top: '60%',
    zIndex: 0,
    opacity: 0.8,
  },
});
