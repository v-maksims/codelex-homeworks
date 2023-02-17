import { useContext } from 'react';
import { TodoGetContext } from '../../../../context/TodoGetContext';
import TodoItem from '../TodoItem/TodoItem';
import style from './TodoList.module.scss';

export default function TodoList () {
    const { todos } = useContext(TodoGetContext);

    return (
        <>
            { todos.length ? (<div className={style.list}>
                {todos.map(({
                    _id, content, date, isDone, title,
                }) => (<TodoItem
                    key={_id}
                    content={content}
                    date={date}
                    isDone={isDone}
                    title={title}
                    id={_id}
                />))}
            </div>) : (<h2>Empty!</h2>)}
        </>
    );
}
