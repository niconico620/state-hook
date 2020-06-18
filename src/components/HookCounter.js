import React, {useState} from 'react'

function HookCounter() {

    const [count, setCount] = useState(0)

    return (
        <div>
            <h3>Counter using Hooks: {count}</h3>
            <button onClick={() => setCount(count + 1)}>Add</button>
        </div>
    )
}

export default HookCounter
