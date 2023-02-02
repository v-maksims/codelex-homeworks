import "../../Styles/FirstForm.scss"
import useFirstForm from "../../Hooks/useFirstForm"

export default function FirstForm() {
    const {
        submitHandler,
        inputFocus,
        valOne,
        inputOneHandler,
        valTwo,
        inputTwoHandler,
        inputs
    } = useFirstForm()
    
    return (
        <div className="first-form-wrapper" onSubmit={submitHandler}>
            <form className="first-form">
                <input
                    ref={inputFocus}
                    className="first-form__input"
                    type="text"
                    placeholder="Write something"
                    value={valOne}
                    onChange={inputOneHandler}
                />
                <input
                    className="first-form__input"
                    type="text"
                    placeholder="Write something"
                    value={valTwo}
                    onChange={inputTwoHandler}
                />
                <button className="first-form__btn">submit</button>
            </form>
            <div className="first-form__inputs">
                <span className="first-form__inputs-text">{inputs.join(' ')}</span>
            </div>
        </div>
    )
}