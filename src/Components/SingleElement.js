/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
   Text,
   View, TextInput,
 } from 'react-native';

const SingleElement = ({value, isDarkMode, handleCellChange, rowIndex, colIndex }) => {

  // console.log("Value :: ", value)
  const [num, setNum] = useState(value)
 
  const onChangeText = (val)=>{
    console.log(">> ", val);
    setNum(val);
  }

  return (
      <View style={{borderWidth: 0.5, borderColor: isDarkMode ? 'white' : 'black', flex:1, padding: 1}}>
      <TextInput style={{color: isDarkMode ? 'white' : 'black', textAlign:'center'}} 
      value={value === 0 ? '' : value.toString()} // Convert to string 
      // onChangeText={onChangeText} 
      onChangeText={(text) => handleCellChange(rowIndex, colIndex, text)}
      keyboardType="numeric" maxLength={1} />
      </View>
  )
}

export default SingleElement;
