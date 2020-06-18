//useState with arrays
import React, {useState} from 'react'

function HookCounterArray() {

    const [items, setItems] = useState([])

    const addItem = () =>{
        setItems([...items, {
            id: items.length,
            value: items.length + 1
        }])
    }
    return (
        <div>
            <h2>useState with arrays</h2>
            <button onClick={addItem}>Add a number</button>
            <ul>
                {
                    items.map(item => <li key={item.id}>{item.value}</li>)
                }
            </ul>
        </div>
    )
}

export default HookCounterArray
