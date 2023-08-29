/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import { Button, Text, View } from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
// import TextRecognition from 'react-native-text-recognition';
// import TesseractOcr, { LANG_ENGLISH } from 'react-native-tesseract-ocr';
// import TextRecognition from '@react-native-ml-kit/text-recognition';

const ImageHandler = () => {
const [Image, setImage] = useState();

   // useEffect(() => {
   //   launchImageLibrary({}, setImage);
   // }, [])

    const textRecognition = async ()=>{
      // const result = await TextRecognition.recognize(Image.assets[0].uri);
      // console.log("Detected ", Image.assets[0].uri);
      // console.log("Result >> ", result);
//       const tessOptions = {};
//       const result = await TextRecognition.recognize(Image.assets[0].uri);

//       console.log('Recognized text:', result.text);

//       for (let block of result.blocks) {
//       console.log('Block text:', block.text);
//       console.log('Block frame:', block.frame);

//       for (let line of block.lines) {
//          console.log('Line text:', line.text);
//          console.log('Line frame:', line.frame);
//       }
// }
//       // const result = await TesseractOcr.recognize(Image.assets[0].uri, LANG_ENGLISH, tessOptions);
//       console.log("Result >> ", result);

   }

   useEffect(() => {
      if (Image){
         textRecognition();
         console.log("Url >>> ", Image.assets[0].uri);
      }
     console.log("Image >>> ", Image);
   }, [Image])
   
   
   const ImageChoser = ()=>{
      console.log("CLicked Btn>> ")
      launchImageLibrary({}, setImage);
   }

  return (
    <View>
      <Text>
         Hello BOy!!
      </Text>
      <Button onPress={()=>ImageChoser()} title="Pick Image"/>
   </View>
  )
}

export default ImageHandler