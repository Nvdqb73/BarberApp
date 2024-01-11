import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import store from '~/stores/store';
import { publicNavigators } from '~/navigation';
import config from '~/config';

const Stack = createNativeStackNavigator();
function App(): React.JSX.Element {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName={config.screens.homeLayout} screenOptions={{ headerShown: false }}>
                    {publicNavigators.map((navigation, index) => (
                        <Stack.Screen key={index} name={navigation.name} component={navigation.component} />
                    ))}
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}

export default App;
