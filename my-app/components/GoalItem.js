import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && stylespressedItem}
      >
        <Text style={styles.goalText}> {props.text} </Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 5,
    color: "white",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    backgroundColor: "#cccccc",
    padding: 8,
  },
});
