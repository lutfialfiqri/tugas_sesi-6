

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './Screens/Home';
import Detail from './Screens/Detail';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#788eec'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Todos App'
          }}
        />

        <Stack.Screen
          name="Detail"
          component={Detail}
          options={{
            title: 'Detail Todo'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
