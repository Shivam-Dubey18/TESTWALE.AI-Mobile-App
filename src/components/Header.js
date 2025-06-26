import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Modal, Pressable, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View style={styles.navbar}>
      {/* Logo */}
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={styles.logo}>TESTWALE.AI</Text>
      </TouchableOpacity>

      
      

      {/* Hamburger Menu (mobile) */}
      <TouchableOpacity style={styles.menuButton} onPress={() => setIsOpen(true)}>
        <Text style={styles.menuIcon}>{isOpen ? '✖️' : '☰'}</Text>
      </TouchableOpacity>

      {/* Modal for Mobile Menu */}
      <Modal
        visible={isOpen}
        animationType="slide"
        transparent
        onRequestClose={() => setIsOpen(false)}
      >
        <Pressable style={styles.modalOverlay} onPress={() => setIsOpen(false)}>
          <View style={styles.menuModal}>
            <TouchableOpacity style={styles.menuItem} onPress={() => { setIsOpen(false); navigation.navigate('Home'); }}>
              <Text style={styles.menuText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => { setIsOpen(false); navigation.navigate('Dashboard'); }}>
              <Text style={styles.menuText}>Dashboard</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => { setIsOpen(false); navigation.navigate('AboutUs'); }}>
              <Text style={styles.menuText}>About Us</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuButtonAction} onPress={() => { setIsOpen(false); navigation.navigate('Login'); }}>
              <Text style={styles.menuButtonText}>Log In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuButtonAction} onPress={() => { setIsOpen(false); Linking.openURL("https://testwale.ai/Support");}}>
              <Text style={styles.menuButtonText}>Help</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuButtonAction} onPress={() => { setIsOpen(false); navigation.navigate(''); }}>
              <Text style={styles.menuButtonText}>Settings</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    top: 60,
    marginBottom: 40,
    elevation: 4,
    zIndex: 50,
  },
  logo: {
    color: '#15609e',
    fontSize: 24,
    fontWeight: 'bold',
  },
  navLinks: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  link: {
    color: '#2f2f68',
    fontWeight: '600',
    fontSize: 16,
    marginHorizontal: 8,
  },
  profilePic: {
    backgroundColor: '#D9D9D9',
    borderRadius: 20,
    width: 40,
    height: 40,
    marginHorizontal: 8,
  },
  menuButton: {
    padding: 8,
  },
  menuIcon: {
    fontSize: 28,
    color: '#2f2f68',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'flex-end',
  },
  menuModal: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    alignItems: 'center',
  },
  menuItem: {
    paddingVertical: 12,
    width: '100%',
    alignItems: 'center',
  },
  menuText: {
    color: '#2f2f68',
    fontWeight: 'bold',
    fontSize: 16,
  },
  menuButtonAction: {
    width: '90%',
    backgroundColor: '#001e32',
    paddingVertical: 8,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 10,
  },
  menuButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default Header;