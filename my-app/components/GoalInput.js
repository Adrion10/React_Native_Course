import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    // console.log(enteredText);
    setEnteredGoalText(enteredText);
  }
  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goals.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.button}>
          <Button title="Add Goal" onPress={addGoalHandler} color="#b180f0" />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
        </View>
      </View>
    </Modal>
  );
}
export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    // flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    paddingTop: 16,
    backgroundColor: "#311b6b",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 5,
    backgroundColor: "#e5d0ff",
    color: "#000000",
    width: "100%",
    paddingTop: 16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
