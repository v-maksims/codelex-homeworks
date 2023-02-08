import useTextArea from '../hooks/useTextArea';
import style from '../styles/TextArea.module.scss';

type TTextAreaProps = {
    label: string,
    required: boolean,
    name: string,
    rows:number,
    inputHandler:(value: string) => void,
    initialValue?: string
}

export default function TextArea (props: TTextAreaProps) {
    const {
        label,
        inputHandler,
        name,
        required,
        rows,
        initialValue,
    } = props;

    const { value, changeHandler } = useTextArea(initialValue || '');

    return (
        <>
            <span
                className={ style.text }
            >
                {label}:
            </span>
            <textarea
                className={ style.area }
                value={ value }
                name={ name }
                required={ required }
                onChange={ (e) => {
                    changeHandler(e);
                    inputHandler(e.currentTarget.value);
                } }
                rows={ rows }
            ></textarea>
        </>
    );
}
