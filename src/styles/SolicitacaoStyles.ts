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
      txtInput:{
        width: '15%',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5, 
        textAlign: 'center',
        fontWeight: 'bold',
      },
      viewQtd:{
        width: '100%',
        flexDirection: 'row' ,
        alignItems: 'center',
        marginBottom: 10,      
      },
      qtdBtnTxt:{
        paddingVertical: 10,
        marginHorizontal: 5,
        borderRadius: 5,
        textAlign: 'center',
        borderColor: '#ccc',
      },
      qtdBtn:{
        width: '20%',
        borderRadius: 5,
        borderColor: '#ccc',
        borderWidth: 1,
        textAlign: 'center',
        marginHorizontal: 2
      }
});