class ApiService {
  static async handleEnviarSolicitacao(data, jobParam, navigation) {
    try {

      const nextID = await getNextID();

      // Se o upload da imagem for bem-sucedido, envie os dados da pessoa para o Lambda
      const requestOptionsLambda = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: nextID,
          ...data,
          job: jobParam // Use o parâmetro jobParam fornecido
        })
      };
      console.log(requestOptionsLambda)

      const responseLambda = await fetch('https://5selrql8e0.execute-api.sa-east-1.amazonaws.com/teste', requestOptionsLambda);

      if (!responseLambda.ok) {
        throw new Error('Erro ao enviar dados para o Lambda.');
      }
      const dataLambda = await responseLambda.json();

      console.log('Resposta da API do Lambda:', dataLambda);
      alert('Requisição salva com sucesso!');
      navigation.navigate('Relatorio', { data });

    } catch (error) {
      console.error('Erro:', error);
      alert('Ocorreu um erro ao enviar os dados.');
    }
  }
}

const getNextID = async () => {
  let filtros = { job: 'count'};

  // Retorne a promessa gerada pelo fetch
  return fetch('https://5selrql8e0.execute-api.sa-east-1.amazonaws.com/teste', {
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
          return data.body.response.Count + 1;
      })
      .catch(error => {
          console.error('Erro na solicitação:', error);
          // Trate erros aqui
          throw error; // Propague o erro para que possa ser capturado pelo catch em createID
      });
}

export default ApiService;
