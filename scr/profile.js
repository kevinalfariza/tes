import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ProfilScreen = ({ navigation }) => {
  const navigateTo = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Profil</Text>
      </View>

      {/* Profil Card */}
      <View style={styles.profileCard}>
        <Image
          source={{
            uri: 'https://cdn.icon-icons.com/icons2/2859/PNG/512/avatar_face_man_boy_profile_smiley_happy_people_icon_181659.png',
          }}
          style={styles.profileImage}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>Pengepul</Text>
          <Text style={styles.profileDetail}>pengepul@gmail.com</Text>
          <Text style={styles.profileDetail}>08223344072</Text>
          <Text style={styles.profileDetail}>Sim A</Text>
          <Text style={styles.profileDetail}>Suzuki New Carry</Text>
        </View>
      </View>

      {/* Menu Buttons */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigateTo('EditData')}
      >
        <Text style={styles.buttonText}>Edit data</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigateTo('Pengaturan')}
      >
        <Text style={styles.buttonText}>Pengaturan</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigateTo('PusatBantuan')}
      >
        <Text style={styles.buttonText}>Pusat bantuan</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigateTo('Ulasan')}
      >
        <Text style={styles.buttonText}>Ulasan</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.logoutButton]}
        onPress={() => navigateTo('Login')}
      >
        <Text style={styles.logoutText}>Keluar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
    padding: 16,
  },
  header: {
    width: '100%',
    backgroundColor: '#007b55',
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileCard: {
    backgroundColor: '#fff',
    width: '90%',
    padding: 16,
    borderRadius: 10,
    elevation: 3,
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  profileInfo: {
    alignItems: 'center',
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  profileDetail: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
  button: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#007b55',
    width: '90%',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 8,
  },
  buttonText: {
    fontSize: 16,
    color: '#007b55',
    fontWeight: 'bold',
  },
  logoutButton: {
    borderColor: '#ff4d4f',
  },
  logoutText: {
    fontSize: 16,
    color: '#ff4d4f',
    fontWeight: 'bold',
  },
});

export default ProfilScreen;
