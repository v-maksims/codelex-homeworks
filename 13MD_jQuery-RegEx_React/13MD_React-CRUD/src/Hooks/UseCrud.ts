import axios from "axios"
import { useEffect, useState } from "react"
import { TCapybarasData } from "../Types/Data"

export function UseCrud() {

    // States for cards
    const [cards, setCards] = useState<TCapybarasData[]>([])
    const [currentId, setCurrentId] = useState(0)
    // States for form
    const [name, setName] = useState('')
    const [info, setInfo] = useState('')
    const [image, setImage] = useState('')
    const [disable, setDisable] = useState(false)
    const [disableForm, setDisableForm] = useState(false)
    const [disableEdit, setDisableEdit] = useState(false)

    // Add card
    const fetchData = async () => {
        const { data: capybaraData } = await axios.get<TCapybarasData[]>('http://localhost:3004/capybaras')
        setCards(capybaraData)
    }

    // Remove card
    const deleteCard = (id: number) => {
        setCards(cards.filter(card => card.id !== id))
        axios.delete<TCapybarasData>(`http://localhost:3004/capybaras/${id}`);
    }

    useEffect(() => {
        fetchData()
    }, [])

    // Cards functions
    const createCard = (card: TCapybarasData) => {
        formBackHandler()
        setCards(prev => [...prev, card])
    }

    const editCard = (card: TCapybarasData, id: number) => {
        deleteCardVisual(id)
        editBackHandler()
        setCards(prev => [...prev, card])
    }

    const deleteCardVisual = (id: number) => {
        setCards(cards.filter(card => card.id !== id))
    }

    // Form functions
    const backHandlerChange = () => {
        setDisable(!disable)
        setDisableForm(false)
        setDisableEdit(false)

    }

    const formBackHandler = () => {
        setDisable(!disable)
        setDisableForm(!disableForm)
    }

    const editBackHandler = () => {
        setDisable(!disable)
        setDisableEdit(!disableEdit)
    }

    const editCardArea = (id: number) => {
        setCurrentId(id)
        editBackHandler()
    }

    // Form input el functions
    const nameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }
    const infoHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInfo(e.target.value)
    }
    const imageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setImage(e.target.value)
    }

    const checkInputName = (input: string) => {
        if (input.trim().length === 0) {
            return 'Anonymous'
        }
        return input
    }
    const checkInputInfo = (input: string) => {
        if (input.trim().length === 0) {
            return 'Information is classified'
        }
        return input
    }
    const checkInputImage = (input: string) => {
        if (input.trim().length === 0) {
            return 'https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg'
        }
        return input
    }

    return {
        cards,
        deleteCard,
        currentId,
        createCard,
        editCard,
        setCurrentId,
        name,
        info,
        image,
        nameHandler,
        infoHandler,
        imageHandler,
        editCardArea,
        disable,
        backHandlerChange,
        disableForm,
        disableEdit,
        formBackHandler,
        editBackHandler,
        checkInputImage,
        checkInputInfo,
        checkInputName
    }
}