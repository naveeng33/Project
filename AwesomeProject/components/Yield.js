/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
const data = require('../assets/data.json');

const Yield = () => {
  const [selectedState, setSelectedState] = useState('');
  const [selectedCrop, setSelectedCrop] = useState('');
  const [rainfall, setRainfall] = useState('');
  const [pesticide, setPesticide] = useState('');
  const [result, setResult] = useState('');
  const {states} = data;

  const [statesData, setStatesData] = useState(states);
  const handlePress = () => {
    console.log('Predicting the price');
  };
  const clear = () => {
    setSelectedCrop('');
    setSelectedState('');
    setRainfall('');
    setPesticide('');
    setResult('');
  };

  const changeState = (value, index) => {
    console.log('state : ', value);
    setSelectedState(value);
  };
  return (
    <ScrollView>
      {/* <Text>This is Yield Page</Text> */}
      <Text style={styles.text}>State : </Text>

      <View style={styles.picker}>
        <Picker selectedValue={selectedState} onValueChange={changeState}>
          <Picker.Item label="-- Select a Value --" />
          {states.map((e, key) => (
            <Picker.Item label={e.state.name} value={e.state.name} key={key} />
          ))}
        </Picker>
      </View>
      <Text style={styles.text}>Crop : </Text>

      <View style={styles.picker}>
        <Picker
          selectedValue={selectedCrop}
          onValueChange={(value, index) => setSelectedCrop(value)}>
          <Picker.Item label="-- Select a Value --" />
          <Picker.Item label="Paddy" value="Paddy" />
          <Picker.Item label="Wheat" value="Wheat" />
          <Picker.Item label="Corn" value="Corn" />
          <Picker.Item label="Sugarcane" value="Sugarcane" />
          <Picker.Item label="Turmeric" value="Turmeric" />
          <Picker.Item label="Sunflower" value="Sunflower" />
          <Picker.Item label="Groundnut" value="Groundnut" />
        </Picker>
      </View>

      <Text style={styles.text}>Rainfall (mm) : </Text>
      <TextInput
        value={rainfall}
        onChangeText={value => setRainfall(value)}
        style={styles.inputFieldBox}
      />
      <Text style={styles.text}>Pesticide : </Text>
      <TextInput
        value={pesticide}
        onChangeText={value => setPesticide(value)}
        style={styles.inputFieldBox}
      />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity style={styles.clearButtonContainer} onPress={clear}>
          <Text style={styles.clearButton}>Clear</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer} onPress={handlePress}>
          <Text style={styles.button}>Predict Yield</Text>
        </TouchableOpacity>
      </View>

      {result != '' && <Text style={styles.resultBox}>{result}</Text>}

      {/* 
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.button}>Predict Yield</Text>
      </TouchableOpacity> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignSelf: 'center',
    marginTop: 20,
    marginRight:10,
  },

  picker: {
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    // padding: 10,
    borderRadius: 5,
  },
  clearButtonContainer: {
    marginLeft: 10,
    marginTop: 20,
    marginBottom: 10,
  },

  clearButton: {
    width: 100,
    borderWidth: 1,
    borderColor: 'red',
    textAlign: 'center',
    fontSize: 20,
    padding: 10,
    borderRadius: 8,
    color: 'red',
  },
  button: {
    width: 200,
    backgroundColor: 'green',
    textAlign: 'center',
    fontSize: 20,
    padding: 10,
    borderRadius: 8,
    color: 'white',
  },
  inputFieldBox: {
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    padding: 10,
    borderRadius: 5,
  },
  text: {
    marginLeft: 20,
    marginTop: 20,
  },
  resultBox: {
    width: 200,
    backgroundColor: 'orange',
    textAlign: 'center',
    fontSize: 25,
    padding: 10,
    borderRadius: 8,
    color: 'white',
    alignSelf: 'center',
    marginTop: 30,
    fontWeight: 'bold',
    marginBottom:15

  },
});

export default Yield;
