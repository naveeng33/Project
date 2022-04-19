/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
const data = require('../assets/data.json');

const Price = () => {
  const {states} = data;
  const [statesData, setStatesData] = useState(states);
  const [districts, setDistricts] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [selectedCrop, setSelectedCrop] = useState('');
  const [selectedSeason, setSelectedSeason] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
const [result,setResult] = useState('');
  const [cultivationArea, setCultivationArea] = useState('');

  const changeState = (value, index) => {
    console.log('state : ', value);
    setSelectedState(value);

    setDistricts(states.find(item => item.state.name == value).state.districts);
  };

  const handlePress = () => {
    console.log("Predicting the price")
  };
  const clear = () => {
    setSelectedCrop('');
    setSelectedSeason('');
    setSelectedDistrict('');
    setSelectedState('');
    setCultivationArea('');
    setResult('');
  };

  return (
    <ScrollView>
      {/* <Text>This is Price Page</Text> */}
      <Text style={styles.text}>Crop : </Text>
      <View style={styles.picker}>
        <Picker
          // style={styles.inputField}
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
      <Text style={styles.text}>Season : </Text>

      <View style={styles.picker}>
        <Picker
          style={styles.inputField}
          selectedValue={selectedSeason}
          onValueChange={(value, index) => setSelectedSeason(value)}>
          <Picker.Item label="-- Select a Value --" />

          <Picker.Item label="Summer" value="Summer" />
          <Picker.Item label="Winter" value="Winter" />
          <Picker.Item label="Rainy" value="Rainy" />
          <Picker.Item label="Autumn" value="Autumn" />
          <Picker.Item label="Spring" value="Spring" />
        </Picker>
      </View>
      <Text style={styles.text}>State : </Text>
      <View style={styles.picker}>
        <Picker
          style={styles.inputField}
          selectedValue={selectedState}
          onValueChange={changeState}>
          <Picker.Item label="-- Select a Value --" />
          {states.map((e, key) => (
            <Picker.Item label={e.state.name} value={e.state.name} key={key} />
          ))}
        </Picker>
      </View>

      <Text style={styles.text}>District : </Text>
      <View style={styles.picker}>
        <Picker
          style={styles.inputField}
          selectedValue={selectedDistrict}
          onValueChange={(value, index) => setSelectedDistrict(value)}>
          <Picker.Item label="-- Select a Value --" />
          {districts.map((e, key) => (
            <Picker.Item value={e} label={e} key={key} />
          ))}
        </Picker>
      </View>
      <Text style={styles.text}>Cultivation Area(Acres) : </Text>
      <TextInput
        value={cultivationArea}
        onChangeText={value => setCultivationArea(value)}
        style={styles.inputFieldBox}
        // placeholder="Cultivation Area(Acres)"
      />
      {/* <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.button}>Predict Price</Text>
      </TouchableOpacity> */}

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
          <Text style={styles.button}>Predict Price</Text>
        </TouchableOpacity>
      </View>

      {result != '' && <Text style={styles.resultBox}>{result}</Text>}

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignSelf: 'center',
    marginTop: 20,
    marginRight: 10,
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

  inputField: {
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
    // marginTop:20,
    marginLeft: 20,
    marginRight: 20,
    padding: 10,
    borderRadius: 5,
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
    fontWeight:'bold',
    marginBottom:15
``
  },

  // image: {
  //   height: 150,
  //   width: 300,
  //   marginLeft: 50,
  //   marginTop: 10,
  //   borderWidth: 1,
  //   borderStyle: 'solid',
  //   borderColor: 'green',
  // },
});

export default Price;
