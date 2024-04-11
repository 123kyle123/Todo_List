import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import TodoItem from "../src/todoitem";

const TodoList = ({ todos }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <TodoItem todo={item} />
        )}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
              No todos available. Start by adding some tasks!
            </Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9EDBF', // Background color for the list container
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default TodoList;
