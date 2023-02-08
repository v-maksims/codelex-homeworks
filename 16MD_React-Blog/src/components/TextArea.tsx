import useTextArea from '../hooks/useTextArea';
import style from '../styles/TextArea.module.scss';

type TTextAreaProps = {
    label: string,
    required: boolean,
    name: string,
    className?: string,
    rows:number,
    inputHandler:(value: string) => void,
}

export default function TextArea(props: TTextAreaProps){
    const { 
        label, 
        inputHandler,
        name, 
        required,
        className,
        rows
    } = props;
    const {value,changeHandler} = useTextArea();
    
    return(
        <>
            <span 
                className={style.text}
            >
                {label}:
            </span>
            <textarea
                className={className || style.area}
                value={value} 
                name={name}
                required={required}
                onChange={(e) => {
                    changeHandler(e);

                    inputHandler(e.currentTarget.value);
                }} 
                rows={rows}
            ></textarea>
        </>
    );
}