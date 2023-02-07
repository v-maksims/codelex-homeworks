import { useState } from 'react';
import Form from '../components/Form';
import Input from '../components/Input';
import Modal from '../components/Modal';
import TextArea from '../components/TextArea';
import { TBlogs } from '../types/Blogs';

type TFormAddPostProps = {
    modal: boolean,
    onClick: () => void
}

export type TValues = {
    name: string,
    value: string
}

export default function FormAddPost(props:TFormAddPostProps){
    const { modal, onClick } = props;

    const [data, setData] = useState<TBlogs>({
        comments:[],
        content:'',
        image: '',
        title: ''
    });
    const contentHandler = (value: string) => {
        setData({
            ...data,
            content: value
        });
    };
    const imageHandler = (value: string) => {
        setData({
            ...data,
            image: value
        });
    };
    const titleHandler = (value: string) => {
        setData({
            ...data,
            title: value
        });
    };


    return(
        <>
            {modal && <Modal
                onClick={onClick}
            >
                <Form
                    label='Add new blog'
                    newData={data}
                    onSubmit={onClick}
                >
                    <Input
                        name='image'
                        label='image'
                        placeholder='Enter image url'
                        required={true}
                        type='text'
                        inputHandler={imageHandler}
                    />
                    <Input
                        name='title'
                        label='blog title'
                        placeholder='Enter post title'
                        required={true}
                        type='text'
                        inputHandler={titleHandler}
                    />
                    <TextArea
                        label='blog content'
                        name='content'
                        required={true}
                        inputHandler={contentHandler}
                    />
                </Form>
            </Modal>}
        </>
    );
}