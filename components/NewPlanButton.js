// src/components/NewPlanButton.js
import React from 'react';
import { Button } from 'react-native';

const NewPlanButton = ({ addNewPlan }) => {
  return (
    <Button
      title="Add New Plan"
      onPress={() => {
        const newPlan = {
          time: '10:00 AM',
          category: 'Meeting',
          cost: 0,
          memo: 'Team meeting'
        };
        addNewPlan(newPlan);
      }}
    />
  );
};

export default NewPlanButton;
