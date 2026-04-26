import { useState } from "react";
import './App.css';

function Square({value, OnSquareClick}){
  return (
    <>
      <button className="square" onClick={OnSquareClick}>{value}</button>
    </>
  );
  
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i){
    const nextSquares = squares.slice();
    nextSquares[i] = 'X';
    setSquares(nextSquares);
  }
  return(
    <>
      <div className="board-row">
        <Square value={squares[0]} OnSquareClick={() =>handleClick(0)}/>
        <Square value={squares[1]} OnSquareClick={() =>handleClick(1)}/>
        <Square value={squares[2]} OnSquareClick={() =>handleClick(2)}/>
      </div>
      <div className="board-row">
        <Square value={squares[3]} OnSquareClick={() =>handleClick(3)}/>
        <Square value={squares[4]} OnSquareClick={() =>handleClick(4)}/>
        <Square value={squares[5]} OnSquareClick={() =>handleClick(5)}/>  
      </div>
      <div className="board-row">
        <Square value={squares[6]} OnSquareClick={() =>handleClick(6)}/>
        <Square value={squares[7]} OnSquareClick={() =>handleClick(7)}/>
        <Square value={squares[8]} OnSquareClick={() =>handleClick(8)}/>  
      </div>
    </>
  );
   
}
