import useInput from '../hooks/useInput';
import style from '../styles/Input.module.scss';

type TInputProps = {
    type?: HTMLInputElement['type'],
    placeholder: string,
    required: boolean,
    label: string,
    name: string,
    inputHandler:(value: string) => void
    initialValue?: string
}

export default function Input (props: TInputProps) {
    const {
        type = 'text',
        placeholder,
        required,
        label,
        name,
        inputHandler,
        initialValue,
    } = props;

    const { value, changeHandler } = useInput(initialValue || '');

    return (
        <>
            <span className={ style.text }>{label}:</span>
            <input
                className={ style.input }
                type={ type }
                placeholder={ placeholder }
                defaultValue={ value }
                onChange={ (e) => {
                    changeHandler(e);
                    inputHandler(e.target.value);
                } }
                required={ required }
                name={ name }
            />
        </>
    );
}
