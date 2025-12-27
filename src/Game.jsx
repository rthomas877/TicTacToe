import { useState, useEffect } from "react";
import AdsComponent from "../AdsComponent";

// Animated X Component
function AnimatedX() {
  return (
    <svg
      viewBox="0 0 100 100"
      className="w-[11vmin] h-[11vmin]"
      fill="none"
      stroke="black"
      strokeWidth="12"
      strokeLinecap="round"
    >
      <line x1="15" y1="15" x2="85" y2="85" className="x-line" />
      <line x1="85" y1="15" x2="15" y2="85" className="x-line delay" />
    </svg>
  );
}

// Animated O Component
function AnimatedO() {
  return (
    <svg
      viewBox="0 0 100 100"
      className="w-[11vmin] h-[11vmin]"
      fill="none"
      stroke="black"
      strokeWidth="12"
    >
      <circle cx="50" cy="50" r="35" className="o-circle" />
    </svg>
  );
}

// Win Line Component
function WinLine({ line }) {
  if (!line) return null;
  return (
    <svg
      viewBox="0 0 100 100"
      className="absolute inset-0 w-full h-full pointer-events-none"
    >
      <line
        x1={line.x1}
        y1={line.y1}
        x2={line.x2}
        y2={line.y2}
        className="win-line"
      />
    </svg>
  );
}



