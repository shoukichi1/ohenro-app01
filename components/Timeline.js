import React from 'react';
import { View, Button } from 'react-native';

const Timeline = ({ navigation }) => {
  return (
    <View>
      {/* こちらに計画一覧の表示など */}
      <Button title="新規計画" onPress={() => navigation.navigate('PlanDetails')} />
    </View>
  );
};

export default Timeline;