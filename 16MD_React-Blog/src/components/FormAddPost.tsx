import { useState } from 'react';
import Form from '../components/Form';
import Input from '../components/Input';
import Modal from '../components/Modal';
import TextArea from '../components/TextArea';

type TFormAddPostProps = {
    modal: boolean,
    onClick: () => void
}

type TValues = {
    name: string,
    value: string
}

export default function FormAddPost(props:TFormAddPostProps){
    const { modal, onClick } = props;

    const [values, setValues] = useState<TValues[]>([]);
    const inputHandler = (name:string, value: string) =>{
        // console.log(values);
        setValues(
            values.find(item => item.name === name) 
                ? values.map(item => item.name === name ? {name,value} : item) 
                : [...values, {name,value}]
        );
    };


    return(
        <>
            {modal && <Modal
                onClick={onClick}
            >
                <Form
                    label='Add new blog'
                >
                    <Input
                        name='image'
                        label='image'
                        placeholder='Enter image url'
                        required={true}
                        type='text'
                        inputHandler={inputHandler}
                    />
                    <Input
                        name='title'
                        label='blog title'
                        placeholder='Enter post title'
                        required={true}
                        type='text'
                        inputHandler={inputHandler}
                    />
                    <TextArea
                        label='blog content'
                    />
                </Form>
            </Modal>}
        </>
    );
}