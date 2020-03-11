import * as React from 'react';
import {getState, setState} from '../components/state.js'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';

export default function LinksScreen(){

  let status = '';
  React.useEffect(()=>{
    status = getState();
  });
  return(
    
    <View style={styles.theme}>
      <Text style={styles.text}>{status}</Text>
      <SliderBox 
      images={data} 
      sliderBoxHeight={'90%'} 
      />
      
    </View>
  )
  }

  const styles = StyleSheet.create({
    text: {
    fontSize : 23,
    color: '#AEEB34',
    },
    theme: {
      backgroundColor: 'black',
      alignItems: 'center',
      
    }
    });





const data = [
  'https://i.imgur.com/uvFEcJN.jpg',
  'https://i.imgur.com/xGmX4h3.jpg',
  'https://i.imgur.com/WIo04oj.gif',
  'https://i.imgur.com/dRxnay8.jpg',
  'https://i.imgur.com/C8uoUMm.jpg',
  'https://i.imgur.com/J71bAQJ.jpg',
  'https://i.imgur.com/yDfNogI.jpg',
  'https://i.imgur.com/5w3cnCE.jpg',
  'https://i.imgur.com/OM1jAhs.gif',

]







