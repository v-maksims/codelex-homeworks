import { useState } from "react"
import { TodoList } from "./todoList"
import { TTodo } from "../types/data"

export function Todo() {
    const [value, setValue] = useState('');
    const [todos, setTodos] = useState<TTodo[]>([]);

    const addTodo = () => {
        if (value.trim()) {
            setTodos([...todos, {
                id: Date.now(),
                title: value,
                complete: false,
            }])
            setValue('')
        }
    }

    const removeTodo = (id: number): void => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const toggleTodo = (id: number): void => {
        setTodos(todos.map(todo => {
            if (todo.id !== id) {
                return todo;
            }

            return {
                ...todo,
                complete: !todo.complete
            }
        }))
    }

    return (
        <>
            <div className="container">
                <h1 className="title">To<span className="title--green">Do</span></h1>
            </div>
            <div className="container">
                <div className="todo-input">
                    <span className="todo-input__text">Type task:</span>
                    <form className="todo-input__form">
                        <input className="todo-input__input" type="text" placeholder="Task..." value={value} onChange={e => setValue(e.target.value)} />
                        <button className="todo-input__btn" type="button" onClick={addTodo}>Create</button>
                    </form>
                </div>
                <TodoList items={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
            </div>
        </>
    )
}
