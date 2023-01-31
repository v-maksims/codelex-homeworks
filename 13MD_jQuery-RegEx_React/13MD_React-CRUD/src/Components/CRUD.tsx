import CrudBackForm from "./CRUDForm/CRUDBackForm";
import CrudEditForm from "./CRUDForm/CRUDEditForm";
import CrudAddForm from "./CRUDForm/CRUDAddForm";
import CrudCardList from "./CRUDCards/CRUDCardList";
import { UseCrud } from "../Hooks/UseCrud";
import "./CRUDstyle.scss"

export default function Crud() {
    const {
        cards,
        deleteCard,
        currentId,
        createCard,
        editCard,
        editCardArea,
        disable,
        backHandlerChange,
        disableForm,
        disableEdit,
        formBackHandler
    } = UseCrud()

    return (
        <div className="container">
            <h1 className="title">Capybaras family</h1>
            <CrudCardList cards={cards} deleteCard={deleteCard} editCardArea={editCardArea} />
            {disable &&
                <CrudBackForm backHandler={backHandlerChange}>
                    {disableForm && <CrudAddForm onCreate={createCard} />}
                    {disableEdit && <CrudEditForm id={currentId} onEdit={editCard} />}
                </CrudBackForm>
            }
            <button className="open-form-btn" onClick={formBackHandler}>+</button>
        </div>
    )
}