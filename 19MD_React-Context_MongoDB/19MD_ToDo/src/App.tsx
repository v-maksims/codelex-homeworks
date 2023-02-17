import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import TodoPage from './pages/TodoPage';
import { TodoAddContext } from './context/TodoAddContext';
import { TodoGetContext } from './context/TodoGetContext';
import useTodoGetAll from './hooks/useTodoGetAll';
import 'react-toastify/dist/ReactToastify.css';

export type TTodos = {
    _id: string;
    title: string;
    content: string;
    isDone: boolean;
    date: string;
    __v: number;
}

export type TTodoTextState = {
    title: string;
    content: string;
}

const App = () => {
    const [todoInfo, setTodoInfo] = useState<TTodoTextState>({
        content: '',
        title: '',
    });

    const { allTodo, isLoading } = useTodoGetAll();

    if (isLoading) {
        return <h1>Loading..</h1>;
    }

    if (!allTodo) {
        throw Error('no data');
    }

    return (
        <TodoGetContext.Provider value={{ todos: allTodo }}>
            <TodoAddContext.Provider value={{
                todoInfo,
                setTodoInfo,
            }}>
                <div className='container'>
                    <TodoPage />
                    <ToastContainer/>
                </div>
            </TodoAddContext.Provider>
        </TodoGetContext.Provider>
    );
};

export default App;
