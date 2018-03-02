import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = () => (
  <View
    style={{
      paddingHorizontal: 40,
      paddingVertical: 30,
      // marginTop:,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#323742'
    }}
  >
    <Text style={{ color: '#fff', marginBottom: 10 }}>
      Made with {<Icon size={15} name={'heart'} color={'#e84946'} />} using
      React Native
    </Text>
    <Text style={{ color: '#fff' }}>Abhishek Ghosh</Text>
  </View>
);

export default Header;
