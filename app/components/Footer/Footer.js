import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Footer = () => (
  <View
    style={{
      paddingHorizontal: 40,
      paddingVertical: 25,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#323742'
    }}
  >
    <Text
      style={{
        color: '#fff',
        fontFamily: 'FiraCode-Regular',
        marginBottom: 10
      }}
    >
      Made with {<Icon size={15} name={'heart'} color={'#e84946'} />} using
      React Native
    </Text>
    <TouchableOpacity
      onPress={() => Linking.openURL('https://github.com/ghoshabhi')}
    >
      <Text
        style={{
          color: '#fff',
          fontFamily: 'FiraCode-Regular',
          textDecorationLine: 'underline'
        }}
      >
        Abhishek Ghosh
      </Text>
    </TouchableOpacity>
  </View>
);

export default Footer;
