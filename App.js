import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import React from 'react';
import CarItem from './components/CarItem';
import CarList from './components/CarList';

export default function App() {
  return (
    <View style={styles.container}>

      {/* its better to import all cars from CarList */}
      <CarList />

      {/* <CarItem name={"Model X"}
        tagline={"Order Online for "}
        taglineCTA={"Touchless Delivery"}
        image={require('./assets/images/ModelX.jpeg')}
      /> */}

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
