const useDemoPlay = () => {
    const playNote = (key: string) => {
        document.dispatchEvent(new KeyboardEvent('keyup', { key }));
    };

    const handleDemoPlay = (notes: string[], delayNum: number) => {
        let delay = 0;
        notes.forEach((note) => {
            setTimeout(() => {
                playNote(note);
            }, delay);
            delay += delayNum;
        });
    };

    return {
        handleDemoPlay,
    };
};

export default useDemoPlay;
