import { useEffect, useRef, useState } from "react"

export default function useFirstForm() {
    const inputFocus = useRef<HTMLInputElement>(null)

    const [inputs, setInputs] = useState<string[]>([])
    const [valOne, setValOne] = useState('')
    const [valTwo, setValTwo] = useState('')


    const submitHandler = (e: React.FormEvent) => {
        setInputs([])
        e.preventDefault()
        setInputs([valOne, valTwo])
        clearInputs()
    }

    const clearInputs = () => {
        setValOne('')
        setValTwo('')
    }

    const inputOneHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValOne(e.target.value)
    }
    const inputTwoHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValTwo(e.target.value)
    }

    useEffect(() => {
        inputFocus.current?.focus()
    }, [inputs])

    return {
        submitHandler,
        inputOneHandler,
        inputTwoHandler,
        valOne,
        valTwo,
        inputFocus,
        inputs
    }
}