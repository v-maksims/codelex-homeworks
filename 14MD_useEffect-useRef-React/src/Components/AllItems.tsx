import Form from "./Form";
import DisabledButton from "./DisabledButton";
import Counter from "./Counter";
import Dropdown from "./Dropdown";
import CounterAndInput from "./CounterAndInput";
import DivButtons from "./DivButtons";
import DivBox from "./DivBox";
import useMainLogic from "../Hooks/mainLogic";

export default function AllItems() {
    const {
        submitHandler,
        inputFocus,
        inputOneHandler,
        inputTwoHandler,
        inputs,
        valOne,
        valTwo,
        boxs,
        buttonAddHandler,
        buttonCountHandler,
        counter,
        disabled,
        selected,
        selectorHandler,
        absolute,
        buttonCloneHandler,
        buttonHandlerBg,
        buttonHandlerPosition,
        buttonHanlerFirst,
        buttonHanlerSecond,
        countFirst,
        countSecond,
        inputHandlerFirst,
        inputHandlerSecond,
        someDiv,
        valueFirst,
        valueSecond
    } = useMainLogic()


    return (
        <>
            <Form
                onSubmit={submitHandler}
                inputFocus={inputFocus}
                valOne={valOne}
                inputOneHandler={inputOneHandler}
                valTwo={valTwo}
                inputTwoHandler={inputTwoHandler}
                inputs={inputs}
            />
            <DisabledButton
                disabled={disabled}
            />
            <Counter
                counter={counter}
                onClick={buttonCountHandler}
            />
            <Dropdown
                onClick={buttonAddHandler}
                selected={selected}
                onChange={selectorHandler}
                boxs={boxs}
            />
            <CounterAndInput
                onChange={inputHandlerFirst}
                onClick={buttonHanlerFirst}
                count={countFirst}
                value={valueFirst}
                changeFontSize={false}
                changeDocumentTitle={false}
            />
            <CounterAndInput
                onChange={inputHandlerSecond}
                onClick={buttonHanlerSecond}
                count={countSecond}
                value={valueSecond}
                changeFontSize={true}
                changeDocumentTitle={true}
            />
            <DivBox
                someDiv={someDiv}
                absolute={absolute}
            />
            <DivButtons
                buttonHandlerBg={buttonHandlerBg}
                buttonHandlerPosition={buttonHandlerPosition}
                buttonCloneHandler={buttonCloneHandler}
            />
        </>
    )
}