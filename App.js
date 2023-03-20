import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {store} from './store';
import {Provider} from 'react-redux';
import Counter from './screen/Counter';
import PokemonDetail from './screen/PokemonDetail';
import PokemonList from './screen/PokemonList';
import {QueryClient, QueryClientProvider} from 'react-query';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
    const queryClient = new QueryClient();

    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="list">
                        <Stack.Screen name="list" component={PokemonList} />
                        <Stack.Screen name="detail" component={PokemonDetail} />
                    </Stack.Navigator>
                </NavigationContainer>
            </QueryClientProvider>
        </Provider>
    );
};

export default App;
