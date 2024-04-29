// AppNavigator.tsx

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import SolicitacaoScreen from '../screens/SolicitacaoScreen';
import RelatorioScreen from '../screens/RelatorioScreen';

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
        <Stack.Screen
            name="Solicitacao"
            component={SolicitacaoScreen}
            options={{ title: 'Solicitação' }}
            initialParams={{ username: '' }} 
        />
        <Stack.Screen
            name="Relatorio"
            component={RelatorioScreen}
            options={{ title: 'Relatório' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
