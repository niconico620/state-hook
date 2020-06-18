//useState with objects
import React, { useState } from 'react'

function HookCounterObjects() {

    const [name, setName] = useState({ firstName: '', lastName: '' })

    const changeHandler = (event) => {
        setName({...name, [event.target.name]: event.target.value })
    }

    return (
        <div>
            <h2>useState with objects</h2>
            <input type="text" value={name.firstName} name="firstName" onChange={changeHandler} />
            <input type="text" value={name.lastName} name="lastName" onChange={changeHandler} />
            <h4>Your first name is - {name.firstName}</h4>
            <h4>Your last name is - {name.lastName}</h4>
            <h4>{JSON.stringify(name)}</h4>
        </div>
    )
}

export default HookCounterObjects
