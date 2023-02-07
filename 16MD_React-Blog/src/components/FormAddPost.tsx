import Form from './FormCreateBlog';
import Input from '../components/Input';
import Modal from '../components/Modal';
import TextArea from '../components/TextArea';
import useNewBlogValues from '../hooks/useNewBlogValues';

type TFormAddPostProps = {
    modal: boolean,
    onClick: () => void
}

export default function FormAddPost(props:TFormAddPostProps){
    const { modal, onClick } = props;
    const {
        contentHandler,
        imageHandler,
        titleHandler,
        data
    } = useNewBlogValues();
   


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