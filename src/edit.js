import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const Edit = ({ todo, onEdit }) => {
  const [text, setText] = useState(todo.text);

  const handleEditTodo = () => {
    if (text.trim() !== '') {
      onEdit({ ...todo, text });
    }
  };

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
      <TextInput
        style={{ flex: 1, height: 40, borderColor: 'gray', borderWidth: 1, marginRight: 10, padding: 5 }}
        onChangeText={(text) => setText(text)}
        value={text}
        placeholder="Edit todo..."
      />
      <Button title="Update" onPress={handleEditTodo} />
    </View>
  );
};

export default Edit;
