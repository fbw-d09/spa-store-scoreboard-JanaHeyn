import { useContext } from "react";
import { ScoreContext } from "../ScoreContext";

export const Scoreboard = () => {
    const {score, plusScore, minusScore} = useContext(ScoreContext);

    return(
        <div className="Scoreboard">
            <h1>Score Board</h1>
            <h2>Your current score is {score}</h2>
            <button onClick={plusScore}>+</button>
            <button onClick={minusScore}>-</button>
        </div>
    )
}