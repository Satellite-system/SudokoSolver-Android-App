#include <algorithm>
#include <bits/stdc++.h>
#include <map>
#include <vector>

class Solution {
    public:
    //Function to find a solved Sudoku. 
    bool isPossible(int grid[N][N], int curr_row,int curr_col,int val){
        for(int i= 0; i < N; i++){
            if(grid[curr_row][i] == val)return false; 
            if(grid[i][curr_col] == val)return false; 
        }
        
        for(int i = 0;i< N; i++){
            if(grid[3*(curr_row/3)+i/3][3*(curr_col/3)+i%3] == val)return false; 
        }
        
        return true; 
    }
    bool SolveSudoku_helper(int grid[N][N]) {
        for(int i = 0; i < N; i++){
            for(int j = 0; j< N; j++){
                if(grid[i][j] == 0){
                    for(int index = 1; index <= 9; index++){
                        if(isPossible(grid,i,j,index)){
                            grid[i][j] = index; 
                            bool nextFunCall = SolveSudoku_helper(grid);
                            if(nextFunCall){
                                return true; 
                            }
                            else{
                                 grid[i][j] = 0; 
                            }
                        }
                    }
                    if(grid[i][j] == 0)return false; 
                }
            }
        }
        return true; 
    }
    bool SolveSudoku(int grid[N][N])  { 
        return SolveSudoku_helper(grid); 
    }
    
    //Function to print grids of the Sudoku.
    void printGrid (int grid[N][N]) {
        // Your code here 
        for(int i =0; i< N; i++){
            for(int j = 0; j < N; j++){
                cout<<grid[i][j]<<" "; 
            } 
        }
        
    }
};

int main(){
   int grid[9][9] = {{ 3, 0, 6, 5, 0, 8, 4, 0, 0 },
                     { 5, 2, 0, 0, 0, 0, 0, 0, 0 },
                     { 0, 8, 7, 0, 0, 0, 0, 3, 1 },
                     { 0, 0, 3, 0, 1, 0, 0, 8, 0 },
                     { 9, 0, 0, 8, 6, 3, 0, 0, 5 },
                     { 0, 5, 0, 0, 9, 0, 6, 0, 0 },
                     { 1, 3, 0, 0, 0, 0, 2, 5, 0 },
                     { 0, 0, 0, 0, 0, 0, 0, 7, 4 },
                     { 0, 0, 5, 2, 0, 6, 3, 0, 0 } };
               
   Solution ob;
   if(ob.SolveSudoku(grid)==true){
      ob.printGrid(grid);
   }else {
      cout<< " No Solution Exists \n";
   }

   return 0;
}