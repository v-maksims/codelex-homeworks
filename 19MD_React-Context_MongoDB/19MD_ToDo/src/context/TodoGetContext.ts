import { createContext } from 'react';
import { TTodos } from '../App';

type TTodoGetContext = {
    todos:TTodos[];
}

export const TodoGetContext = createContext<TTodoGetContext>({
    todos: [],
});
