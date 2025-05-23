export const MODES = {
    veryEasy: {
        key: "veryEasy",
        name: "Very Easy",
        value: [15, 25], // no. of empty boxes
        mistakes: 5,
        hints: 6
    },
    easy: {
        key: "easy",
        name: "Easy",
        value: [25, 40],
        mistakes: 4,
        hints: 5
    },
    medium: {
        key: "medium",
        name: "Medium",
        value: [40, 60],
        mistakes: 3,
        hints: 4
    },
    hard: {
        key: "hard",
        name: "Hard",
        value: [60, 70],
        mistakes: 2,
        hints: 4
    },
    extreme: {
        key: "extreme",
        name: "Extreme",
        value: [70, 80],
        mistakes: 2,
        hints: 3
    },
};

// function to generate random number 

export function generateRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)+min) ;
}
// isSafe is used to check whether the number is fit for the particular box or not 
export function isSafe(board, row, col, num) {
  for (let x = 0; x < 9; x++) {
    if (board[row][x] == num || board[x][col] == num) {
      return false;
    }
  }
  const iRow = Math.floor(row / 3) * 3;
  const iCol = Math.floor(col / 3) * 3;
  for (let x = iRow; x < iRow + 3; x++) {
    for (let y = iCol; y < iCol + 3; y++) {
      if (board[x][y] == num) return false;
    }
  }
  return true;
}

// function to generate sudoku whole board is filled with the number here and after that we will make some random cells empty 
export function genrateSuduko(board, randomArray) {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] == 0) {
        for (let num of randomArray) {
          if (isSafe(board, row, col, num)) {
            board[row][col] = num;
            if (genrateSuduko(board, randomArray)) {
              return true;
            }
            board[row][col] = 0;
          }
        }
        return false;
      }
    }
  }
  return true;
}

