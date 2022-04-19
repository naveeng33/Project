/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <>
      <View style={styles.appHeader}>
        <Text style={styles.appHeaderText}>
          Forecasting system for Agricultural Crops
        </Text>
      </View>
      <View style={styles.wrapper}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Price')}>
          <Text style={styles.button}>Price Prediction</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Yield')}>
          <Text style={styles.button}>Yield Prediction</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Fertilizer')}>
          <Text style={styles.button}>Fertilizer Recommendation</Text>
        </TouchableOpacity>
      </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  appHeader: {
    height: 100,
    backgroundColor: 'green',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appHeaderText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
  },

  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 130
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 25,
  },

  button: {
    backgroundColor: 'green',
    width: 300,
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'center',
    borderRadius: 8,
    color:'white'
  },
});

export default HomeScreen;
