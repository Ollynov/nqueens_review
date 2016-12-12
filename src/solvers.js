/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  // go through every spot possible and check to see if there is any row conflict. If not, then place a rook
  // once you hit n rooks, return the board

  var board = new Board({n: n});
  var count = 0;
  console.log('here at least? wtf? ')
  for (var k = 0; k < n; k++) {
    for (var b = 0; b < n; b++) {
      board.togglePiece(k, b);
      console.log('ok we just temporarily toggled for k and b values ', k, ' ', b)
      if (board.hasAnyRowConflicts() === false && board.hasAnyColConflicts() === false) {
        // keep plaed down
        console.log('no conflicts, and board looks like ', board, ' and count is ', count, ' and n was ', n);
        count++;
        if (count === n) {
          console.log('we in here bruh and board is ', board);
          return board;
        }
      } else {
        board.togglePiece(k, b);
      }
    }
  }
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(board));
  //return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solution = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solution = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
