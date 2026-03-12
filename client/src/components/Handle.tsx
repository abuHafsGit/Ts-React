import React, { use, useState } from 'react'

function Handle() {
    const [name, setName] = useState("")

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        console.log(name)
        setName('')
    }
    return (
        <div>
            <div>
                <input onChange={handleChange} value={name} type="text" name="" id="" />
                <button onClick={handleClick}>add</button>
            </div>
        </div>
    )
}

export default Handle
