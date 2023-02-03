import "../Styles/divBox.scss"

type TDivBox = {
    someDiv: React.RefObject<HTMLDivElement>,
    absolute: boolean,
}

export default function DivBox(props: TDivBox) {
    const { someDiv, absolute } = props

    return (
        <div className="div-wrap">
            <div className="div" ref={someDiv}>
                {absolute && <span className="div__text" >esmu stūrī</span>}
            </div>
        </div>
    )
}