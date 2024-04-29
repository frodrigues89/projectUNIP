import { useNavigation } from '@react-navigation/native';

interface NavigationParams {
  username: string;
}

interface Navigation {
  navigate: (screen: string, params?: NavigationParams) => void;
}

let navigation: Navigation | null = null;

const SolicitacaoController = {
  enviarSolicitacao: (data: any) => {
    navigation = useNavigation(); // Inicializa a navegação
    if (navigation) {
      // Redireciona o usuário para a tela de relatório
      navigation.navigate('RelatorioScreen');
    } else {
      console.error('A navegação não foi inicializada.');
    }
  },
};

export default SolicitacaoController;
