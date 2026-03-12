import { useState } from "react"
import Todos from "./Todos"
import AddTodo from "./AddTodo"

const todosData = [
    {
        id: 1,
        title: 'todo title 1'
    },
    {
        id: 2,
        title: 'todo title 1'
    },
    {
        id: 3,
        title: 'todo title 1'
    },
    {
        id: 4,
        title: 'todo title 1'
    }
]


type todoType =
    {
        id: number;
        title: string;
    }



const Home = () => {
    const [todos, setTodos] = useState(todosData)
    const handledeleteTodo = (id: number) => {
        const fiterTodo = todos.filter(todo => todo.id !== id)
        console.log(id)
        setTodos(fiterTodo)
    }
    const handleAddNewTodo = (newtodo: todoType) => {
        setTodos((prevState) => [...prevState, newtodo])
        console.log(newtodo)
    }
    return (
        <div>
            <AddTodo handleAddNewTodo={handleAddNewTodo} />
            <Todos todos={todos} handledeleteTodo={handledeleteTodo} />
        </div>
    )
}

export default Home
