import './App.css';
import React, { useState } from 'react';
import { ScoreContext } from './ScoreContext';
import { Scoreboard } from './components/Scoreboard';
import { Infoboard } from './components/Infoboard';
// import { ScoreContextProvider } from './ScoreContext';

function App() {
    const [ score, setScore ] = useState(0);
    
    const plusScore = () => {
        setScore(score + 10)
    }
    
    const minusScore = () => {
        setScore(score - 10)
    }
    const value = { score, plusScore, minusScore };

    return (
        <ScoreContext.Provider value={value}>
            <div className="App">
                <Scoreboard />
                <Infoboard />
            </div>
        </ScoreContext.Provider>
        
    );
}

export default App;
