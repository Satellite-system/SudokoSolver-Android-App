/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Switch,
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import SingleElement from './src/Components/SingleElement';
import Header from './src/Components/Header';
import Algorithm from './src/Algorithm/Algorithm';
import Algo from './src/Algorithm/Algorithm2';


function App(): JSX.Element {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleSwitch = () =>{ setIsDarkMode(previousState => !previousState), console.log('Tapped') }

  const [grid, setGrid] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [5, 2, 0, 0, 0, 0, 0, 0, 0],
    [0, 8, 7, 0, 0, 0, 0, 3, 1],
    [0, 0, 3, 0, 1, 0, 0, 8, 0],
    [9, 0, 0, 8, 6, 3, 0, 0, 5],
    [0, 5, 0, 0, 9, 0, 0, 0, 0],
    [1, 3, 0, 0, 0, 0, 2, 5, 0],
    [0, 0, 0, 0, 0, 0, 0, 7, 4],
    [0, 0, 5, 2, 0, 6, 3, 0, 0],
  ]);

  console.log("Grid >> ", grid[1][0]);
  // const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle,{height: "100%"}}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header isDarkMode={isDarkMode}/>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isDarkMode}
          style={{marginTop: 20, height: 25, marginBottom: 25}}
        />
        {/* <Algorithm /> */}
        <Algo isDarkMode = {isDarkMode} />  
        {/* <RenderSudoko /> */}
        {/* <View style={{flex: 1, display: 'flex', flexDirection: 'row', marginHorizontal: 15 }}>
          <View style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                borderWidth: 2,
                borderColor: isDarkMode ? 'white' : 'black',
                // width: '30%',
              }}>
              <View style={{flex: 1, display: 'flex', flexDirection: 'row', backgroundColor: '#2FF902'}}>
                <SingleElement value={grid[0][0]} isDarkMode={isDarkMode}  />
                <SingleElement value={grid[0][1]} isDarkMode={isDarkMode} />
                <SingleElement value={grid[0][2]} isDarkMode={isDarkMode} />
              </View>
              <View style={{flex: 1, display: 'flex', flexDirection: 'row', backgroundColor: '#F1F902'}}>
                <SingleElement value={grid[1][0]} isDarkMode={isDarkMode} />
                <SingleElement value={grid[1][1]} isDarkMode={isDarkMode} />
                <SingleElement value={grid[1][2]} isDarkMode={isDarkMode} />
              </View>
              <View style={{flex: 1, display: 'flex', flexDirection: 'row', backgroundColor:'#F94502'}}>
                <SingleElement value={grid[2][0]} isDarkMode={isDarkMode} />
                <SingleElement value={grid[2][1]} isDarkMode={isDarkMode} />
                <SingleElement value={grid[2][2]} isDarkMode={isDarkMode} />
              </View>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                borderWidth: 2,
                borderColor: isDarkMode ? 'white' : 'black',
              }}>
              <View style={{flex: 1, display: 'flex', flexDirection: 'row', backgroundColor: '#0281F9'}}>
                <SingleElement value={grid[3][0]} isDarkMode={isDarkMode} />
                <SingleElement value={grid[3][1]} isDarkMode={isDarkMode} />
                <SingleElement value={grid[3][2]} isDarkMode={isDarkMode} />
              </View>
              <View style={{flex: 1, display: 'flex', flexDirection: 'row'}}>
                <SingleElement value={grid[4][0]} isDarkMode={isDarkMode} />
                <SingleElement value={grid[4][1]} isDarkMode={isDarkMode} />
                <SingleElement value={grid[4][2]} isDarkMode={isDarkMode} />
              </View>
              <View style={{flex: 1, display: 'flex', flexDirection: 'row', backgroundColor:'#F94502'}}>
                <SingleElement value={grid[5][0]} isDarkMode={isDarkMode} />
                <SingleElement value={grid[5][1]} isDarkMode={isDarkMode} />
                <SingleElement value={grid[5][2]} isDarkMode={isDarkMode} />
              </View>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                borderWidth: 2,
                borderColor: isDarkMode ? 'white' : 'black',
              }}>
              <View style={{flex: 1, display: 'flex', flexDirection: 'row', backgroundColor:'#F902B5'}}>
                <SingleElement value={grid[6][0]} isDarkMode={isDarkMode} />
                <SingleElement value={grid[6][1]} isDarkMode={isDarkMode} />
                <SingleElement value={grid[6][2]} isDarkMode={isDarkMode} />
              </View>
              <View style={{flex: 1, display: 'flex', flexDirection: 'row'}}>
                <SingleElement value="1" isDarkMode={isDarkMode} />
                <SingleElement value="2" isDarkMode={isDarkMode} />
                <SingleElement value="3" isDarkMode={isDarkMode} />
              </View>
              <View style={{flex: 1, display: 'flex', flexDirection: 'row'}}>
                <SingleElement value="1" isDarkMode={isDarkMode} />
                <SingleElement value="2" isDarkMode={isDarkMode} />
                <SingleElement value="3" isDarkMode={isDarkMode} />
              </View>
            </View>
          </View>
          <View style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                borderWidth: 2,
                borderColor: isDarkMode ? 'white' : 'black',
              }}>
              <View style={{flex: 1, display: 'flex', flexDirection: 'row'}}>
                <SingleElement value="1" isDarkMode={isDarkMode} />
                <SingleElement value="2" isDarkMode={isDarkMode} />
                <SingleElement value="3" isDarkMode={isDarkMode} />
              </View>
              <View style={{flex: 1, display: 'flex', flexDirection: 'row'}}>
                <SingleElement value="1" isDarkMode={isDarkMode} />
                <SingleElement value="2" isDarkMode={isDarkMode} />
                <SingleElement value="3" isDarkMode={isDarkMode} />
              </View>
              <View style={{flex: 1, display: 'flex', flexDirection: 'row'}}>
                <SingleElement value="1" isDarkMode={isDarkMode} />
                <SingleElement value="2" isDarkMode={isDarkMode} />
                <SingleElement value="3" isDarkMode={isDarkMode} />
              </View>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                borderWidth: 2,
                borderColor: isDarkMode ? 'white' : 'black',
              }}>
              <View style={{flex: 1, display: 'flex', flexDirection: 'row'}}>
                <SingleElement value="1" isDarkMode={isDarkMode} />
                <SingleElement value="2" isDarkMode={isDarkMode} />
                <SingleElement value="3" isDarkMode={isDarkMode} />
              </View>
              <View style={{flex: 1, display: 'flex', flexDirection: 'row'}}>
                <SingleElement value="1" isDarkMode={isDarkMode} />
                <SingleElement value="2" isDarkMode={isDarkMode} />
                <SingleElement value="3" isDarkMode={isDarkMode} />
              </View>
              <View style={{flex: 1, display: 'flex', flexDirection: 'row'}}>
                <SingleElement value="1" isDarkMode={isDarkMode} />
                <SingleElement value="2" isDarkMode={isDarkMode} />
                <SingleElement value="3" isDarkMode={isDarkMode} />
              </View>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                borderWidth: 2,
                borderColor: isDarkMode ? 'white' : 'black',
              }}>
              <View style={{flex: 1, display: 'flex', flexDirection: 'row'}}>
                <SingleElement value="1" isDarkMode={isDarkMode} />
                <SingleElement value="2" isDarkMode={isDarkMode} />
                <SingleElement value="3" isDarkMode={isDarkMode} />
              </View>
              <View style={{flex: 1, display: 'flex', flexDirection: 'row'}}>
                <SingleElement value="1" isDarkMode={isDarkMode} />
                <SingleElement value="2" isDarkMode={isDarkMode} />
                <SingleElement value="3" isDarkMode={isDarkMode} />
              </View>
              <View style={{flex: 1, display: 'flex', flexDirection: 'row'}}>
                <SingleElement value="1" isDarkMode={isDarkMode} />
                <SingleElement value="2" isDarkMode={isDarkMode} />
                <SingleElement value="3" isDarkMode={isDarkMode} />
              </View>
            </View>
          </View>
          <View style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                borderWidth: 2,
                borderColor: isDarkMode ? 'white' : 'black',
              }}>
              <View style={{flex: 1, display: 'flex', flexDirection: 'row'}}>
                <SingleElement value="1" isDarkMode={isDarkMode} />
                <SingleElement value="2" isDarkMode={isDarkMode} />
                <SingleElement value="3" isDarkMode={isDarkMode} />
              </View>
              <View style={{flex: 1, display: 'flex', flexDirection: 'row'}}>
                <SingleElement value="1" isDarkMode={isDarkMode} />
                <SingleElement value="2" isDarkMode={isDarkMode} />
                <SingleElement value="3" isDarkMode={isDarkMode} />
              </View>
              <View style={{flex: 1, display: 'flex', flexDirection: 'row'}}>
                <SingleElement value="1" isDarkMode={isDarkMode} />
                <SingleElement value="2" isDarkMode={isDarkMode} />
                <SingleElement value="3" isDarkMode={isDarkMode} />
              </View>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                borderWidth: 2,
                borderColor: isDarkMode ? 'white' : 'black',
              }}>
              <View style={{flex: 1, display: 'flex', flexDirection: 'row'}}>
                <SingleElement value="1" isDarkMode={isDarkMode} />
                <SingleElement value="2" isDarkMode={isDarkMode} />
                <SingleElement value="3" isDarkMode={isDarkMode} />
              </View>
              <View style={{flex: 1, display: 'flex', flexDirection: 'row'}}>
                <SingleElement value="1" isDarkMode={isDarkMode} />
                <SingleElement value="2" isDarkMode={isDarkMode} />
                <SingleElement value="3" isDarkMode={isDarkMode} />
              </View>
              <View style={{flex: 1, display: 'flex', flexDirection: 'row'}}>
                <SingleElement value="1" isDarkMode={isDarkMode} />
                <SingleElement value="2" isDarkMode={isDarkMode} />
                <SingleElement value="3" isDarkMode={isDarkMode} />
              </View>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                borderWidth: 2,
                borderColor: isDarkMode ? 'white' : 'black',
              }}>
              <View style={{flex: 1, display: 'flex', flexDirection: 'row'}}>
                <SingleElement value="1" isDarkMode={isDarkMode} />
                <SingleElement value="2" isDarkMode={isDarkMode} />
                <SingleElement value="3" isDarkMode={isDarkMode} />
              </View>
              <View style={{flex: 1, display: 'flex', flexDirection: 'row'}}>
                <SingleElement value="1" isDarkMode={isDarkMode} />
                <SingleElement value="2" isDarkMode={isDarkMode} />
                <SingleElement value="3" isDarkMode={isDarkMode} />
              </View>
              <View style={{flex: 1, display: 'flex', flexDirection: 'row'}}>
                <SingleElement value="1" isDarkMode={isDarkMode} />
                <SingleElement value="2" isDarkMode={isDarkMode} />
                <SingleElement value="3" isDarkMode={isDarkMode} />
              </View>
            </View>
          </View>
        </View> */}

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
