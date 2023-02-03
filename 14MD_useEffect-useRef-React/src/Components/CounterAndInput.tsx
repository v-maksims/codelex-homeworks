import "../Styles/counterAndInput.scss"

type TCounterAndInputProps = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onClick: () => void,
    count: number,
    value: string,
    changeFontSize: boolean,
    changeDocumentTitle: boolean
}

export default function CounterAndInput(props: TCounterAndInputProps) {
    const { count, onChange, onClick, value, changeFontSize, changeDocumentTitle } = props

    return (
        <div className="counter-input-wrap">
            <button
                className="btn__plus"
                onClick={onClick}
            >
                +
            </button>
            <span
                className="counter-input__text"
                style={changeFontSize ? { fontSize: `${count - 99}px` } : {}}
            >
                count: {count}
            </span>
            <input
                className="input"
                type="text"
                value={value}
                onChange={(e) => onChange(e)}
            />
            <span className="counter-input__text">
                {changeDocumentTitle ? document.title = value : value}
            </span>
        </div>
    )
}