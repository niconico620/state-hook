//useState with previous State
import React, {useState} from 'react'

function HookCounter2() {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);

    const incrementFive = () => {
        for(let i = 0; i < 5; i++){
            setCount(prevCount => prevCount + 1)
        }
    }

    return (
        <div>
            <h3>Count with Hook using previous state: {count}</h3>
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Subtract</button>
            <button onClick={incrementFive}>Add five</button>
        </div>
    )
}

export default HookCounter2
