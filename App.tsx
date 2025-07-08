/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import SystemControl from './components/systemcontrol.js';

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <SystemControl />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000',
  },
});

export default App;
