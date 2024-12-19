import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

const HomeExample = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('./assets/baground.png')} // Ganti dengan path gambar Anda
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to Myapp!</Text>
        <Button
          title="Go to Login"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // Untuk mengatur cara gambar ditampilkan
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi transparan untuk efek
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default HomeExample;
