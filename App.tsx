import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';


export default function App() {
  const [enteredGoal, setEnteredGoal] = useState<string>('');
  const [courseGoals, setCourseGoals] = useState<string[]>([]);

  const goalInputHandler = (enteredText: string) => {
    setEnteredGoal(enteredText);
  }

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...courseGoals, enteredGoal])

  }
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Add goal here."
          style={styles.inputField}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <View>
        {courseGoals.map((goal, index) => <View key={index} style={styles.listItem}><Text>{goal}</Text></View>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 60
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: 'space-between'
  },
  inputField: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: '75%'
  },
  listItem: {
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: '#000',
    borderWidth: 1,
    marginVertical: 5,
  }
});
