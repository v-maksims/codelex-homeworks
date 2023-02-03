import "../Styles/dropDown.scss"

type TDropdown = {
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void,
    onClick: () => void,
    selected: string,
    boxs: React.ReactNode[],
}

export default function Dropdown(props: TDropdown) {
    const {
        onClick,
        selected,
        onChange,
        boxs
    } = props

    return (
        <div className="dropdown-wrapper">
            <div className="dropdown">
                <button className="btn__plus" onClick={onClick}>+</button>
                <select
                    className="dropdown__selector"
                    value={selected}
                    onChange={(e) => onChange(e)}
                >
                    <option disabled >Choice color</option>
                    <option className="dropdown__selector-item"> red </option>
                    <option className="dropdown__selector-item"> blue </option>
                    <option className="dropdown__selector-item"> yellow </option>
                </select>
            </div>
            <div className="dropdown__elements">
                {boxs}
            </div>
        </div>
    )
}