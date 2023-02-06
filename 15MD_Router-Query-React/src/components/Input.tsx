import style from '../styles/Input.module.scss';

type TInputProps = {
    type: 'number' | 'text '
    value: string,
    onChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string
}

export default function Input(props: TInputProps){
    const {onChange,placeholder,type = 'text',value} = props;

    return(
        <>
            <input 
                className={style.input}
                type={type} 
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </>
    );
}