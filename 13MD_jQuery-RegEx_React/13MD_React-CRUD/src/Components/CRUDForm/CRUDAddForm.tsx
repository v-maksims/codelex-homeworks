import axios from "axios"
import { TCapybarasData } from "../../Types/Data"
import { UseCrud } from "../../Hooks/UseCrud"


type TCreateCardProps = {
    onCreate: (card: TCapybarasData) => void,
}

export default function CrudAddForm(props: TCreateCardProps) {
    const { onCreate } = props
    const { image, imageHandler, info, infoHandler, name, nameHandler, checkInputImage, checkInputInfo, checkInputName} = UseCrud()

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault()
        const { data: newCapyCard } = await axios.post<TCapybarasData>('http://localhost:3004/capybaras', {
            name: checkInputName(name),
            info: checkInputInfo(info),
            image: checkInputImage(image)
        })
        onCreate(newCapyCard)
    }

    return (
        <div className="form">
            <h4 className="form__title">Add new capybara</h4>
            <form onSubmit={submitHandler}>
                <h5 className="form__input-text">Capybara name:</h5>
                <input className="form__input" type="text" placeholder="Capybara name" value={name} onChange={nameHandler}/>
                <h5 className="form__input-text">About capybara:</h5>
                <input className="form__input" type="text" placeholder="Capybara information" value={info} onChange={infoHandler}/>
                <h5 className="form__input-text">Capybara image:</h5>
                <input className="form__input" type="text" placeholder="Capybara image" value={image} onChange={imageHandler}/>
                <button className="form__btn">ADD</button>
            </form>
        </div>
    )
}