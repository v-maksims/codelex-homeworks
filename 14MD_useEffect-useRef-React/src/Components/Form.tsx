import "../Styles/form.scss"

type TFormProps = {
    onSubmit: (e: React.FormEvent) => void,
    inputOneHandler: (e: React.ChangeEvent<HTMLInputElement>) => void,
    inputTwoHandler: (e: React.ChangeEvent<HTMLInputElement>) => void,
    inputFocus: React.RefObject<HTMLInputElement>,
    valOne: string,
    valTwo: string
    inputs: string[]
}

export default function Form(props: TFormProps) {
    const {
        onSubmit,
        inputFocus,
        valOne,
        inputOneHandler,
        valTwo,
        inputTwoHandler,
        inputs
    } = props

    return (
        <div className="first-form-wrapper" onSubmit={(e) => onSubmit(e)}>
            <form className="first-form">
                <input
                    ref={inputFocus}
                    className="input"
                    type="text"
                    placeholder="Write something"
                    value={valOne}
                    onChange={(e) => inputOneHandler(e)}
                />
                <input
                    className="input"
                    type="text"
                    placeholder="Write something"
                    value={valTwo}
                    onChange={(e) => inputTwoHandler(e)}
                />
                <button className="button">submit</button>
            </form>
            <div className="first-form__inputs">
                <span className="first-form__inputs-text">{inputs.join(' ')}</span>
            </div>
        </div>
    )
}