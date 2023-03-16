type TInstrument = {
    note: string;
    keyDown: string;
    audio: string;
}

const PIANO: TInstrument[] = [
    { note: 'a', keyDown: 'z', audio: './public/Instruments/piano/piano-a.wav' },
    { note: 'bb', keyDown: 's', audio: './public/Instruments/piano/piano-bb.wav' },
    { note: 'b', keyDown: 'x', audio: './public/Instruments/piano/piano-b.wav' },
    { note: 'cb', keyDown: 'd', audio: './public/Instruments/piano/piano-cb.wav' },
    { note: 'c', keyDown: 'c', audio: './public/Instruments/piano/piano-c.wav' },
    { note: 'd', keyDown: 'v', audio: './public/Instruments/piano/piano-d.wav' },
    { note: 'eb', keyDown: 'f', audio: './public/Instruments/piano/piano-eb.wav' },
    { note: 'e', keyDown: 'b', audio: './public/Instruments/piano/piano-e.wav' },
    { note: 'fb', keyDown: 'g', audio: './public/Instruments/piano/piano-fb.wav' },
    { note: 'f', keyDown: 'n', audio: './public/Instruments/piano/piano-f.wav' },
    { note: 'gb', keyDown: 'h', audio: './public/Instruments/piano/piano-gb.wav' },
    { note: 'g', keyDown: 'm', audio: './public/Instruments/piano/piano-g.wav' },
];

export {
    PIANO,
};
