export default function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  let winner;
  for (var i = 0; i < lines.length; i++) {
    let total = 1;
    for (var j = 0; j < lines[i].length - 1; j++) {
      if (!squares[lines[i][j]]) break;
      if(squares[lines[i][j]] === squares[lines[i][j+1]]) {
        total++;
        if (total === lines[0].length) {
          winner = squares[lines[i][j]];
          break;
        }
      }
    }
    if (winner) break;
  }
  return winner;
}
