//useEffect hook after render
import React, {useState, useEffect} from 'react'

function HookCounterEffect() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        console.log("useEffect hook - updating document title.")
        document.title = `You clicked ${count} times`
    }, [count])


    return (
        <div>
            <input type="text" value= {name} onChange = {event => setName(event.target.value)} />
            <button onClick={()=> setCount(count + 1)}>useEffect Hook. clicked {count} times (please check page title)</button>
        </div>
    )
}

export default HookCounterEffect
