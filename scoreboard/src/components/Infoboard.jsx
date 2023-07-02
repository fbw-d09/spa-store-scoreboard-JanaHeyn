import { useContext } from "react";
import { ScoreContext } from "../ScoreContext";

export const Infoboard = () => {
    const { score } = useContext(ScoreContext);

    return(
        <div className="Infoboard">
            <h3>
                {
                    score <= 100 ? 
                    'Let`s make it over 100!'
                    :
                    'Good job!'
                }
            </h3>
        </div>
    )
}