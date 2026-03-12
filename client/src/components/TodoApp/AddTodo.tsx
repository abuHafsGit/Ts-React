import React, { useState } from "react"

type Props = {
    handleAddNewTodo: Function
}

function AddTodo({ handleAddNewTodo }: Props) {
    const [title, setTitle] = useState('')

    const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }
    const todoSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const newTodo = { id: new Date().getTime().toString(), title }
        handleAddNewTodo(newTodo)
        setTitle('')
    }
    return (
        <form onSubmit={todoSubmit}>
            <div>
                <label htmlFor="title">Todo title</label>
                <input type="text" name="title" value={title} onChange={handleTitle} />
            </div>
            <button>add title</button>
        </form>
    )
}

export default AddTodo