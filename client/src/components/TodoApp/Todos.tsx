import Todo from "./Todo";



type todos = {
    todos: {
        id: number;
        title: string;
    }[],
    handledeleteTodo: Function
}


const Todos = ({ todos, handledeleteTodo }: todos) => {

    console.log(todos)
    return (
        <div>
            {todos.map((todo) => (
                <Todo todo={todo} handledeleteTodo={handledeleteTodo} />
            ))}
        </div>
    )
}

export default Todos
