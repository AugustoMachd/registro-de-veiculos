import * as React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './pair-programming/pair-programming/Home';
import VehicleRegister from './pair-programming/pair-programming/screens/VehicleRegister';
import CarrosRegistrados from './pair-programming/pair-programming/screens/CarrosRegistrados';
import Perfil from "./pair-programming/pair-programming/Perfil"

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Menu({ navigation }) {
  return (
    <TouchableOpacity onPress={() => navigation.openDrawer()}>
      <Image
        style={{ width: 35, height: 35 }}
        source={require('./pair-programming/pair-programming/screens/3pontinhos.png')}
      />
    </TouchableOpacity>
  );
}

function PerfilMenu({ navigation }) {
  return (
    <View style={{ alignItems: 'center' }}>
      <TouchableOpacity
        onPress={() => navigation.navigate('CarrosRegistrados')}>
        <Image
          style={{ width: 35, height: 35 }}
          source={require('./pair-programming/pair-programming/screens/icons8-car-96.png')}
        />
      </TouchableOpacity>
    </View>
  );
}

function ReturnButton({ navigation }) {
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image
        style={{ width: 35, height: 35 }}
        source={require('./pair-programming/pair-programming/screens/returnButton.png')}
      />
    </TouchableOpacity>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name=""
        component={Home}
        options={({ navigation }) => ({
          headerLeft: () => <Menu navigation={navigation} />,
          headerRight: () => <PerfilMenu navigation={navigation} />,
        
        })}
      />
      <Stack.Screen
        name="VehicleRegister"
        component={VehicleRegister}
        options={({ navigation }) => ({
          title: 'Register or Remove',
          headerTitleAlign: 'center',
          headerLeft: () => <ReturnButton navigation={navigation} />,
        })}
      />
      <Stack.Screen
        name="CarrosRegistrados"
        component={CarrosRegistrados}
        options={({ navigation }) => ({
          title: 'Veículos Registrados',
          headerTitleAlign: 'center',
          headerLeft: () => <ReturnButton navigation={navigation} />,
        })}
      />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <Image
                style={{ width: 25, height: 25 }}
                source={require('./pair-programming/pair-programming/screens/HOme.png')}
              />
            ),
            tabBarLabel: '',
          }}
        />
  <Tab.Screen
          name=""
          component={Perfil}
          options={({ navigation }) => ({
               headerLeft: () => <Menu navigation={navigation} />,
          headerRight: () => <PerfilMenu navigation={navigation} />,
            tabBarIcon: () => (
              <Image
                style={{ width: 25, height: 25 }}
                source={require('./pair-programming/pair-programming/screens/user.png')}
              />
            ),
            tabBarLabel: '',
          })}
        />
        <Tab.Screen
          name="CarrosRegistrados"
          component={CarrosRegistrados}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <Image
                style={{ width: 25, height: 25 }}
                source={require('./pair-programming/pair-programming/screens/Calendario.png')}
              />
            ),
            tabBarLabel: '',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
