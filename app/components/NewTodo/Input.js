import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const Input = props => (
  <TextInput
    style={styles.textInput}
    onChangeText={props.onChangeNewTodoText}
    value={props.newTodoValue}
    underlineColorAndroid={'transparent'}
    placeholder={'Enter a Todo Item...'}
    placeholderTextColor={'#5ab3b3'}
  />
);

const styles = StyleSheet.create({
  textInput: {
    flex: 2,
    borderRadius: 5,
    borderBottomWidth: 1.5,
    borderColor: '#5ab3b3',
    color: '#5ab3b3',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'FiraCode-Regular',
    fontSize: 16,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginRight: 10
  }
});

export default Input;
