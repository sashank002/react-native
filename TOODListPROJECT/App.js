/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
// import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import HeaderPart from "./components/HeaderPart";
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';

const App = () => {
  const [todos, setTodos] = useState([
    { text: "kem cho ? ", key: '1' },
    { text: "majama  ? ", key: '2' },
    { text: "heyy how are you  ? ", key: '3' }
  ]);

  const deleteItem = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    });
  };


  const addItem = (text) => {
    setTodos((prevTodos) => {
      return [
        { text: text, key: Math.random().toString() },
        ...prevTodos
      ];
    });
  };


  return (
    // header
    <View style={styles.containter}>
      <HeaderPart />

      {/* to form   */}
      <View style={styles.content}>
        <AddTodo addItem={addItem} />

        {/* list  */}
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} deleteItem={deleteItem} />
            )}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containter: {
    flex: 1,
    backgroundColor: '#ecc19c'
  },
  content: {
    padding: 20,
  },
  list: {
    marginTop: 30,
  }
});

export default App;
