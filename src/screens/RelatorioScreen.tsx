import React from 'react';
import { View, Text } from 'react-native';
import RelatorioController from '../controllers/RelatorioController'; // Importa o controlador
import RelatorioStyles from '../styles/RelatorioStyles'; // Importa os estilos
import { useRoute } from '@react-navigation/native';

const RelatorioScreen: React.FC = () => {
  // Suponha que você tenha os dados do relatório disponíveis aqui

  //link da API:
  // https://5selrql8e0.execute-api.sa-east-1.amazonaws.com/teste

  const route = useRoute();

  const dadosRelatorio = {
    
    item: route.params.data.itemSelecionado,
    quantidade: route.params.data.quantidade,
    centroCusto: route.params.data.centroCusto
    // Outros dados do relatório...
  };

  // Aqui você pode utilizar o controlador para processar os dados do relatório
  // Por exemplo:
  // const relatorioProcessado = RelatorioController.processarRelatorio(dadosRelatorio);

  return (
    <View style={RelatorioStyles.container}>
      <Text style={RelatorioStyles.titulo}>Relatório de Solicitação</Text>
      <Text>Item: {dadosRelatorio.item}</Text>
      <Text>Quantidade Solicitada: {dadosRelatorio.quantidade}</Text>
      <Text>Centro de Custo: {dadosRelatorio.centroCusto}</Text>


      <Text style={RelatorioStyles.espacoVazio}>Lorem ipsum dolor sit amet...</Text>
      <Text style={RelatorioStyles.espacoVazio}>Lorem ipsum dolor sit amet...</Text>
    </View>
  );
};

export default RelatorioScreen;
