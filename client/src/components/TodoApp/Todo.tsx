type todoType = {
    todo: {
        id: number;
        title: string;
    },
    handledeleteTodo: Function
}

const Todo = ({ todo, handledeleteTodo }: todoType) => {
    console.log(todo)
    const { id, title } = todo
    const DeleteTodo = (id: number) => {
        // console.log(id)
        handledeleteTodo(id)
    }
    return (

        <div>
            <p>{id}</p>
            <h1>{title}</h1>
            <button onClick={() => { DeleteTodo(id) }}>Delete Todo</button>
        </div>
    )
}

export default Todo
