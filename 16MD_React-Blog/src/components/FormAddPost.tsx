import Form from '../components/Form';
import Input from '../components/Input';
import Modal from '../components/Modal';
import TextArea from '../components/TextArea';

type TFormAddPostProps = {
    modal: boolean,
    onClick: () => void
}

export default function FormAddPost(props:TFormAddPostProps){
    const { modal, onClick } = props;
    return(
        <>
            {modal && <Modal
                onClick={onClick}
            >
                <Form
                    label='Add new blog'
                >
                    <Input
                        label='1'
                        placeholder='1'
                        required={true}
                        type='text'
                    />
                    <Input
                        label='2'
                        placeholder='2'
                        required={true}
                        type='text'
                    />
                    <TextArea/>
                </Form>
            </Modal>}
        </>
    );
}