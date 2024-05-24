import ApiService from '../utils/ApiService';

const SolicitacaoController = { 
  enviarSolicitacao: (data: any, navigation : any) => {
    ApiService.handleEnviarSolicitacao(data, "put", navigation)    
  },
};

export default SolicitacaoController;
