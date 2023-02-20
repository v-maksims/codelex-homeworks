import { FieldValues, UseFormRegister } from 'react-hook-form';
import style from './Input.module.scss';

type TLengthProps = {
    value: number;
    message: string;
}

type TInputProps = {
    register: UseFormRegister<FieldValues>;
    name: string;
    maxLength?: TLengthProps;
    minLength: TLengthProps;
    require: string;
}

export default function Input (props: TInputProps) {
    const {
        name,
        register,
        maxLength,
        minLength,
        require,
        ...rest
    } = props;
    return (
        <input
            className={style.input}
            {...register(name, {
                maxLength,
                minLength,
                required: require,
            })} {...rest}
        />
    );
}
