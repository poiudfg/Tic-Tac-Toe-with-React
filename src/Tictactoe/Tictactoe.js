import React, {useState} from 'react'
import './Tictactoe.css'

const Tictactoe = () => {
    const [turn, setTurn] = useState('X')
    const [cells ,setCells] = useState(Array(9).fill(''))
    const [winner, setWinner] = useState();

    const checkForwinner = (squares) => {
        let combos = {
            across:[
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
            ],
            down:[
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
            ],
            dingnol:[
                [0, 4, 8],
                [2, 4, 6],
            ],

        };

        for(let combo in combos){
            combos[combo].forEach((pattern) => {
                if(
                    squares[pattern[0]] === '' ||
                    squares[pattern[1]] === '' ||
                    squares[pattern[2]] === '' 
                ) {
                
                }else if(
                    squares[pattern[0]] === squares[pattern[1]] &&
                    squares[pattern[1]] === squares[pattern[2]]
                ){
                    setWinner(squares[pattern[0]]);
                }
            });
        }
    }

    const handleClick = (num) => {
        if (cells[num] !== ''){
            return;
        }
        let squares = [...cells];
        
        if(turn === 'X'){
            squares[num] = 'X';
            setTurn('O');
        }else{
            squares[num] = 'O';
            setTurn('X');
        }

        checkForwinner(squares);
		setCells(squares);
    }; 

    const Cell = ({num}) => {
        return <td onClick={() => handleClick(num)}>{cells[num]}</td>;
    };

    const handleRestart = () => {
        setWinner(null);
        setCells(Array(9).fill(''));
    }

  return (
    <div className='container'>
        <h1>Tic Tac Toe 2 Player with React.js</h1>
        <p></p>
        <table>
            <tbody>
                <tr>
                    <Cell num={0} />
                    <Cell num={1} />
                    <Cell num={2} />
                </tr>
                <tr>
                    <Cell num={3} />
                    <Cell num={4} />
                    <Cell num={5} />
                </tr>
                <tr>
                    <Cell num={6} />
                    <Cell num={7} />
                    <Cell num={8} />
                </tr>
            </tbody>
            <p></p>
            Turn: {turn}
        </table>
        <button onClick={() => handleRestart()}>Reset</button>
        {winner && (
            <>
            <p className='win'>{winner} is the winner!</p>
            </>
        )}
    </div>
  );
};

export default Tictactoe;