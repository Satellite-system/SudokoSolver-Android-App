/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
   Text,
   View,
 } from 'react-native';

const Header = ({isDarkMode}) => {
  return (
      <View style={{borderWidth: 0.5, borderColor: isDarkMode ? 'white' : 'black', flex:1, padding: 10}}>
      <Text style={{color: isDarkMode ? 'white' : 'black', textAlign:'center'}}>Sudoko Solver</Text>
      </View>
  )
}

export default Header;
