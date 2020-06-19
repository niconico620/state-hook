//useEffect hook after render
import React, {useState, useEffect} from 'react'

function HookCounterEffect() {

    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `You clicked ${count} times`
    })


    return (
        <div>
            <button onClick={()=> setCount(count + 1)}>useEffect Hook. clicked {count} times (please check page title)</button>
        </div>
    )
}

export default HookCounterEffect
