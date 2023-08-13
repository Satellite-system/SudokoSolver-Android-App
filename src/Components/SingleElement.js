/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
   Text,
   View, TextInput,
 } from 'react-native';

const SingleElement = ({value, isDarkMode, handleCellChange, rowIndex, colIndex }) => {

  return (
      <View style={{borderWidth: 0.5, borderColor: isDarkMode ? 'white' : 'black', flex:1, padding: 1, width: 40, height: 40, borderRightWidth: (colIndex === 2 || colIndex === 5 || colIndex === 8) ? 2 : 0.5, borderLeftWidth: colIndex === 0 ? 2 : 0.5, borderTopWidth: (rowIndex === 0 || rowIndex === 3 || rowIndex === 6) ? 2 : 0.5, borderBottomWidth: rowIndex === 8 ? 2 : 0.5 }}>
      <TextInput style={{color: isDarkMode ? 'white' : 'black', textAlign:'center'}} 
      value={value === 0 ? '' : value.toString()} // Convert to string 
      // onChangeText={onChangeText} 
      onChangeText={(text) => handleCellChange(rowIndex, colIndex, text)}
      keyboardType="numeric" maxLength={1} />
      </View>
  )
}

export default SingleElement;
