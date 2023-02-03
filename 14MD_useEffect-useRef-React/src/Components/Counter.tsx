import "../Styles/counter.scss"

type TCounterProps = {
    onClick: () => void
    counter: number,
}

export default function Counter(props: TCounterProps) {
    const { counter, onClick } = props

    return (
        <div className="counter-wrap">
            <button
                className="button"
                onClick={onClick}>
                count: {counter}
            </button>
            <div className="counter__box">{counter * 2}</div>
        </div>
    )
}