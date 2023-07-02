import React, { useState, createContext } from 'react';

const ScoreContext = createContext(null);

/* const ScoreContextProvider = () => {
    const [score, setScore] = useState(0);
    const value = { score, plusScore, minusScore}

    const plusScore = () => {
        setScore(score + 10)
    }

    const minusScore = () => {
        setScore(score - 10)
    }
} */

export { ScoreContext }
