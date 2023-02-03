import React, { useEffect, useRef, useState } from "react";
import { v4 } from "uuid";

export default function useMainLogic() {
    const someDiv = useRef<HTMLDivElement>(null)

    // Form
    const [valOne, setValOne] = useState('')
    const [valTwo, setValTwo] = useState('')
    const [inputs, setInputs] = useState<string[]>([])
    // Button disabled
    const [disabled, setDisabled] = useState(true)
    // counter
    const [counter, setCounter] = useState(0)
    // Dropdown
    const [selected, setSelected] = useState('Choice color')
    const [boxs, setBoxs] = useState<React.ReactNode[]>([])

    // Counter and Input first
    const [countFirst, setCountFirst] = useState(0)
    const [valueFirst, setValueFirst] = useState('')
    // Counter and Input second
    const [countSecond, setCountSecond] = useState(100)
    const [valueSecond, setValueSecond] = useState('')
    // Div change bg
    const [changeBg, setChangeBg] = useState(false)

    const [absolute, setAbsolute] = useState(false)


    useEffect(() => {
        console.log('First render')
    }, [])

    useEffect(() => {
        console.log('render')
    }, [
        valueFirst,
        valueSecond,
        countSecond,
        countFirst,
        inputs,
        disabled,
        boxs,
        counter,
        changeBg
    ])

    useEffect(() => {
        countFirst && console.log('Changing count')
    }, [countFirst])

    useEffect(() => {
        valueFirst && console.log('Input change')
    }, [valueFirst])

    // Form
    const inputFocus = useRef<HTMLInputElement>(null)
    const submitHandler = (e: React.FormEvent) => {
        setInputs([])
        e.preventDefault()
        setInputs([valOne, valTwo])
        clearInputs()
    }
    const inputOneHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValOne(e.target.value)
    }
    const inputTwoHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValTwo(e.target.value)
    }
    const clearInputs = () => {
        setValOne('')
        setValTwo('')
    }
    useEffect(() => {
        inputFocus.current?.focus()
    }, [inputs])

    //Disable button
    useEffect(() => {
        setTimeout(() => {
            setDisabled(false)
        }, 5000)
    }, [])

    // Counter
    const buttonCountHandler = () => {
        setCounter(counter + 1)
    }

    // Dropdown
    const selectorHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelected(e.target.value)
    }
    const buttonAddHandler = () => {
        selected !== 'Choice color' && setBoxs([
            <div
                key={v4()}
                className={`dropdown__element dropdown__element--${selected}`}
            >
            </div>,
            ...boxs
        ])

        console.log(boxs)
    }

    // Counter and input first
    const inputHandlerFirst = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValueFirst(e.target.value)
    }
    const buttonHanlerFirst = () => {
        setCountFirst(countFirst + 1)
    }

    // Counter and input second
    const inputHandlerSecond = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValueSecond(e.target.value)
    }
    const buttonHanlerSecond = () => {
        setCountSecond(countSecond + 1)
    }

    // Div change bg
    const buttonHandlerBg = () => {
        setChangeBg(!changeBg)
        if (someDiv.current) {
            if (someDiv.current.style.backgroundColor !== "gold") {
                someDiv.current.style.backgroundColor = "gold"
            } else {
                someDiv.current.style.backgroundColor = ""
            }
        }
    }

    const buttonHandlerPosition = () => {
        if (someDiv.current) {
            if (absolute) {
                someDiv.current.style.position = "static"
            } else {
                someDiv.current.style.position = "absolute"
                someDiv.current.style.right = '10px'
                someDiv.current.style.top = '10px'
            }
        }
        setAbsolute(!absolute)
    }

    const buttonCloneHandler = () => {
        if (someDiv.current) {
            const divRef = someDiv.current
            const clone = divRef.cloneNode(true)
            divRef.parentNode?.appendChild(clone)
        }
    }

    return {
        submitHandler,
        inputFocus,
        valOne,
        inputOneHandler,
        valTwo,
        inputTwoHandler,
        inputs,
        disabled,
        counter,
        buttonCountHandler,
        buttonAddHandler,
        selected,
        selectorHandler,
        boxs,
        inputHandlerFirst,
        buttonHanlerFirst,
        countFirst,
        valueFirst,
        inputHandlerSecond,
        buttonHanlerSecond,
        countSecond,
        valueSecond,
        someDiv,
        absolute,
        buttonHandlerBg,
        buttonHandlerPosition,
        buttonCloneHandler
    }
}