import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function VehicleRegister({ navigation }) {
  const [automaker, setAutomaker] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [vin, setVin] = useState('');
  const [customs, setCustoms] = useState('');
  const [productionSchedule, setProductionSchedule] = useState('');
  const [owner, setOwner] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const registrar = async () => {
    try {
      const veiculo = { automaker, model, year, vin, customs, productionSchedule, owner };
      const storedveiculos = await AsyncStorage.getItem('veiculos');
      const veiculos = storedveiculos ? JSON.parse(storedveiculos) : [];
      veiculos.push(veiculo);
      await AsyncStorage.setItem('veiculos', JSON.stringify(veiculos));
      setSuccessMessage('Veículo registrado com sucesso');
  
      setAutomaker('');
      setModel('');
      setYear('');
      setVin('');
      setCustoms('');
      setProductionSchedule('');
      setOwner('');
    } catch (error) {
      Alert.alert('Error', 'Failed to register vehicle');
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="Automaker"  placeholderTextColor="gray"  onChangeText={setAutomaker} value={automaker} />
        <TextInput style={styles.input} placeholder="Model" placeholderTextColor="gray"   onChangeText={setModel} value={model} />
        <TextInput style={styles.input} placeholder="Year" placeholderTextColor="gray"  onChangeText={setYear} value={year} />
        <TextInput style={styles.input} placeholder="V.I.N." placeholderTextColor="gray"  onChangeText={setVin} value={vin} />
        <TextInput style={styles.input} placeholder="Customs"  placeholderTextColor="gray"  onChangeText={setCustoms} value={customs} />
        <TextInput style={styles.input} placeholder="Production Schedule" placeholderTextColor="gray"  onChangeText={setProductionSchedule} value={productionSchedule} />
        <TextInput style={styles.input} placeholder="Owner" placeholderTextColor="gray"  onChangeText={setOwner} value={owner} />

        <TouchableOpacity style={styles.btnreg} onPress={registrar}>
          <Text style={styles.txtReg}>Registrar Veículo</Text>
        </TouchableOpacity>
        {successMessage ? <Text style={styles.successMessage}>{successMessage}</Text> : null}
      </View>
    </ScrollView>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    margin: 4,
    marginRight: 30,
    marginLeft: 30,
    borderRadius: 5,
    color:'black'
  },
  txtReg: {
    color: 'white',
  },
  btnreg: {
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 10,
    margin: 15,
  },
  successMessage: {
    color: 'green',
    textAlign: 'center',
    marginTop: 10,
    fontSize: 16,
  },
});

export default VehicleRegister;
