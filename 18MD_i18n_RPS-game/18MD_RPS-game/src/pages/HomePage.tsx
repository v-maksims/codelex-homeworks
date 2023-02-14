import style from '../styles/HomePage.module.scss';

type THomePageProps = {
    playerNameHandler: (name:string) => void,
    name: string
}

export default function HomePage ({ playerNameHandler, name }:THomePageProps) {
    return (
        <div className={ style.home }>
            <h2 className={ style.title }>Rock Paper Scissors</h2>
            <span className={ style.text }>
            Are you looking for a fun and exciting game to pass the time?
            Look no further than our cyber paper, cyber rock, cyber scissors game!
            Our game is easy to play and suitable for all ages. Simply choose your move,
            and see if you can beat computer.
            Whether you are looking for a quick distraction or a fun challenge,
            our game is sure to provide hours of entertainment.
            So why wait? Click on the Game to start playing now!
            </span>
            <div className={ style.inputWrap }>
                <span className={ style.label }>
                    your name:
                </span>
                <input
                    className={ style.input }
                    type="text"
                    placeholder='Enter your name'
                    value={ name }
                    onChange={ (e) => playerNameHandler(e.currentTarget.value) }
                />
                <span className={ style.underInput }>
                    You can just enter the name without pressing anything
                </span>
            </div>
            <img className={ style.image } src="http://localhost:3004/static/homeBG.jpg" alt="home-bg" />
        </div>
    );
}
