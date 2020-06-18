import React, {useState} from 'react'

function HookCounterMultiple() {

    const [counterA, setCounterA] = useState(0)
    const [counterB, setCounterB] = useState(0)

    return (
        <div>
            <h3>useState hook using multiple state values.</h3>
            <button onClick={() => setCounterA(counterA + 1)}> Counter A: {counterA}</button>
            <button onClick={() => setCounterB(counterB + 2)}> Counter B: {counterB}</button>
        </div>
    )
}

export default HookCounterMultiple
