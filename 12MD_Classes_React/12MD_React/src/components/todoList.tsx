import { TodoItem } from './todoItem'
import { TTodo } from "../types/data"
type TTodoListProps = {
    items: TTodo[];
    toggleTodo: (id:number) => void;
    removeTodo: (id:number) => void;
}

export const TodoList  = (props: TTodoListProps) => {
    const {items, toggleTodo, removeTodo} = props
    return (
        <>
        {
            items.map(todo => <TodoItem key={todo.id} toggleTodo={toggleTodo} removeTodo={removeTodo} {...todo}/>)
        }
        </>
    )
}