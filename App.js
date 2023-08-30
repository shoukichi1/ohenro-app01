import React from 'react';
import { View } from 'react-native';
import NewPlanButton from './components/NewPlanButton';
import Timeline from './components/Timeline';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PlanDetails from './components/PlanDetails';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGl80ZGSVnAVi9oDaOCMSwyFYtegSGu6U",
  authDomain: "ohenro-app.firebaseapp.com",
  projectId: "ohenro-app",
  storageBucket: "ohenro-app.appspot.com",
  messagingSenderId: "191422095013",
  appId: "1:191422095013:web:a432e8e86ea25b699df74c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const Stack = createStackNavigator();

const App = () => {
  const [plans, setPlans] = React.useState([]);

  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Timeline">
          <Stack.Screen name="Timeline" component={Timeline} />
          <Stack.Screen name="PlanDetails" component={PlanDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;
