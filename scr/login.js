import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';

const LoginExample = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Validasi sederhana
    if (email === '' || password === '') {
      Alert.alert('Error', 'Email dan password harus diisi!');
      return;
    }

    // Jika validasi berhasil, arahkan ke Halaman Utama
    navigation.navigate('Halaman Utama');
  };

  const navigateToRegistration = (role) => {
    // Navigasi ke halaman pendaftaran sesuai peran
    if (role === 'User') {
      navigation.navigate('UserRegistration');
    } else if (role === 'Pengepul') {
      navigation.navigate('CollectorRegistration');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* Tombol Login */}
      <Button title="Login" onPress={handleLogin} />

      {/* Separator */}
      <Text style={styles.separator}>Atau</Text>

      {/* Tombol Daftar */}
      <TouchableOpacity
        style={styles.registerButton}
        onPress={() => navigateToRegistration('User')}
      >
        <Text style={styles.registerText}>Daftar sebagai User</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.registerButton}
        onPress={() => navigateToRegistration('Pengepul')}
      >
        <Text style={styles.registerText}>Daftar sebagai Pengepul</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  separator: {
    textAlign: 'center',
    marginVertical: 20,
    fontSize: 16,
    color: '#888',
  },
  registerButton: {
    backgroundColor: '#007bff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  registerText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default LoginExample;
