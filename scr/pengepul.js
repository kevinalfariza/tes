import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function CollectorRegistration({ navigation }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [vehiclePlate, setVehiclePlate] = useState('');
  const [simPhoto, setSimPhoto] = useState(null);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSimPhoto(result.assets[0].uri);
    }
  };

  const handleRegister = () => {
    if (!name || !phone || !address || !vehiclePlate || !simPhoto) {
      Alert.alert('Error', 'Harap isi semua kolom!');
      return;
    }
    Alert.alert('Registrasi Pengepul berhasil!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrasi Pengepul</Text>

      <TextInput
        style={styles.input}
        placeholder="Nama Pengepul"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Nomor Telepon"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Alamat"
        value={address}
        onChangeText={setAddress}
      />
      <TextInput
        style={styles.input}
        placeholder="Nomor Plat Kendaraan"
        value={vehiclePlate}
        onChangeText={setVehiclePlate}
      />

      <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
        <Text style={styles.uploadButtonText}>
          {simPhoto ? 'Foto SIM Dipilih' : 'Unggah Foto SIM'}
        </Text>
      </TouchableOpacity>

      <Button title="Daftar" onPress={handleRegister} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  uploadButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    marginBottom: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  uploadButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
