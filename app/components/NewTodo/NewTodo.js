import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Input from './Input';

const NewTodo = ({ newTodoValue, onAddNewTodo, onChangeNewTodoText }) => (
  <View
    style={{
      // flex: 1,
      marginTop: 20,
      paddingHorizontal: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end'
    }}
  >
    <Input
      onChangeNewTodoText={onChangeNewTodoText}
      newTodoValue={newTodoValue}
    />
    <TouchableOpacity style={styles.btnContainer} onPress={onAddNewTodo}>
      <Icon size={15} name={'plus'} color={'#fff'} />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  btnContainer: {
    height: 35,
    width: 35,
    borderRadius: 35 / 2,
    backgroundColor: '#5ab3b3',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default NewTodo;
