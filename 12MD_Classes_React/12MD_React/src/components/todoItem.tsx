import { TTodo } from "../types/data"

interface ITodoItem extends TTodo {
    removeTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
    editTodo: (id: number) => void;
    disabled: boolean;
}

export function TodoItem(props: ITodoItem) {

    const { id, title, complete, removeTodo, toggleTodo, editTodo , disabled} = props

    return (
        <div className="todo mt-2 ml-5">
            <input className="mr-4 todo-check" type="checkbox" checked={complete} onChange={() => toggleTodo(id)} />
            <span className="is-size-5 has-text-weight-medium mr-2 has-text-white">{title}</span>
            <button className="btn" type="button" onClick={() => removeTodo(id)}>X</button>
            <button className="btn" type="button" onClick={() => editTodo(id)} disabled={disabled}> <span className={disabled ? 'grey' : 'green'}>Edit</span></button>
        </div>
    )
}