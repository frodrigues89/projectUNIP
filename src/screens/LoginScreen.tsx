import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import styles from '../styles/LoginStyles'; // Importa os estilos
import LoginController from '../controllers/LoginController'; // Importa o controlador

interface LoginProps {
  navigation: any; // Tipo da navegação
}

const Login: React.FC<LoginProps> = ({ navigation }) => {
  const [username, setUsername]  = useState<string>('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const loginData = { username, password };

    // Valida os campos de entrada
    if (!LoginController.validateInput(loginData)) {
      Alert.alert('Campos Inválidos', 'Por favor, preencha todos os campos.');
      return;
    }

    // Autentica o usuário
    if (LoginController.authenticate(loginData)) {
      // Login bem-sucedido, navegar para a próxima tela (Solicitacao)
      navigation.navigate('Solicitacao',  { username });
    } else {
      // Login falhou
      Alert.alert('Login falhou', 'Por favor, verifique seu nome de usuário e senha.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome de Usuário"
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default Login;
