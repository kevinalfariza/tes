import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function UserRegistration({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [birthDate, setBirthDate] = useState('');

  const handleRegister = () => {
    if (!name || !email || !password || !gender || !address || !birthDate) {
      alert('Harap isi semua kolom!');
      return;
    }
    alert('Registrasi User berhasil!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrasi User</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Nama Lengkap"
        value={name}
        onChangeText={setName}
      />
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

      <Text style={styles.label}>Jenis Kelamin:</Text>
      <View style={styles.genderContainer}>
        <TouchableOpacity
          style={[styles.genderButton, gender === 'Laki-laki' && styles.selectedGender]}
          onPress={() => setGender('Laki-laki')}
        >
          <Text style={styles.genderText}>Laki-laki</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.genderButton, gender === 'Perempuan' && styles.selectedGender]}
          onPress={() => setGender('Perempuan')}
        >
          <Text style={styles.genderText}>Perempuan</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Alamat"
        value={address}
        onChangeText={setAddress}
      />
      <TextInput
        style={styles.input}
        placeholder="Tanggal Lahir (YYYY-MM-DD)"
        value={birthDate}
        onChangeText={setBirthDate}
        keyboardType="numeric"
      />

      <Button title="Daftar" onPress={handleRegister} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  genderButton: {
    flex: 1,
    paddingVertical: 10,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  selectedGender: {
    backgroundColor: '#007bff',
    borderColor: '#007bff',
  },
  genderText: {
    color: '#000',
  },
});
