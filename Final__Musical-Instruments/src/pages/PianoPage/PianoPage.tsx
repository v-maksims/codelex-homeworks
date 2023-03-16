import Piano from '../../components/Piano/Piano/Piano';
import useDemoPlay from '../../hooks/useDemoPlay';

const PianoPage = () => {
    const { handleDemoPlay } = useDemoPlay();

    return (
        <>
            <Piano/>
            <button onClick={() => handleDemoPlay(['z', 'z', 'x', 'c', 'z', 'z', 'x', 'c', 'z', 'z', 'x', 'c'], 400)}>play</button>
        </>
    );
};

export default PianoPage;
