import axios from "axios"
import { TCapybarasData } from "../../Types/Data"
import {UseCrud} from "../../Hooks/UseCrud"


type TEditFormProps = {
    id: number,
    onEdit: (card: TCapybarasData, id: number) => void,
}

// TODO: old values in input areas
export default function CrudEditForm(props: TEditFormProps) {
    const { id, onEdit } = props
    const { image, imageHandler, info, infoHandler, name, nameHandler, checkInputImage, checkInputInfo, checkInputName} = UseCrud()

    

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault()
        const { data: editCapyCard } = await axios.patch<TCapybarasData>(`http://localhost:3004/capybaras/${id}`, {
            name: checkInputName(name),
            info: checkInputInfo(info),
            image: checkInputImage(image)
        })
        onEdit(editCapyCard, id)
    }


    return (
        <div className="form">
            <h4 className="form__title">EDIT CARD</h4>
            <form onSubmit={submitHandler}>
                <h5 className="form__input-text">Capybara name:</h5>
                <input className="form__input" type="text" placeholder="Capybara name" value={name} onChange={nameHandler}/>
                <h5 className="form__input-text">About capybara:</h5>
                <input className="form__input" type="text" placeholder="Capybara information" value={info} onChange={infoHandler}/>
                <h5 className="form__input-text">Capybara image:</h5>
                <input className="form__input" type="text" placeholder="Capybara image" value={image} onChange={imageHandler}/>
                <button className="form__btn">Edit</button>
            </form>
        </div>
    )
}