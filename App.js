import React, { useState } from 'react';
import { TextInput, Button, View, StyleSheet, SafeAreaView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import SelectedImage from '../todolist/src/SelectedImage'; 
import { useStore } from '../todolist/src/store'; 
import TodoList from '../todolist/src/todolist'; 

const App = () => {
  const [text, setText] = useState('');
  const [imageUri, setImageUri] = useState(null);
  const todos = useStore((state) => state.todos);
  const addTodo = useStore((state) => state.addTodo);

  const openImagePicker = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      quality: 1,
      maxWidth: 800,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error:', response.error);
      } else {
        console.log('Image URI:', response.uri);
        if (response.uri.toLowerCase().endsWith('.jpg') || response.uri.toLowerCase().endsWith('.jpeg')) {
          setImageUri(response.uri);
        } else {
          console.log('Please select a JPG image');
        }
      }
    });
  };

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
        <Button title="Upload Photo" onPress={openImagePicker} />
        <SelectedImage imageUri={imageUri} /> {/* Moved below the "Upload Photo" button */}
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
