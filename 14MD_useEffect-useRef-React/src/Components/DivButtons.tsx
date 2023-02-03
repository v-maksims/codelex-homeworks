import "../Styles/divButtons.scss"

type TDivButtonProps = {
    buttonHandlerPosition: () => void,
    buttonHandlerBg: () => void,
    buttonCloneHandler: () => void,
}

export default function DivButtons(props: TDivButtonProps) {
    const { buttonHandlerBg, buttonHandlerPosition, buttonCloneHandler } = props

    return (
        <div className="div__buttons">
            <button className="button div__btn" type="button" onClick={buttonHandlerBg}> Change color</button>
            <button className="button div__btn" type="button" onClick={buttonCloneHandler}> Clone div</button>
            <button className="button div__btn" type="button" onClick={buttonHandlerPosition}> Move div</button>
        </div>
    )
}