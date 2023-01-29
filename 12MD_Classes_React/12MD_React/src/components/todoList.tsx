import { TTodo } from "../types/data"
import { TodoItem } from "./TodoItem"

type TTodoList = {
    items: TTodo[];
    removeTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
    editTodo: (id: number) => void;
    disabled: boolean;
}

export function TodoList(props: TTodoList) {
    const { items, toggleTodo, removeTodo, editTodo, disabled } = props;
    return (
        <div>
            {
                items.map(todo => <TodoItem key={todo.id} toggleTodo={toggleTodo} removeTodo={removeTodo} editTodo={editTodo} disabled={disabled} {...todo} />)
            }
        </div>
    )
}