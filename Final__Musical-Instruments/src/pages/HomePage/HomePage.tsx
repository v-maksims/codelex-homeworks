import styles from './HomePage.module.scss';

const HomePage = () => (
    <>
        <h1 className={styles.title} >
            Play instruments online
        </h1>
        <div className={styles.paragraphImg} >
            <p className={styles.paragraph} >
                Welcome to our website, where you can bring your musical fantasies to life! Here, you will find a unique opportunity to play musical instruments online, without the need to purchase expensive equipment or attend a music school.
            </p>
            <img className={styles.image} src="./home-first.jpg" alt="home-first" />
        </div>
        <div className={styles.imgParagraph} >
            <img className={styles.image} src="./home-second.jpg" alt="home-second" />
            <p className={styles.paragraph} >
                To get started, simply browse our selection of instruments and choose the one that interests you the most. Once you have selected an instrument, you can begin playing right away using our easy-to-use interface.
            </p>
        </div>
        <p className={styles.paragraph} >
            Our platform is designed to be accessible to everyone, regardless of their level of experience or expertise. Whether you are just starting out or have been playing for years, you will find something here to challenge and inspire you.
        </p>
        <div className={styles.underline} />
        <span className={styles.finalText} >
            So why wait? Start exploring the wonderful world of music!
        </span>
    </>
);

export default HomePage;
