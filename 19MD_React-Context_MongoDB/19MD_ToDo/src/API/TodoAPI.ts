import axios from 'axios';

type TTodoPost = {
    title: string;
  content: string;
}

type TUpdateIsDone = {
    id: string;
    isDone: boolean;
}

type TDeleteTodo = {
    id:string
}

export default function TodoAPI () {
    const dbURL = 'http://localhost:3004';
    axios.defaults.baseURL = dbURL;

    const postTodo = (data:TTodoPost) => axios.post('/post-todo', data);

    const getTodo = () => axios.get('/get-todo').then(({ data }) => data);

    const updateIsDone = (data:TUpdateIsDone) => axios.put('/update-done', data);

    const deleteTodo = (prop: TDeleteTodo) => axios.delete('/delete-todo', { data: prop });

    return {
        postTodo,
        getTodo,
        updateIsDone,
        deleteTodo,
    };
}
