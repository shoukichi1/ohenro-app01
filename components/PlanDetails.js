// src/components/PlanDetails.js
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const PlanDetails = ({ addNewPlan }) => {
  const [time, setTime] = useState('');
  const [category, setCategory] = useState('');
  const [cost, setCost] = useState('');
  const [memo, setMemo] = useState('');

  const handleSubmit = () => {
    const newPlan = { time, category, cost, memo };
    addNewPlan(newPlan);

    // Firebaseにデータを保存
    firebase.database().ref('plans/').push(newPlan);
  };

  return (
    <View>
      <TextInput placeholder="Time" onChangeText={setTime} />
      <TextInput placeholder="Category" onChangeText={setCategory} />
      <TextInput placeholder="Cost" onChangeText={setCost} />
      <TextInput placeholder="Memo" onChangeText={setMemo} />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default PlanDetails;
