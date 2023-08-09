/* eslint-disable space-infix-ops */
/* eslint-disable no-trailing-spaces */
/* eslint-disable keyword-spacing */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {
   Text,
   View,
 } from 'react-native';

 const Algorithm = () => {
    
    // -------------------------------------------------------------------
    let N = 9;
    let grid = [[ 3, 0, 6, 5, 0, 8, 4, 0, 0 ],
                [ 5, 2, 0, 0, 0, 0, 0, 0, 0 ],
                [ 0, 8, 7, 0, 0, 0, 0, 3, 1 ],
                [ 0, 0, 3, 0, 1, 0, 0, 8, 0 ],
                [ 9, 0, 0, 8, 6, 3, 0, 0, 5 ],
                [ 0, 5, 0, 0, 9, 0, 6, 0, 0 ],
                [ 1, 3, 0, 0, 0, 0, 2, 5, 0 ],
                [ 0, 0, 0, 0, 0, 0, 0, 7, 4 ],
                [ 0, 0, 5, 2, 0, 6, 3, 0, 0 ] ];


    //Function to find a solved Sudoku. 
    const isPossible = (arr, curr_row, curr_col, val) => {
        for(let i= 0; i < N; i++){
            if(arr[curr_row][i] === val) {return false;} 
            if(arr[i][curr_col] === val) {return false;} 
        }
        
        for (let i = 0; i < N; i++) {
         const subgridRow = Math.floor(3 * (curr_row / 3) + i / 3);
         const subgridCol = Math.floor(3 * (curr_col / 3) + i % 3);
         if (arr[subgridRow][subgridCol] === val) {
             return false;
         }
      }
        
        return true; 
    }

    const SolveSudoku_helper = (arr)=> {
        for(let i = 0; i < N; i++){
            for(let j = 0; j< N; j++){
                if(arr[i][j] === 0){
                    for(let index = 1; index <= 9; index++){
                        if(isPossible(arr,i,j,index)){
                            arr[i][j] = index; 
                            var nextFunCall = SolveSudoku_helper(arr);
                            if(nextFunCall)  {return true;} 
                            else  {arr[i][j] = 0;} 
                        }
                    }
                    if(arr[i][j] === 0) {return false;} 
                }
            }
        }
        return true; 
    }

    const SolveSudoku = () => { 
      console.log(">> SolveSudoko_helper Fxn ::  ", SolveSudoku_helper(grid));
      return SolveSudoku_helper(grid); 
    }
    
    //Function to print grids of the Sudoku.
    const printGrid = (arr) => {
        // Your code here 
        for(let i =0; i< N; i++){
            for(let j = 0; j < N; j++){
               console.log(arr[i][j],' '); 
            } 
        }
        
    };

             
    useEffect(() => {
      if(SolveSudoku() === true){
         printGrid(grid);
      }else {
         console.log(' No Solution Exists ');
      }
    });

// -----------------------------------------------------------

  return (
      <View style={{borderWidth: 0.5, flex:1, padding: 10}}>
      <Text style={{textAlign:'center'}}>V----------V</Text>
      
      </View>
  );
};

export default Algorithm;
