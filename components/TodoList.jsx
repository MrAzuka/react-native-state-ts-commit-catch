import { FlatList, StyleSheet, Text, View } from "react-native";
import { TodoItem } from "./TodoItem";
import { colors } from "../assets/theme";

export function TodoList({ todos, onDeleteItem }) {
  return (
    <View style={styles.todoListContainer}>
      <Text style={styles.todoSectionTitle}>Your Todos</Text>
      <FlatList
        alwaysBounceVertical={false}
        keyExtractor={(item) => item.id}
        data={todos}
        renderItem={(itemData) => {
          return (
            // TODO: Update component props
            <TodoItem
              // TODO: Update component props
              id={itemData.item.id}
              text={itemData.item.text}
              onDeleteItem={onDeleteItem}
            />
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  todoListContainer: {
    marginTop: 20,
  },
  todoSectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: colors.text,
    marginBottom: 12,
  },
});
