import React from 'react';
import { ScrollView } from 'react-native';

import TodoItem from './TodoItem';

const TodoList = props => (
  <ScrollView style={{ flex: 1, padding: 20, margin: 10 }}>
    {props &&
      props.data &&
      props.data.map(todo => <TodoItem todo={todo} {...props} key={todo.id} />)}
  </ScrollView>
);

export default TodoList;
