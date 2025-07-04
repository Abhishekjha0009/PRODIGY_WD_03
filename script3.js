let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let isGameActive = true;

function handleClick(index) {
  if (board[index] === "" && isGameActive) {
    board[index] = currentPlayer;
    document.getElementsByClassName("cell")[index].innerText = currentPlayer;

    if (checkWinner()) {
      document.getElementById("status").innerText = `🎉 Player ${currentPlayer} wins!`;
      isGameActive = false;
    } else if (!board.includes("")) {
      document.getElementById("status").innerText = "🤝 It's a tie!";
      isGameActive = false;
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      document.getElementById("status").innerText = `Player ${currentPlayer}'s move 🕹️`;
    }
  }
}

function checkWinner() {
  const winPatterns = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
  ];

  return winPatterns.some(pattern => {
    let [a, b, c] = pattern;
    return board[a] === currentPlayer && board[b] === currentPlayer && board[c] === currentPlayer;
  });
}

function restart() {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  isGameActive = true;

  const cells = document.getElementsByClassName("cell");
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerText = "";
  }

  document.getElementById("status").innerText = "X starts the game 🕹️";
}
