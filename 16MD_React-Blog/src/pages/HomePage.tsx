import style from '../styles/HomePage.module.scss';

export default function HomePage () {
    return (
        <div>
            <h1 className={ style.title }>
                Technologies & Animals
            </h1>
            <p className={ style.paragraph }>
                A small blog where you can find various interesting posts
            </p>
            <p className={ style.paragraph }>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec felis velit.
                Suspendisse dictum sem ut placerat consectetur. Curabitur lobortis quam non
                ligula facilisis, molestie rhoncus nibh vestibulum.Etiam porttitor diam a mi
                tincidunt consectetur. Praesent vestibulum mauris vitae sapien finibus commodo.
                Aliquam dui felis, lobortis vitae lectus volutpat, hendrerit cursus elit.
                Nunc at tortor cursus, bibendum magna a, tempor sem. In eget sem nec
                leo congue faucibus.
            </p>
            <p className={ style.paragraph }>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Vel porro blanditiis minus rem.
                Libero similique aperiam provident possimus nulla nam minus repudiandae
                porro earum dolorumdeserunt autem repellendus molestiae
                quas quo, eum pariatur aliquam qui veritatis.Debitis, autem placeat
                iste voluptatum, blanditiis necessitatibus laborum dolorum laudantium
                cupiditate iure dignissimos quaerat.
            </p>

            <img
                className={ style.image }
                src="https://goo.su/rwkvi"
                alt="home-img"
            />
        </div>
    );
}
