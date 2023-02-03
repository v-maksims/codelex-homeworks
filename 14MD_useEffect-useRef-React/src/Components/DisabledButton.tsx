type TDisableButtonProps = {
    disabled: boolean
}

export default function DisabledButton(props: TDisableButtonProps) {
    const {disabled} = props

    return (
        <div className="disable-btn">
            <button
                className={disabled ? "button button--disabled" : "button"}
                disabled={disabled}>
                btn
            </button>
        </div>
    )
}