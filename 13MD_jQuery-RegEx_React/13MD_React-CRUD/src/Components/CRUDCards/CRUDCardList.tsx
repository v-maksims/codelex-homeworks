import CrudCardItem from "./CRUDCardItem"
import { TCapybarasData } from "../../Types/Data"
import "./CRUDCardStyle.scss"

type TCrudList = {
    cards: TCapybarasData[],
    deleteCard: (id: number) => void,
    editCardArea: (id: number) => void
}

export default function CrudCardList(props: TCrudList) {
    const { cards, deleteCard, editCardArea } = props

    return (
        <div className="card-list">
            {
                cards.map(card => <CrudCardItem card={card} key={card.id} deleteCard={deleteCard} editCardArea={editCardArea} />)
            }
        </div>
    )
}