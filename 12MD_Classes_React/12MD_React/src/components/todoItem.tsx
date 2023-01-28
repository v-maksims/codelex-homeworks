import { TTodo } from "../types/data"


interface ITodoItem extends TTodo {
    toggleTodo: (id:number) => void;
    removeTodo: (id:number) => void;
}

export const TodoItem = (props: ITodoItem) => {
    const { id, title, complete, removeTodo, toggleTodo } = props
    return (
        <div className="todo-list">
            <input className="todo-list__checkBox" type="checkbox" checked={complete} onChange={()=> toggleTodo(id)}/>
            <span className="todo-list__text">{title}</span>
            <button type="button" onClick={() => removeTodo(id)}>X</button>
        </div>
    )
}