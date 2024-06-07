import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function CarrosRegistrados() {
  const [veiculos, setveiculos] = useState([]);

  useEffect(() => {
    const guardar = async () => {
      const veiculosGuardados = await AsyncStorage.getItem('veiculos');
      if (veiculosGuardados) {
        setveiculos(JSON.parse(veiculosGuardados));
      }
    };
    guardar();
  }, []);

  const clearveiculos = async () => {
    await AsyncStorage.removeItem('veiculos');
    setveiculos([]);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={veiculos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.veiculoItem}>
            <Text style={styles.veiculosTxt}>{`${item.automaker} ${item.model} (${item.year})`}</Text>
            <Text style={styles.veiculosTxt}>{`VIN: ${item.vin}`}</Text>
            <Text style={styles.veiculosTxt}>{`Owner: ${item.owner}`}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.mensagemtxt}>Não há Veículos Registrados</Text>}
      />
      <TouchableOpacity style={styles.clearButton} onPress={clearveiculos}>
        <Text style={styles.clearBtnTxt}>Limpar Lista de Veículos </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  veiculoItem: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    padding: 10,
  },
  veiculosTxt: {
    fontSize: 16,
  },
  clearButton: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  clearBtnTxt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  mensagemtxt: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
});

export default CarrosRegistrados;
