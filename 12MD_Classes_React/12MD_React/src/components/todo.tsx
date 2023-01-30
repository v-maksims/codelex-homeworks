import { MainLogic } from "../MainLogic"
import { TodoList } from "../components/TodoList"
import { About } from "./About"

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
        error,
        about,
        changeAbout,
        deleteAllTodos
    } = MainLogic()

    return (
        <div>
            <div className="container">
                <h1 className="is-size-1 has-text-centered has-text-weight-bold is-family-code has-text-white-bis">To<span className="title--green">Do</span></h1>
            </div>
            <div className="container">
                <span className="is-size-3 has-text-weight-semibold	has-text-white-bis is-family-code">Input yours todos:</span>
                <form className="columns mt-3">
                    <input className="input is-medium mr-3 has-text-white column is-half" type="text" placeholder="Your new todo.." value={value} onChange={handleChange} />
                    <button className="button is-medium has-text-white" type="button" onClick={() => addTask()} title="Create new task">ADD</button>
                </form>
                <form className="mt-4 mb-3 columns">
                    <input type="text" className="input input-edit is-medium mr-3 has-text-white column is-one-quarter" placeholder="Enter edit" value={editValue} onChange={handleEdit} disabled={disabled} />
                    <button className="button is-warning is-medium has-text-black" type="button" disabled={!disabled} onClick={enableEdit}>Edit</button>
                </form>
                {error && <span className="has-text-danger is-size-4 has-text-weight-semibold is-family-code">{error}</span>}

            </div>
            <div className="container">
                <TodoList items={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} editTodo={editTodo} disabled={disabled} />
            </div>
            {about && <About changeAbout={changeAbout} />}
            <div className="about-sec">
                <button className="custom-btn btn" onClick={changeAbout} title="Open information"><span className="custom-btn__span">About Todo APP</span></button>
            </div>
            {todos.length && <div className="delete-sec">
                <button className="custom-btn btn" onClick={deleteAllTodos} title="Delete all tasks"><span className="custom-btn__span">Delete All Tasks</span></button>
            </div>}
        </div>
    )
}
