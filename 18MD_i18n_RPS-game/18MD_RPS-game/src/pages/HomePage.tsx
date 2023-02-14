import useTranslateText from '../hooks/useTranslateText';
import style from '../styles/HomePage.module.scss';

type THomePageProps = {
    playerNameHandler: (name:string) => void,
    name: string
}

export default function HomePage ({ playerNameHandler, name }:THomePageProps) {
    const { t } = useTranslateText();
    return (
        <div className={ style.home }>
            <h2 className={ style.title }>{t('RPS')}</h2>
            <span className={ style.text }>
                {t('homePageText')}
            </span>
            <div className={ style.inputWrap }>
                <span className={ style.label }>
                    {t('nameEnter')}:
                </span>
                <input
                    className={ style.input }
                    type="text"
                    placeholder={ t('inputName')! }
                    value={ name }
                    onChange={ (e) => playerNameHandler(e.currentTarget.value) }
                />
                <span className={ style.underInput }>
                    {t('underInputName')}
                </span>
            </div>
            <img className={ style.image } src="http://localhost:3004/static/homeBG.jpg" alt="home-bg" />
        </div>
    );
}
