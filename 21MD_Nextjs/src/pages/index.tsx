import MainLayout from '@/layouts/MainLayout/MainLayout';
import style from '../styles/HomePage.module.scss';

export default function Home () {
    return (
        <MainLayout
            title='Home'
        >
            <h1
                className={style.title}
            >
                home page
            </h1>
            <p className={style.paragraph}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, voluptatem eum,
                impedit commodi fugit ut repudiandae accusamus consequatur
                earum fugiat pariatur provident dolor necessitatibus. Nostrum,
                odit dolores! Sed, incidunt. Non.
            </p>
        </MainLayout>
    );
}
