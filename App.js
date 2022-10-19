import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View, Button } from 'react-native';
const axios = require('axios').default;

export default function App() {

  const [frases, setFrases] = React.useState([])
  const [loading, setLoading] = React.useState(false)

  function pegarAPI(){
    setLoading(true);
    axios.get("http://dog-api.kinduff.com/api/facts?number=5")
      .then(function (resp){
          setFrases(resp.data.facts);
          setLoading(false);
      })
      .catch(function (err){
          console.log(err);
      })
  }

  return (
    <View style={styles.container}>
      {!loading ? <Button 
        title="Obtener frase"
        onPress={() => pegarAPI()}
        style={styles.boton}
      /> : <ActivityIndicator/>}
      {frases.length == 0 ? null :
        <>
        {frases.map((frase, index) => <Text key={index}>{frase}</Text>)}
        </>
      }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boton: {
    color: 'red',
    margin: 20
  }
});
