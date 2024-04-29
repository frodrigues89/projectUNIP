import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from '../styles/SolicitacaoStyles';
import SolicitacaoController from '../controllers/SolicitacaoController'; // Importa o controlador
import { useRoute } from '@react-navigation/native';

interface SolicitacaoProps {
  username: string;
}

const SolicitacaoScreen: React.FC<SolicitacaoProps> = (  { username }  ) => {
  const [itemSelecionado, setItemSelecionado] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [centroCusto, setCentroCusto] = useState('');

  const handleSubmit = () => {
    const requestData = { itemSelecionado, quantidade, centroCusto };
    SolicitacaoController.enviarSolicitacao(requestData);
  };
  console.log(username)
  console.log(useRoute().params.username);

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Olá, {username}!</Text>
      <Text style={styles.label}>Selecione o item:</Text>
      <Picker
        selectedValue={itemSelecionado}
        onValueChange={(value) => setItemSelecionado(value)}
        style={styles.input}
      >
        {/* Opções do Picker */}
      </Picker>
      <Text style={styles.label}>Quantidade:</Text>
      <TextInput
        style={styles.input}
        value={quantidade}
        onChangeText={(value) => setQuantidade(value)}
        keyboardType="numeric"
      />
      <Text style={styles.label}>Selecione o centro de custo:</Text>
      <Picker
        selectedValue={centroCusto}
        onValueChange={(value) => setCentroCusto(value)}
        style={styles.input}
      >
        {/* Opções do Picker */}
      </Picker>
      <Button title="Enviar Solicitação" onPress={handleSubmit} />
    </View>
  );
};

export default SolicitacaoScreen;
