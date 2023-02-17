import { useState } from 'react';
import Button from '../../../Button/Button';
import style from './TodoItem.module.scss';
import useTodoItemMutate from '../../../../hooks/useTodoItemMutate';

type TTodoItemProps = {
    content:string;
    date: string;
    isDone: boolean;
    title:string;
    id: string
}

export default function TodoItem (props: TTodoItemProps) {
    const [open, setOpen] = useState(false);

    const { mutateCheck, mutateDelete } = useTodoItemMutate();

    const {
        content,
        date,
        isDone,
        title,
        id,
    } = props;

    return (
        <div className={style.itemWrap}>
            <div className={style.itemMain}>
                <div className={style.checkboxWrap}>
                    <input className={style.checkbox} type="checkbox" id={id} checked={isDone} onChange={() => mutateCheck({ id, isDone: !isDone })}/>
                    <label className={style.fakeCheckbox} htmlFor={id}></label>
                </div>
                <span>{title}</span>
                <span>{date}</span>
                <Button
                    label='X'
                    type='button'
                    onClick={() => mutateDelete({ id })}
                />
            </div>
            {content && <div className={style.itemMore}>
                <Button
                    label={open ? 'close' : 'more'}
                    type='button'
                    onClick={() => setOpen(!open)}
                />
                {open && <span>{content}</span>}
            </div>}
        </div>
    );
}
