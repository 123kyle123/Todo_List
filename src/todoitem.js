import React, { useState } from 'react';
import { View, Text, Button, TextInput, ScrollView } from 'react-native';
import Edit from "../src/edit";
import { useStore } from "../src/store";

const TodoItem = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.text);
  const deleteTodo = useStore((state) => state.deleteTodo);
  const editTodo = useStore((state) => state.editTodo);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleEditTodo = () => {
    if (text.trim() !== '') {
      editTodo({ ...todo, text });
      setIsEditing(false);
    }
  };

  const handleDeleteTodo = () => {
    deleteTodo(todo.id);
  };

  return (
    <View style={{ padding: 10 }}>
      {isEditing ? (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TextInput
            style={{ flex: 1, height: 40, borderColor: 'gray', borderWidth: 1, marginRight: 10, padding: 5 }}
            onChangeText={(text) => setText(text)}
            value={text}
          />
          <Button title="Update" onPress={handleEditTodo} />
        </View>
      ) : (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <ScrollView horizontal>
            <Text>{todo.text}</Text>
          </ScrollView>
          <Button title="Delete" onPress={handleDeleteTodo} />
          <Button title="Edit" onPress={handleEditToggle} />
        </View>
      )}
    </View>
  );
};

export default TodoItem;
