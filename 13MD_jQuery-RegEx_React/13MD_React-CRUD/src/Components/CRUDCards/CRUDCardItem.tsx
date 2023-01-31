import { TCapybarasData } from "../../Types/Data"
import "./CRUDCardStyle.scss"

type TCapybarasItem = {
    card: TCapybarasData,
    deleteCard: (id: number) => void,
    editCardArea: (id: number) => void,
}

export default function CrudCardItem(props: TCapybarasItem) {
    const { card, deleteCard, editCardArea } = props
    return (
        <div className="card-item">
            <img className="card-item__image" src={card.image} />
            <h5 className="card-item__name">{card.name}</h5>
            <h5 className="card-item__info">{card.info}</h5>
            <div className="card-item__edit">
                <button className="card-item__btn" type="button" onClick={() => deleteCard(card.id)}>X</button>
                <button className="card-item__btn" type="button" onClick={() => editCardArea(card.id)}>Edit</button>
            </div>
        </div>
    )
}