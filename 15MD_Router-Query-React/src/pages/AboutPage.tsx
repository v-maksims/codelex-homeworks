import About from '../components/About';

const title = 'About us';
const textOne = 'Welcome to the ultimate Rick and Morty hub! Here you can explore all your favorite characters from the hit animated series and get an in-depth look at each episode.';
const textTwo = 'Our character page provides you with main information about each character, from Rick Sanchez to Beth Smith.';
const textThree = `And, if you want to dive deeper into the episodes, our episode page has got you covered. Simply click on the episode 
or character you want to know more about and get ready for an immersive experience!`;
const textFour = 'So, grab your portal gun and join us on this adventure through the multiverse!';
const image = 'https://goo.su/ADUbA';

export default function AboutPage () {
    return(
        <About 
            title={title} 
            textOne={textOne}
            textTwo={textTwo}
            textThree={textThree}
            textFour={textFour}
            image={image}
        />
    );
}