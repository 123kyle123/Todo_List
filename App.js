import React, { useState } from 'react';
import { TextInput, Button, View, StyleSheet, SafeAreaView } from 'react-native';
import SelectedImage from "../Todo_List/src/SelectedImage"; 
import { useStore } from  "../Todo_List/src/store"; 
import TodoList from "../Todo_List/src/todolist"; 

const App = () => {
  const [text, setText] = useState('');
  const [imageUri, setImageUri] = useState(null);
  const todos = useStore((state) => state.todos);
  const addTodo = useStore((state) => state.addTodo);

  const handleAddTodo = () => {
    if (text.trim() !== '') {
      addTodo({ id: Date.now(), text, imageUri });
      setText('');
    }
  };

  console.log('Image URI State:', imageUri);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setText(text)}
          value={text}
          placeholder="Enter Todo"
        />
        <SelectedImage imageUri={imageUri} />
        <View style={styles.buttonContainer}>
          <Button title="Add Todo" onPress={handleAddTodo} />
        </View>
      </View>
      <TodoList todos={todos} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 10,
    backgroundColor: '#D9EDBF', // Background color
    borderRadius: 10, // Rounded corners
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    marginTop: 10,
  },
});

export default App;
