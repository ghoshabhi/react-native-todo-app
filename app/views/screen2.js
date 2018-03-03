import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Screen2 = props => (
  <View style={styles.container}>
    <Text style={{ fontSize: 20, marginBottom: 20, color: '#fff' }}>
      Screen 2
    </Text>
    <TouchableOpacity
      style={{
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
      }}
      onPress={() =>
        props.navigator.showModal({
          screen: 'TodoApp.ModalScreen',
          title: 'Modal Screen',
          passProps: {}
        })
      }
    >
      <Text>Click here to open a modal!</Text>
    </TouchableOpacity>
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
