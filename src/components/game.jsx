import React, { useState } from "react";

import styles from "./game.module.css"

let Board = [
  { value: 0, mark: "" },
  { value: 0, mark: "" },
  { value: 0, mark: "" },
  { value: 0, mark: "" },
  { value: 0, mark: "" },
  { value: 0, mark: "" },
  { value: 0, mark: "" },
  { value: 0, mark: "" },
  { value: 0, mark: "" },
];

const Game = () => {
  const [board, SetBoard] = useState(Board);
  const [player, setPlyer] = useState(true);
  const [msg, setMsg] = useState("Click to start");
  const [winner,setWinner]=useState(false);

  const handleClick = (player, el) => {
    if(winner){
      return;
    }
    if (el.value === 0) {
      if (player === true) {
        el.mark = "x";
        el.value = 1;
        setPlyer(false);
        setMsg('Next move o')
      } else {
        el.mark = "o";
        el.value = 2;
        setPlyer(true);
        setMsg('Next move x')
      }
    }
    if(CheckDraw([...board])){
      setMsg('match draw');
      
    }
    SetBoard([...board]);
    CheckWinner(board);
  };

  const CheckWinner = (board) => {
    
     
      if(board[0].value===1 && board[1].value===1 && board[2].value===1){
       setMsg('player x is winner');    
       setWinner(true);
      }
      else if(board[0].value===2 && board[1].value===2 && board[2].value===2){
        setMsg('player o is winner');
        setWinner(true);
      }
      else if(board[3].value===1 && board[4].value===1 && board[5].value===1){
        setMsg('player x is winner');  
        setWinner(true);  
       }
       else if(board[3].value===2 && board[4].value===2 && board[5].value===2){
         setMsg('player o is winner');
         setWinner(true);
       }
       else if(board[6].value===1 && board[7].value===1 && board[8].value===1){
        setMsg('player x is winner'); 
        setWinner(true);   
       }
       else if(board[6].value===2 && board[7].value===2 && board[8].value===2){
         setMsg('player o is winner');
         setWinner(true);
       }
       else if(board[0].value===1 && board[3].value===1 && board[6].value===1){
        setMsg('player x is winner');   
        setWinner(true); 
       }
       else if(board[0].value===2 && board[3].value===2 && board[6].value===2){
         setMsg('player o is winner');
         setWinner(true);
       }
       else if(board[1].value===1 && board[4].value===1 && board[7].value===1){
         setMsg('player x is winner');
         setWinner(true);    
        }
        else if(board[1].value===2 && board[4].value===2 && board[7].value===2){
          setMsg('player o is winner');
          setWinner(true);
        }
        else if(board[2].value===1 && board[5].value===1 && board[8].value===1){
         setMsg('player x is winner');  
         setWinner(true);  
        }
        else if(board[2].value===2 && board[5].value===2 && board[8].value===2){
          setMsg('player o is winner');
          setWinner(true);
        }
        else if(board[0].value===1 && board[4].value===1 && board[8].value===1){
          setMsg('player x is winner');  
          setWinner(true);  
         }
         else if(board[0].value===2 && board[4].value===2 && board[8].value===2){
           setMsg('player o is winner');
           setWinner(true);
         }
         else if(board[2].value===1 && board[4].value===1 && board[6].value===1){
          setMsg('player x is winner'); 
          setWinner(true);   
         }
         else if(board[2].value===2 && board[4].value===2 && board[6].value===2){
           setMsg('player o is winner');
           setWinner(true);
         }
      
  };
  const resetGame = (board) => {
    board.map((el) => {
      el.value = 0;
      el.mark = "";
      return el;
    });
    SetBoard([...board]);
    setMsg('Click to start'); 
    setPlyer(true)
    setWinner(false);
  };

  const CheckDraw=(board)=>{
  for(let i=0;i<board.length;i++){
    if(board[i].value===0){
      return false;
    }
  }
   return true;
  }

  return (
    <div className={styles.board}>
       <h1>Tic Tac Toe</h1>
      <div>
      {board.map((el, i) => {
        return (
          <div onClick={() => handleClick(player, el)} key={i}>
            {el.mark}
          </div>
        );
      })}
      </div>
      <button onClick={() => resetGame(board)}>Restart game</button>
      <h2>{msg}</h2>
    </div>
  );
};
export default Game;
