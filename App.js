import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Playthrough from './components/Playthrough';
import Unit from './components/Unit';

const Stack = createNativeStackNavigator();
const PlaythroughContext = React.createContext({
  playthrough: null,
  unit: null,
  setUnit: () => {}
});

// const setUnit = (unit) => {
//   this.setState(state => ({
//     theme:
//       state.theme === themes.dark
//         ? themes.light
//         : themes.dark,
//   }));
// };

export default function App() {
  return (
    <NavigationContainer>
      <PlaythroughContext.Provider value={ null }>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Playthrough}
            options={{title: 'Home'}}
          />
          <Stack.Screen name="Unit" component={Unit} />
        </Stack.Navigator>
      </PlaythroughContext.Provider>
    </NavigationContainer>
  );
}
