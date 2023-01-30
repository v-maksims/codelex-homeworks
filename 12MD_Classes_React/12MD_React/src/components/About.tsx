import { AboutText } from "./AboutText"

type TAbout = {
    changeAbout: () => void
}

export function About({ changeAbout }: TAbout) {
    return (
        <>
            <div className="blackBack" onClick={changeAbout}/>
            <div className="aboutInfo">
                <AboutText />
            </div>
        </>
    )
}