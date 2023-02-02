import React from "react";
import "./CRUDFormStyle.scss"


type TCrudBackFormProps = {
    backHandler: () => void
    children: React.ReactNode
}

export default function CrudBackForm(props: TCrudBackFormProps) {
    const { backHandler, children} = props

    return (
        <>
            <div className="black-back" onClick={backHandler} >
            </div >
            {children}
        </>
    )
}