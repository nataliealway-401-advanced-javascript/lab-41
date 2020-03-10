import * as React from 'react';
import {getState, setState} from '../components/state.js';
import {useState, useEffect } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Button, Slider, YellowBox } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import * as Speech from 'expo-speech';
import * as Battery from 'expo-battery';
import { Asset } from 'expo-asset';
import * as ImageManipulator from 'expo-image-manipulator';


export default function HomeScreen() {
  const [value, onChangeText] = useState('');
  const [rate, setRate] = useState(0);
  const [pitch, setPitch ] = useState(0);
  const [battery, setBattery] = useState(4);
  const [ready, setReady] = useState(false);
  const [image, setImage] = useState('');


  useEffect(() => {
    (async () => {
      const image = Asset.fromModule(require('../assets/images/shakira.jpg'));
      await image.downloadAsync();
      setReady(true);
      setImage(image);
    })();
  }, []);

  const _rotate90andFlip = async () => {
    const manipResult = await ImageManipulator.manipulateAsync(
      image.localUri || image.uri,
      [{ flip: ImageManipulator.FlipType.Horizontal }],
      { compress: 1, format: ImageManipulator.SaveFormat.PNG }
    );
    setImage(manipResult);
  };

  const _renderImage = () => {
  
  };





useEffect(() => {
  try {
    batteriez();
  } catch {
    console.log('stuff')
  }
 });

 batteriez = async () => {
  setBattery(await Battery.getBatteryLevelAsync());
 }


  const speak = input => {  
    Speech.speak(value, {
      rate: rate,
      pitch: pitch,
    });
  }
  return (
    <View style={styles.theme}>
        <Text style={styles.text}>Type something!</Text>
      <TextInput 
        style={{ height: 40, 
          width: '100%', 
          borderRadius: 100, 
          padding: 10, 
          borderColor: 'gray', 
          backgroundColor: '#363636', 
          borderWidth: 1, 
          color:'#AEEB34',}}
        onChangeText={text => {
          onChangeText(text);
          setState(text);
        }}
        value={value}
      />
      <Button onPress={() => speak(value)} title="Push to speak" />

    <Text style={styles.text}>Rate</Text>
      <Slider
   
    style={{width: 200, height: 40}}
    onValueChange={sliderValue => setRate(sliderValue)}
    minimumValue={0}
    maximumValue={10}
    minimumTrackTintColor="#FFFFFF"
    maximumTrackTintColor="gray"
  />
  <Text style={styles.text}>Pitch</Text>
<Slider
    style={{width: 200, height: 40}}
    onValueChange={sliderValue => setPitch(sliderValue)}
    minimumValue={0}
    maximumValue={10}
    minimumTrackTintColor="#FFFFFF"
    maximumTrackTintColor="gray"
  />
<Text style={styles.text}>Battery life:</Text>
  <Text style={{color: 'white'}}>{`${Math.floor(battery*100)}%`}</Text>
 
 <View style={{ marginVertical: 20, alignItems: 'center', justifyContent: 'center' }}>
        <Image
          source={{ uri: image.localUri || image.uri }}
          style={{ width: 300, height: 300, resizeMode: 'contain' }}
        />
         
      <Button title="Dance Shakira dance!" onPress={_rotate90andFlip} />
    </View>
    </View>
  );
}
HomeScreen.navigationOptions = {
  header: null,
};




const styles = StyleSheet.create({
text: {
fontSize : 23,
color: '#AEEB34',
},
theme: {
  backgroundColor: 'black',
  height: '100%',
  alignItems: 'center',
  
}
});
