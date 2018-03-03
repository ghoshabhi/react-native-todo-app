import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const ModalScreen = props => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'palevioletred'
    }}
  >
    <Text style={{ fontSize: 20, marginBottom: 20 }}>
      This is a modal screen!
    </Text>
    <TouchableOpacity
      style={{
        backgroundColor: '#f8bc45',
        padding: 15,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
      }}
      onPress={() => props.navigator.dismissModal()}
    >
      <Text>Click here to close this modal!</Text>
    </TouchableOpacity>
  </View>
);

ModalScreen.navigatorStyle = {
  navBarBackgroundColor: 'rgb(84, 90, 99)',
  navBarTextColor: '#fff'
};

export default ModalScreen;
