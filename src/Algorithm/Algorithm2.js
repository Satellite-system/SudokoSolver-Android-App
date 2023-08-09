/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import SingleElement from '../Components/SingleElement';

const N = 9; // Size of the Sudoku grid

const Algo = ({isDarkMode}) => {
  const [grid, setGrid] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ]);

//   Update grid Value
const handleCellChange = (row, col, newValue) => {
   if(typeof newValue === 'string'){
      newValue = Number(newValue);
   }
   console.log("New Value >> ", newValue, " || ", typeof newValue);
   const updatedGrid = [...grid]; // Create a copy of the grid array
   updatedGrid[row][col] = newValue; // Update the specific value
   setGrid(updatedGrid); // Update the state with the new array
 };

  const isPossible = (row, col, num) => {
    for (let i = 0; i < N; i++) {
      if (grid[row][i] === num || grid[i][col] === num) {
        return false;
      }
    }

    const subgridStartRow = row - (row % 3);
    const subgridStartCol = col - (col % 3);
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (grid[subgridStartRow + i][subgridStartCol + j] === num) {
          return false;
        }
      }
    }

    return true;
  };

  const solveSudoku = () => {
    for (let row = 0; row < N; row++) {
      for (let col = 0; col < N; col++) {
        if (grid[row][col] === 0) {
          for (let num = 1; num <= 9; num++) {
            if (isPossible(row, col, num)) {
              grid[row][col] = num;
              if (solveSudoku()) {
                return true;
              }
              handleCellChange(row,col,0);
            //   grid[row][col] = 0;
            }
          }
          console.log("False");
          return false;
        }
      }
    }
    console.log(grid);
    return true;
  };

//   useEffect(() => {
//     solveSudoku();
//     // Now 'grid' contains the solved Sudoku puzzle
//     console.log(grid);

//   });

  return (
    <View style={styles.container}>
      {/* Display the Sudoku grid visually */}
      <Button onPress={solveSudoku} title="Solve" />
      <View style={{height:30, width: '100%'}} />
      {grid.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((cellValue, colIndex) => (
            <View key={colIndex} style={styles.cell,{height: 50}}>
              {/* <Text style={{color: '#000'}}>{cellValue}</Text> */}
              <SingleElement value={cellValue} isDarkMode={isDarkMode} handleCellChange={handleCellChange} rowIndex={rowIndex} colIndex={colIndex} />
              {/* {console.log(cellValue)} */}
            </View>
          ))}
        </View>
      ))}
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
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Algo;
