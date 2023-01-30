import { TTodo } from "../types/data"

interface ITodoItem extends TTodo {
    removeTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
    editTodo: (id: number) => void;
    disabled: boolean;
}

export function TodoItem(props: ITodoItem) {
    const { id, title, complete, removeTodo, toggleTodo, editTodo, disabled } = props

    const todoTextCross = complete && 'text-cross';
    const todoTextClasses = ['is-size-5 has-text-weight-medium mr-2 has-text-white', todoTextCross]

    return (
        <div className="todo mt-2 ml-2">
            <label className="switch mr-3">
                <input type="checkbox" checked={complete} onChange={() => toggleTodo(id)}/>
                <span className="slider"></span>
            </label>
            <span className={todoTextClasses.join(' ')}>{title}</span>
            <button className="btns" type="button" onClick={() => removeTodo(id)}>X</button>
            <button className="btns" type="button" onClick={() => !complete && editTodo(id)} disabled={disabled}> <span className={disabled || complete ? 'grey' : 'green'}>Edit</span></button>
        </div>
    )
}