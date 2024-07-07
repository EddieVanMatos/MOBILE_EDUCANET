import { StatusBar } from 'expo-status-bar'
import React from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';
import logoImage from '../../../img/imagemTela1.png'

export const SplashScreen = () => {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={logoImage}/>
        <Text style={styles.titleText}>Olá filha da puta!!!</Text>
        <StatusBar style="auto" />
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#002250',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 64,
    width: 64
  },
  titleText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 12
  }
});
