import React, { useState } from "react"


const Form = () => {
    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')

    const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value)
    }
    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserEmail(event.target.value)
    }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log({ userName, userEmail })
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">username</label>
                    <input onChange={handleName} value={userName} type="text" />
                </div>
                <div>
                    <label htmlFor="email">email</label>
                    <input onChange={handleEmail} value={userEmail} type="email" />
                </div>
                <button >submit</button>
            </form>
        </div>
    )
}

export default Form
