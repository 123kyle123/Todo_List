import React from 'react';
import { FlatList, View, Text, ScrollView } from 'react-native';
import TodoItem from "../src/todoitem";

const TodoList = ({ todos }) => {
  return (
    <FlatList
      data={todos}
      renderItem={({ item }) => (
        <TodoItem todo={item} />
      )}
      keyExtractor={(item) => item.id.toString()}
      ListEmptyComponent={() => (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 16, textAlign: 'center', paddingHorizontal: 20 }}>
            No todos available. Start by adding some tasks!
          </Text>
        </View>
      )}
    />
  );
};

export default TodoList;
