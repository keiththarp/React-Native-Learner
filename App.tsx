import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';

interface ICourseGoals {
  key: string;
  value: string;
}

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState<string>('');
  const [courseGoals, setCourseGoals] = useState<ICourseGoals[]>([{
    key: "",
    value: "",
  }]);

  const goalInputHandler = (enteredText: string) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals(courseGoals => [...courseGoals, { key: (Math.random().toString()), value: enteredGoal }]);
    setEnteredGoal('');
  };

  // Working on trying to figure out how to remove a goal prior to watching the next module

  const deleteGoal = (note: ICourseGoals) => {
    setCourseGoals(courseGoals => {
      return courseGoals.filter((goal) => goal.key !== note.key);
    });
  };

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
      <FlatList data={courseGoals} renderItem={(itemData) => (
        <TouchableOpacity onPress={() => deleteGoal(itemData.item)}>
          <View style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
          </View>
        </TouchableOpacity>
      )} />
    </View>
  );
};

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
