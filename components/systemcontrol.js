import React from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet, ImageBackground } from 'react-native';
import axios from 'axios';
import config from '../config.js'; // Import config values

const { PHONE_IP, AUTH_TOKEN } = config;

const SystemControl = () => {
  const sendWOL = async () => {
    try {
      const response = await axios.post(`http://${PHONE_IP}:5000/wake`, {}, {
        headers: {
          Authorization: AUTH_TOKEN
        }
      });
      Alert.alert('Success', 'Wake signal sent');
    } catch (error) {
      Alert.alert('WOL Error', error.message);
    }
  };

  const sendShutdown = async () => {
    try {
      const response = await axios.post(`http://${PHONE_IP}:5002/shutdown`, {}, {
        headers: {
          Authorization: AUTH_TOKEN
        }
      });
      Alert.alert('Success', 'Shutdown signal sent');
    } catch (error) {
      Alert.alert('Shutdown Error', error.message);
    }
  };

  return (
    <ImageBackground
      source={{ uri: 'https://i.imgur.com/zlZ2yRf.jpg' }}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>System Control</Text>

        <TouchableOpacity style={styles.button} onPress={sendWOL}>
          <Text style={styles.buttonText}>🔌 Wake PC</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.shutdownButton]} onPress={sendShutdown}>
          <Text style={styles.buttonText}>⏻ Shutdown PC</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    padding: 20,
    borderRadius: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 10,
    width: 200,
    alignItems: 'center',
  },
  shutdownButton: {
    backgroundColor: '#f44336',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SystemControl;
