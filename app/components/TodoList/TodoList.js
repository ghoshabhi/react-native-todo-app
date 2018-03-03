import React from 'react';
import {
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  StyleSheet
} from 'react-native';

import TodoItem from '../TodoItem';

const TodoList = props => (
  <ScrollView style={styles.container}>
    {props &&
    props.data &&
    Array.isArray(props.data) &&
    props.data.length > 0 ? (
      props.data.map(todo => <TodoItem todo={todo} {...props} key={todo.id} />)
    ) : (
      <View style={styles.stubStyle}>
        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            fontStyle: 'italic'
          }}
        >
          Don't you have anything to-do ? 🌚
        </Text>
      </View>
    )}
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    margin: 10
  },
  stubStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderRadius: 5,
    borderColor: '#f8bc45',
    backgroundColor: '#f8bc45',
    borderWidth: 1.5,
    marginVertical: 10
  }
});

export default TodoList;
