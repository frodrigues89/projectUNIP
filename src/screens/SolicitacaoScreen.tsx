import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Pressable, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from '../styles/SolicitacaoStyles';
import SolicitacaoController from '../controllers/SolicitacaoController'; // Importa o controlador
import { useNavigation, useRoute } from '@react-navigation/native';

interface SolicitacaoProps {
}

const SolicitacaoScreen: React.FC<SolicitacaoProps> = ( ) => {
  const [itemSelecionado, setItemSelecionado] = useState('');
  const [quantidade, setQuantidade] = useState(1);
  const [centroCusto, setCentroCusto] = useState('');
  
  const route = useRoute();
  const username : string = route.params.username;

  const navigation = useNavigation();

  const handleSubmit =  () => {
    if (!(itemSelecionado === '') && !(centroCusto === '') ){      
      const requestData = { itemSelecionado, quantidade, centroCusto };
      SolicitacaoController.enviarSolicitacao(requestData, navigation);
      
    }else{
      Alert.alert("ATENÇÃO! Você deve selecionar um item e um centro de custo para prosseguir.")
    }
    
  };

  const handleQuantity = (value: number) => {
    const newQuantity = quantidade + value;
    setQuantidade(newQuantity);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Olá, {username}!</Text>
      <Text style={styles.label}>Selecione o item:</Text>
      <Picker
        selectedValue={itemSelecionado}
        onValueChange={(value) => setItemSelecionado(value)}
        style={styles.input}
      >
        <Picker.Item label="Selecione um item" value="" />
        <Picker.Item label="Papel" value="papel" />
        <Picker.Item label="Tinta" value="tinta" />
        <Picker.Item label="Canetas" value="canetas" />
      </Picker>
      <Text style={styles.label}>Quantidade:</Text>
      <View style={styles.viewQtd}>
      <Pressable onPress={() => handleQuantity(-10)} style={styles.qtdBtn}>
          <Text style={styles.qtdBtnTxt}>-10</Text>
        </Pressable>
        <Pressable onPress={() => handleQuantity(-1)} style={styles.qtdBtn}>
          <Text style={styles.qtdBtnTxt}>-1</Text>
        </Pressable>
        <Text style={styles.txtInput}>{quantidade}</Text> 
        <Pressable onPress={() => handleQuantity(1)} style={styles.qtdBtn}>
          <Text style={styles.qtdBtnTxt}>+1</Text>
        </Pressable>
        <Pressable onPress={() => handleQuantity(10)} style={styles.qtdBtn}>
          <Text style={styles.qtdBtnTxt}>+10</Text>
        </Pressable>
      </View>
      
      <Text style={styles.label}>Selecione o centro de custo:</Text>
      <Picker
        selectedValue={centroCusto}
        onValueChange={(value) => setCentroCusto(value)}
        style={styles.input}
      >
        <Picker.Item label="Selecione um centro de custo" value="" />
        <Picker.Item label="Centro de Custo 1" value="custo1" />
        <Picker.Item label="Centro de Custo 2" value="custo2" />
        <Picker.Item label="Centro de Custo 3" value="custo3" />
      </Picker>
      <Button title="Enviar Solicitação" onPress={handleSubmit} />
    </View>
  );
};

export default SolicitacaoScreen;
