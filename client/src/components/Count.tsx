import { useState } from 'react'

type user = {
    id: number,
    name: string
}

const Count = () => {
    const [user, setUser] = useState<null | user>(null)
    const userAdd = () => {
        setUser({ id: 1, name: 'shakil' })
        console.log(user)
    }
    return (
        <div>
            <p>{user?.name}</p>
            <button onClick={userAdd}>button</button>
        </div>
    )
}

export default Count
