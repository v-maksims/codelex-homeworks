import { useState } from "react"
import { TTodo } from "./types/data"

export function MainLogic() {
    const [value, setValue] = useState('')
    const [editValue, setEditValue] = useState('')
    const [todos, setTodos] = useState<TTodo[]>([])
    const [disabled, setDisabled] = useState(true)
    const [error, setError] = useState('')
    const [about, setAbout] = useState(false)

    const changeAbout = () => {
        setAbout(!about)
    }

    const addTask = () => {
        if (value.trim()) {
            setTodos([...todos, {
                id: Date.now(),
                title: value,
                complete: false
            }])
            setValue('');
        }
    }

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setValue(event.target.value)
    }

    const handleEdit: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setEditValue(event.target.value)
    }

    const removeTodo = (id: number): void => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const toggleTodo = (id: number): void => {
        setTodos(todos.map(todo => {
            if (todo.id !== id) {
                return todo
            }

            return {
                ...todo,
                complete: !todo.complete
            }
        }))
    }

    const editTodo = (id: number) => {
        setEditValue('');
        if (editValue.trim()) {
            setError('')
            setTodos(todos.map(todo => {
                if (todo.id !== id) {
                    setDisabled(true)
                    return todo;
                }

                setDisabled(true)
                return {
                    ...todo,
                    title: editValue
                }
            }))
        } else {
            setError('Area is empty!')
        }
    }

    const enableEdit = () => {
        setDisabled(false);
        setEditValue('');
    }

    const deleteAllTodos = () => {
        setTodos([])
    }

    return {
        enableEdit,
        editTodo,
        toggleTodo,
        handleEdit,
        handleChange,
        removeTodo,
        disabled,
        value,
        editValue,
        todos,
        addTask,
        error,
        about,
        changeAbout,
        deleteAllTodos
    }
}