function Game({difficulty, setDifficulty, color1, setColor1, color2, setColor2, numPlayers, setNumPlayers}) {
  function getYear() {
    return new Date().getFullYear();
  }

  

  const [userTurnNumber, setUserTurnNumber] = useState(1);

  // Board state
  const [board, setBoard] = useState(Array(9).fill(""));
  const [currentTurn, setCurrentTurn] = useState("X");

  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);

  const WIN_LINES = [
    { cells: [0, 1, 2], x1: 7, y1: 16, x2: 93, y2: 16 },   // top row
    { cells: [3, 4, 5], x1: 7, y1: 50, x2: 93, y2: 50 },   // middle row
    { cells: [6, 7, 8], x1: 7, y1: 84, x2: 93, y2: 84 },   // bottom row
    { cells: [0, 3, 6], x1: 16, y1: 7, x2: 16, y2: 93 },   // left column
    { cells: [1, 4, 7], x1: 50, y1: 7, x2: 50, y2: 93 },   // middle column
    { cells: [2, 5, 8], x1: 84, y1: 7, x2: 84, y2: 93 },   // right column
    { cells: [0, 4, 8], x1: 9, y1: 9, x2: 91, y2: 91 },    // diagonal top-left → bottom-right
    { cells: [2, 4, 6], x1: 91, y1: 9, x2: 9, y2: 91 },    // diagonal top-right → bottom-left
  ];
  
  const [showEndModal, setShowEndModal] = useState(false);
  const [endMessage, setEndMessage] = useState(""); // "X wins!", "O wins!", or "Draw!"   

  const [winnerLine, setWinnerLine] = useState(null);

  function checkWinner(board) {
    for (const line of WIN_LINES) {
      const [a, b, c] = line.cells;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return line;
      }
    }
    return null;
  }

  function resetGame() {
    setBoard(Array(9).fill(""));
    setCurrentTurn("X");
    setWinnerLine(null);
    setShowEndModal(false);
    setEndMessage("");
  }

  function switchPlayer() {
    if (userTurnNumber === 1) {
        setUserTurnNumber(2);
    } else {
        setUserTurnNumber(1);
    }
  }
  
  function resetScore() {
    setPlayer1Score(0);
    setPlayer2Score(0);
  }

  useEffect(() => {
  
    if (userTurnNumber === 2) {
      handleClick(2);
    }
  
    return () => {
  
    };
  }, [board]);

  function handleClick(index) {
    if (board[index] !== "" || winnerLine) return;
  
    const newBoard = [...board];
    newBoard[index] = currentTurn;
    setBoard(newBoard);

    if (userTurnNumber === 1) {
      setUserTurnNumber(2);
    } else {
      setUserTurnNumber(1);
    }
  
    const win = checkWinner(newBoard);
    if (win) {
      setWinnerLine(win);
      setTimeout(() => {
        setEndMessage(`${currentTurn} wins!`);
        setShowEndModal(true);
      }, 1000); // 1000ms = 1 second
  
      if (currentTurn === "X") {
        setPlayer1Score(player1Score + 1);
      } else {
        setPlayer2Score(player2Score + 1);
      }
      return;
    }
  
    // Check for draw
    if (!newBoard.includes("")) {
      setEndMessage("Draw!");
      setShowEndModal(true); // show popup
      return;
    }
  
    setCurrentTurn(currentTurn === "X" ? "O" : "X");
  }
  
  

  function renderCell(index) {
    return (
      <button
        onClick={() => handleClick(index)}
        className="flex items-center justify-center h-[16.5vmin] w-[16.5vmin]"
      >
        {board[index] === "X" && <AnimatedX />}
        {board[index] === "O" && <AnimatedO />}
      </button>
    );
  }

  return (
    <div>
    <div 
      className="w-full fixed flex flex-col items-center top-0 bottom-0 p-[17vmin] pb-[7vmin] overflow-y-auto"
      style={{ background: `linear-gradient(to bottom right, ${color1}, ${color2})` }}
    >
      <div className="relative">
        <table className="m-auto table-fixed p-4">
          <tbody>
            <tr>
              <td className="h-[17vmin] w-[17vmin]">{renderCell(0)}</td>
              <td className="border-l-[1vmin] border-r-[1vmin] h-[17vmin] w-[17vmin]" >{renderCell(1)}</td>
              <td className="h-[17vmin] w-[17vmin]">{renderCell(2)}</td>
            </tr>
            <tr>
              <td className="border-t-[1vmin] border-b-[1vmin] h-[17vmin] w-[17vmin]">{renderCell(3)}</td>
              <td className="border-[1vmin] h-[17vmin] w-[17vmin]" >{renderCell(4)}</td>
              <td className="border-t-[1vmin] border-b-[1vmin] h-[17vmin] w-[17vmin]" >{renderCell(5)}</td>
            </tr>
            <tr>
              <td className="h-[17vmin] w-[17vmin]">{renderCell(6)}</td>
              <td className="border-l-[1vmin] border-r-[1vmin] h-[17vmin] w-[17vmin]" >{renderCell(7)}</td>
              <td className="h-[17vmin] w-[17vmin]">{renderCell(8)}</td>
            </tr>
          </tbody>
        </table>
  
        {/* Win line */}
        <WinLine line={winnerLine} />
      </div>
      <h3 className="flex justify-center text-[1.75vmin] p-[.5vmin]">
          {currentTurn} - Turn
      </h3>
      <div className="flex justify-center pb-[3.5vmin] text-[3.5vmin] w-full">
        <table className="border-spacing-[1.5vmin] border-separate text-center w-[40vmin]">
          <thead>
            <tr>
              <th className="font-display w-1/2">X - {player1Score}</th>
              <th className="font-display w-1/2">O - {player2Score}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={2}>
                <div className={`flex ${numPlayers === 2 ? "justify-between" : "justify-center"} gap-[2vmin]`}>
                  {numPlayers === 2 && (
                    <button
                      className="font-display font-medium rounded-lg text-[2vmin] px-[2vmin] py-[1vmin] hover:bg-white"
                      style={{ backgroundColor: color1, color: color2 }}
                      onClick={() => switchPlayer()}
                    >
                      Switch Player
                    </button>
                  )}
                  <button
                    className="font-display font-medium rounded-lg text-[2vmin] px-[2vmin] py-[1vmin] hover:bg-white"
                    style={{ backgroundColor: color1, color: color2 }}
                    onClick={() => resetScore()}
                  >
                    Reset Score
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  
      <div className="flex justify-center text-[1.5vmin] w-full">
        <p>© BrainDeck {getYear()}. All Rights Reserved.</p>
      </div>
    </div>
    {showEndModal && (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        {/* Blurred background */}
        <div className="absolute inset-0 backdrop-blur-sm"></div>
  
        {/* Modal content */}
        <div className="relative p-8 rounded-xl shadow-lg flex flex-col items-center space-y-4 z-10" style={{ backgroundColor: color2 }}>
          <h2 className="text-3xl font-bold" style={{ color: color1 }}>
            {endMessage}
          </h2>
          <button
            className="px-6 py-2 rounded-lg hover:bg-white font-medium"
            style={{ backgroundColor: color1, color: color2 }}
            onClick={resetGame}
          >
            Play Again 
          </button>
        </div>
      </div>
    )}
  </div>
  );
}

export default Game;
