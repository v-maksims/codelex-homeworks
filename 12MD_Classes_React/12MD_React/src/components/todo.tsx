import { MainLogic } from "../MainLogic"
import { TodoList } from "../components/TodoList"


export function Todo() {
    const {
        value,
        handleChange,
        addTask,
        editValue,
        handleEdit,
        disabled,
        enableEdit,
        todos,
        removeTodo,
        toggleTodo,
        editTodo,
        error
    } = MainLogic()

    return (
        <div>
            <div className="container">
                <h1 className="is-size-1 has-text-centered has-text-weight-bold is-family-code has-text-white-bis">To<span className="title--green">Do</span></h1>
            </div>
            <div className="container">
                <span className="is-size-3 has-text-weight-semibold	has-text-white-bis is-family-code">Input yours todos:</span>
                <form>
                    <input className="input is-medium mr-3 has-text-white" type="text" placeholder="Your new todo.." value={value} onChange={handleChange} />
                    <button className="button is-medium has-text-white" type="button" onClick={() => addTask()}>ADD</button>
                </form>
                <form className="mt-4">
                    <input type="text" className="input input-edit is-medium mr-3 has-text-white" placeholder="Enter edit" value={editValue} onChange={handleEdit} disabled={disabled} />
                    <button className="button is-warning is-medium has-text-black" type="button" disabled={!disabled} onClick={enableEdit}>Edit</button>
                </form>
                {error && <span className="has-text-danger is-size-4 has-text-weight-semibold is-family-code">{error}</span>}
                
            </div>
            <div className="container">
                <TodoList items={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} editTodo={editTodo} disabled={disabled} />
            </div>
        </div>
    )
}
