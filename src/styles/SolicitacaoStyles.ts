// SolicitacaoStyles.ts

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      },
      greeting: {
        fontSize: 20,
        marginBottom: 20,
      },
      label: {
        fontSize: 16,
        marginBottom: 5,
      },
      input: {
        width: '100%',
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
      },
});