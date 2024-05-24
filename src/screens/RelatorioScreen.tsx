import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import RelatorioController from '../controllers/RelatorioController'; // Importa o controlador
import RelatorioStyles from '../styles/RelatorioStyles'; // Importa os estilos
import { useRoute } from '@react-navigation/native';

const RelatorioScreen: React.FC = () => {
  // Suponha que você tenha os dados do relatório disponíveis aqui

  //link da API:
  // https://5selrql8e0.execute-api.sa-east-1.amazonaws.com/teste

  const route = useRoute();
    
  const item =  route.params.data.itemSelecionado;
  const quantidade = route.params.data.quantidade;
  const centroCusto = route.params.data.centroCusto;

  const [dataLoaded, setDataLoaded] = useState([]);

  async function  loadData() {
    const filtros = {
      itemSelecionado: item,
      centroCusto: centroCusto,
      job: "scan"
    };
    console.log(JSON.stringify(filtros))
    
    fetch('https://5selrql8e0.execute-api.sa-east-1.amazonaws.com/teste', {

      method: 'POST',

      headers: {

        'Content-Type': 'application/json',

      },

      body: JSON.stringify(filtros),

    })

    .then(response => {

      if (!response.ok) {
        throw new Error('Erro na solicitação.');
      }

      return response.json();

    })

    .then(data => {

      console.log('Dados recebidos:', data);
      console.log(data.body.response.Items);
      setDataLoaded(data.body.response.Items);

    })

    .catch(error => {

      console.error('Erro na solicitação:', error);
      // Trate erros aqui

    });
    
  }

  useEffect(() => {
    loadData()
  }, [])
  


  // Aqui você pode utilizar o controlador para processar os dados do relatório
  // Por exemplo:
  // const relatorioProcessado = RelatorioController.processarRelatorio(dadosRelatorio);

  return (
    <View style={RelatorioStyles.container}>
      <Text style={RelatorioStyles.titulo}>Relatório de Solicitação</Text>
      <Text>Item: {item}</Text>
      <Text>Quantidade Solicitada: {quantidade}</Text>
      <Text>Centro de Custo: {centroCusto}</Text>


      <Text style={RelatorioStyles.espacoVazio}>Lorem ipsum dolor sit amet...</Text>
      <Text style={RelatorioStyles.espacoVazio}>Lorem ipsum dolor sit amet...</Text>
    </View>
  );
};

export default RelatorioScreen;
