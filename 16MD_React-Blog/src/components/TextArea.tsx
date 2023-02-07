import useTextArea from '../hooks/useTextArea';
import style from '../styles/TextArea.module.scss';

type TTextAreaProps = {
    label: string
}

export default function TextArea(props: TTextAreaProps){
    const {label} = props;
    const {value,changeHandler} = useTextArea();
    
    return(
        <>
            <span 
                className={style.text}
            >
                {label}:
            </span>
            <textarea
                className={style.area}
                value={value} 
                onChange={(e) => changeHandler(e)} 
            ></textarea>
        </>
    );
}