function generateChessBoard(num = 8) {
  let board = '';

  for (let i = 0; i < num; i++) {

    for (let j = 0; j < num; j++) {

      if ((i + j) % 2 == 0) {
        board += '#';
      } else {
        board += ' ';
      }
    }
    board += '\n';
  }
  return board;
}

console.log(generateChessBoard());

