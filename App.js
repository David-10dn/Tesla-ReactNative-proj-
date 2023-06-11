import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import React from 'react';
import CarList from './components/CarList';
import Header from './components/Header';

export default function App() {
  return (
    <View style={styles.container}>

      <Header />

      {/* its better to import all cars from CarList */}
      <CarList />

      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
