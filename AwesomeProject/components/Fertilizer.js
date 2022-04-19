/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import api from '../api/api';

const Fertilizer = () => {
  // const [selectedCrop, setSelectedCrop] = useState('');
  // const [selectedSoil, setSelectedSoil] = useState('');
  const [result, setResult] = useState('');

  const [formData, setFormData] = useState({
    Temparature: '',
    Humidity: '',
    Moisture: '',
    soil_type: 'select',
    crop_type: 'select',
    Nitrogen: '',
    Potassium: '',
    Phosphorous: '',
  });

  const soilTypes = ['Sandy', 'Loamy', 'Black', 'Red', 'Clayey'];
  const cropTypes = [
    'Maize',
    'Sugarcane',
    'Cotton',
    'Tobacco',
    'Paddy',
    'Barley',
    'Wheat',
    'Millets',
    'Oil seeds',
    'Pulses',
    'Ground Nuts',
  ];

  const handleChange = (value, changeKey) => {
    // console.log(changeKey, e.target.value)
    let newData = {...formData};
    // if (e.target.value){

    //   newData[changeKey] = e.target.value;
    // } else {
    newData[changeKey] = value;
    // }

    setFormData(newData);
    console.log(formData);
  };

  const clear = () => {
    setFormData({});
    setResult('');
  };

  const handlePress = async () => {
    console.log('submit button clicked');
    let request = new FormData();

    for (let key in formData) {
      request.append(key, formData[key]);
    }
    console.log('REQUEST : ', request);
    // const response = await api.post(
    //   "/predict_fertilizer",
    //   request
    // )

    // const responseData = response.data;
    // console.log("Response Data : " , responseData)

    // await api.post("/predict_fertilizer", request).then(response => {
    //   const responseData = response.data;
    //   console.log("RESPONSE : " ,response.data)

    // }).catch(e => console.log("error : " , e));

    try {
      const response = await fetch('http://10.0.2.2:5000/predict_fertilizer', {
        method: 'Post',
        body: request,
      });
      const json = await response.json();
      console.log(json);
      if (json.final_prediction != null) {
        let predictedFertilizer = json.final_prediction;
        console.log(predictedFertilizer);
        if (predictedFertilizer != null) {
          setResult(predictedFertilizer + ' Fertilizer');
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ScrollView>
      {/* <Text>This is Fertilizer Page</Text> */}

      <Text style={styles.text}>Temperature (Celcius) : </Text>
      <TextInput
        value={formData.Temparature}
        onChangeText={value => handleChange(value, 'Temparature')}
        style={styles.inputFieldBox}
      />

      <Text style={styles.text}>Humidity (%) : </Text>
      <TextInput
        value={formData.Humidity}
        onChangeText={value => handleChange(value, 'Humidity')}
        style={styles.inputFieldBox}
      />

      <Text style={styles.text}>Moisture : </Text>
      <TextInput
        value={formData.Moisture}
        onChangeText={value => handleChange(value, 'Moisture')}
        style={styles.inputFieldBox}
      />

      <Text style={styles.text}>Soil Type : </Text>
      <View style={styles.picker}>
        <Picker
          // selectedValue={selectedSoil}
          selectedValue={formData.soil_type}
          // onValueChange={(value, index) => setSelectedSoil(value)}
          onValueChange={(value, index) => handleChange(value, 'soil_type')}>
          <Picker.Item label="--Select--" disabled={true} value="" />
          {soilTypes.map(item => (
            <Picker.Item label={item} value={item} key={item} />
          ))}
          {/* <Picker.Item label="Alluvial soil" value="Alluvial soil" />
        <Picker.Item label="Black soil" value="Black soil" />
        <Picker.Item label="Red & Yellow soil" value="Red & Yellow soil" />
        <Picker.Item label="Sandy soil" value="Sandy soil" />
        <Picker.Item label=" Desert soil" value="Desert soil" />
        <Picker.Item label="Alkaline soil" value="Alkaline soil" />
        <Picker.Item label="Marshy soil" value="Marshy soil" /> */}
        </Picker>
      </View>
      <Text style={styles.text}>Crop : </Text>
      <View style={styles.picker}>
        <Picker
          // selectedValue={selectedCrop}
          // onValueChange={(value, index) => setSelectedCrop(value)}
          selectedValue={formData.crop_type}
          onValueChange={(value, index) => handleChange(value, 'crop_type')}>
          <Picker.Item label="--Select--" disabled={true} value="" />

          {cropTypes.map(item => (
            <Picker.Item label={item} value={item} key={item} />
          ))}
          {/* <Picker.Item label="Paddy" value="Paddy" />
        <Picker.Item label="Wheat" value="Wheat" />
        <Picker.Item label="Corn" value="Corn" />
        <Picker.Item label="Sugarcane" value="Sugarcane" />
        <Picker.Item label="Turmeric" value="Turmeric" />
        <Picker.Item label="Sunflower" value="Sunflower" />
        <Picker.Item label="Groundnut" value="Groundnut" /> */}
        </Picker>
      </View>
      <Text style={styles.text}>Nitrogen : </Text>
      <TextInput
        value={formData.Nitrogen}
        onChangeText={value => handleChange(value, 'Nitrogen')}
        style={styles.inputFieldBox}
      />

      <Text style={styles.text}>Phosporous : </Text>
      <TextInput
        value={formData.Phosphorous}
        onChangeText={value => handleChange(value, 'Phosphorous')}
        style={styles.inputFieldBox}
      />

      <Text style={styles.text}>Potassium : </Text>
      <TextInput
        value={formData.Potassium}
        onChangeText={value => handleChange(value, 'Potassium')}
        style={styles.inputFieldBox}
      />
      {/* 
      <Picker
        selectedValue={selectedCrop}
        onValueChange={(value, index) => setSelectedCrop(value)}>
        <Picker.Item label="Rice" value="Rice" />
        <Picker.Item label="Wheat" value="Wheat" />
        <Picker.Item label="Corn" value="Corn" />
      </Picker> */}

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
          <Text style={styles.button}>Get Fertilizers</Text>
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
    marginBottom: 10,
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
    marginBottom: 15,
  },
});

export default Fertilizer;
