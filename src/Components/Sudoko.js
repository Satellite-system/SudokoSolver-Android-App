/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import SingleElement from './SingleElement';

const Sudoko = () => {
  const size = 9; // Size of the Sudoku grid

  const renderCells = () => {
    const cells = [];
    for (let i = 0; i < size; i++) {
      const rowCells = [];
      for (let j = 0; j < size; j++) {
        rowCells.push(<SingleElement key={j} style={styles.cell}value={i + j} />);
      }
      cells.push(
        <View key={i} style={styles.row}>
          {rowCells}
        </View>,
      );
    }
    return cells;
  };

  return (
  <View style={styles.container,{height: 600}}>
   <ScrollView>
   {renderCells()}
   </ScrollView>
   </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: 'black',
  },
});

export default Sudoko;
