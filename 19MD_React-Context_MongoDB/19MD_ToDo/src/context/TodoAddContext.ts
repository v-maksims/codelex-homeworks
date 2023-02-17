import { createContext, useContext } from 'react';
import { TTodoTextState } from '../App';

type TTodoAddContext = {
    todoInfo:TTodoTextState;
    setTodoInfo?: Function;
}

export const TodoAddContext = createContext<TTodoAddContext>({
    todoInfo: {
        title: '',
        content: '',
    },
});

export const useTodoAddContext = () => {
    const { todoInfo, setTodoInfo } = useContext(TodoAddContext);

    if (!setTodoInfo) {
        throw Error('setTodoInfo function mandatory in TodoAddContext');
    }

    return {
        setTodoInfo,
        todoInfo,
    };
};
