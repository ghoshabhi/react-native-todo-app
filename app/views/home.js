import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { find, propEq, keys, has, assoc } from 'ramda';

import TodoList from '../components/TodoList';
import NewTodo from '../components/NewTodo';
import Footer from '../components/Footer';

class App extends Component {
  static navigatorStyle = {
    navBarBackgroundColor: 'rgb(84, 90, 99)',
    navBarTextColor: '#fff'
  };

  state = {
    newTodoValue: '',
    todos: [
      // { id: 1, todoText: '👋 Meet and Greet', status: 'i' },
      // { id: 2, todoText: '🔈 Full Stack Nanodegree', status: 'i' },
      // { id: 3, todoText: '👨🏻‍💻 Current Work', status: 'i' },
      // { id: 4, todoText: '🛠 React Native Tools', status: 'i' }
    ]
  };

  handleComplete = todo => {
    const todos = this.state.todos;
    const todoToUpdate = find(propEq('id', todo.id))(todos);
    const hasStatusProp = has('status')(todoToUpdate);

    if (keys(todoToUpdate).length > 0 && hasStatusProp) {
      const updatedTodo = assoc('status', 'c')(todoToUpdate);
      const updatedTodoList = todos.map(t => {
        if (t.id === todo.id) return updatedTodo;
        return t;
      });
      this.setState({ todos: updatedTodoList });
    } else {
      throw new Error({ message: 'Todo not found' });
    }
  };

  handleRemove = todo => {
    const todos = this.state.todos;
    const updatedTodos = todos.filter(t => t.id !== todo.id);
    this.setState({ todos: updatedTodos });
  };

  handleOnAddNewTodo = () => {
    const { todos, newTodoValue } = this.state;
    if (newTodoValue.length < 5) {
      Alert.alert('Empty Todo', 'Enter at least 4 or more characters!');
      return;
    }
    const newTodo = {
      id: todos.length + 1,
      todoText: newTodoValue,
      status: 'i'
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
      newTodoValue: ''
    });
  };

  navigateToScreen2 = () => {
    this.props.navigator.push({
      screen: 'TodoApp.Screen2',
      title: 'Screen 2',
      navigatorStyle: {
        navBarBackgroundColor: 'rgb(84, 90, 99)',
        navBarTextColor: '#fff',
        navBarButtonColor: '#fff',
        navBarLeftButtonColor: '#fff'
      }
    });
  };

  render() {
    const { newTodoValue, todos } = this.state;
    return (
      <View style={{ backgroundColor: 'rgb(84, 90, 99)', flex: 1 }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: '#fff',
              padding: 15,
              borderRadius: 8,
              justifyContent: 'center',
              alignItems: 'center'
            }}
            onPress={this.navigateToScreen2}
          >
            <Text style={{ fontFamily: 'FiraCode-Regular' }}>
              Click to Open New Screen!
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ margin: 20 }}>
          <NewTodo
            onChangeNewTodoText={newVal =>
              this.setState({ newTodoValue: newVal })
            }
            newTodoValue={newTodoValue}
            onAddNewTodo={this.handleOnAddNewTodo}
          />
        </View>
        <TodoList
          data={todos}
          onPressRemove={this.handleRemove}
          onPressComplete={this.handleComplete}
        />
        <Footer />
      </View>
    );
  }
}

export default App;
