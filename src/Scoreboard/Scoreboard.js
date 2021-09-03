import Button from "../Button";
import { useState } from "react";
import "./Scoreboard.css"
// import axios from "axios";

function Scoreboard() {
    const [player1Score, setPlayer1Score] = useState(0);
    const [player2Score, setPlayer2Score] = useState(0);
    const [maxScore, setmaxScore] = useState(3);
    const [disabledButton, setdisabledButton] = useState(false);
    const [winnerText, setwinnerText] = useState("");
    const [winner, setwinner] = useState(-1);

    const showWinner = (i) => {
        setwinner(i);
        setwinnerText(`The winner is Player ${i} !!!!`);
    }

    const increasePlayer1Score = () => {
        if (player1Score + 1 == maxScore) {
            setPlayer1Score(player1Score + 1);
            setdisabledButton(true);
            showWinner(1);
        } else if (player1Score + 1 < maxScore) {
            setPlayer1Score(player1Score + 1);
        }
    }
    const increasePlayer2Score = () => {
        if (player2Score + 1 == maxScore) {
            setPlayer2Score(player2Score + 1);
            setdisabledButton(true);
            showWinner(2);
        } else if (player2Score + 1 < maxScore) {
            setPlayer2Score(player2Score + 1);
        }
    }

    const reset = () =>{
        setPlayer1Score(0);
        setPlayer2Score(0);
        setdisabledButton(false);
        setwinner(-1);
    }
    const onChangeScore = (event) => {
        setmaxScore(event.target.value);
    }
    return (
        <div class="container-div">
            <p class={winner < 1 ? "display-none" : ""}>{winnerText}</p>
            <img src="https://picsum.photos/200/" />
            <p><span class={winner === 1 ? "winner" : (winner < 1 ? "" : "loser")}>{player1Score}</span> to <span class={winner === 2 ? "winner" : (winner < 1 ? "" : "loser")}>{player2Score}</span></p>
            <select class="select-box" onChange={onChangeScore} disabled={disabledButton} value={maxScore}>
                <option value="3">3</option>
                <option value="5">5</option>
                <option value="7">7</option>
            </select>
            <Button disabled={disabledButton} onClick={increasePlayer1Score} >+1 Player1</Button>
            <Button disabled={disabledButton} onClick={increasePlayer2Score}>+1 Player2 </Button>
            <Button onClick={reset}>Reset</Button>
        </div>

    );
}

export default Scoreboard;