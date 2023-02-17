import Button from '../components/Button/Button';
import useTodoAdd from '../components/hooks/useTodoAdd';
import Input from '../components/Input/Input';
import TodoList from '../components/Todo/components/TodoList/TodoList';
import style from '../styles/TodoPage.module.scss';

export default function TodoPage () {
    const {
        setTodoInfo,
        todoInfo,
        mutate,
    } = useTodoAdd();

    const { content, title } = todoInfo;
    return (
        <>
            <h1 className={style.title}>todo app</h1>
            <div className={style.todoWrap}>
                <form
                    className={style.form}
                    onSubmit={(e) => {
                        e.preventDefault();
                        mutate({
                            title,
                            content,
                        });
                        setTodoInfo({ content: '', title: '' });
                    }}
                >
                    <Input
                        value={title}
                        onChange={(e) => setTodoInfo({ ...todoInfo, title: e.currentTarget.value })}
                        type='text'
                        required={true}
                        placeholder='Title'
                    />
                    <Input
                        value={content}
                        onChange={(e) => setTodoInfo(
                            {
                                ...todoInfo,
                                content: e.currentTarget.value,
                            },
                        )}
                        type='text'
                        required={false}
                        placeholder='About todo'
                    />
                    <Button
                        label='add'
                        type='submit'
                    />
                </form>
                <TodoList/>
            </div>
        </>
    );
}
