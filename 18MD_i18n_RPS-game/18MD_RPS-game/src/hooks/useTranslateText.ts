import { useTranslation } from 'react-i18next';

export default function useTranslateText () {
    const { t, i18n } = useTranslation();
    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
    };
    return {
        changeLanguage,
        t,
    };
}
