import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Screen2 = () => (
  <View style={styles.container}>
    <Text style={{ color: '#fff' }}>Screen 2</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2d4856'
  }
});

export default Screen2;
