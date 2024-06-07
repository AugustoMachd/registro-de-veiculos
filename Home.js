import React from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

function Home({ navigation }) {

  const grafico = [
    {
      name: 'Jan',
      population: 35,
      color: 'rgba(131, 167, 234, 1)',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Fev',
      population: 45,
      color: 'darkred',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Mar',
      population: 62,
      color: 'darkorchid',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Abr',
      population: 74,
      color: 'darkblue',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Mai',
      population: 83,
      color: 'crimson',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Jun',
      population: 78,
      color: 'fuchsia',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
  ];

  return (
    <ScrollView>
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 20,
          }}>
          <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
            Register or Remove
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('VehicleRegister')}>
            <Image
              style={{ width: 35, height: 35 }}
              source={require('./screens/icons8-adicionar-96.png')}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.imgContainer}>
          <TouchableOpacity
            style={{ flexDirection: 'row-reverse', alignItems: 'center' }}>
            <Text style={styles.imgTxt}>
              Adicionar à fila de Produção
            </Text>
            <Image
              style={{ width: 110, height: 90 }}
              source={{
                uri: 'https://fotos-jornaldocarro-estadao.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2021/08/02142136/fabrica-renault-brasil-1-1160x725.jpg',
              }}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          <Text style={styles.txt}>
            Fila de Produção
          </Text>
          <View>
            <TouchableOpacity>
              <Text style={styles.txtbtn}>
                Veículo
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.container}>
          <Text style={styles.txt}>
            Veiculo
          </Text>
          <Text style={styles.txtbtn}>
            Adicionar á fila
          </Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.txt}>
            Gráfico de Produção
          </Text>

          <PieChart
            data={grafico
        }
            width={Dimensions.get("window").width - 30}
            height={220}
            chartConfig={{
              backgroundColor: "#e26a00",
              backgroundGradientFrom: "#fb8c00",
              backgroundGradientTo: "#ffa726",
              decimalPlaces: 2,
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            }}
            accessor={"population"}
            backgroundColor={"transparent"}
            paddingLeft={"15"}
            center={[10, 10]}
            absolute
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imgContainer: {
    borderWidth: 0.1,
    backgroundColor: 'black',
    marginHorizontal: 20,
    borderRadius: 5,
    flexDirection: 'column',
    marginBottom: 15,
  },
  imgTxt: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'flex-end',
    marginBottom: 23,
    padding: 10,
  },
  container: {
    alignItems: 'center',
    borderBottomWidth: 1,
    marginHorizontal: 13,
    borderColor: 'grey',
    marginBottom: 15,
  },
  txt: {
    marginBottom: 7, 
    fontWeight: 'bold', 
    fontSize: 17
  },
  txtbtn: {
    backgroundColor: 'lightgrey',
    marginBottom: 7,
    fontWeight: 'bold',
    borderWidth: 1,
    fontSize: 13,
    padding: 4,
    borderRadius: 15,
    borderColor: 'white',
  },
});

export default Home;
