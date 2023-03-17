type TInstrument = {
    note: string;
    keyDown: string;
    audio: string;
}

type TDemoSound = {
    name: string;
    keys: string[];
    delay: number;
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

const GUITAR: TInstrument[] = [
    { note: 'bb', keyDown: 'w', audio: '/public/Instruments/guitar/guitar-bb.wav' },
    { note: 'cb', keyDown: 's', audio: '/public/Instruments/guitar/guitar-cb.wav' },
    { note: 'db', keyDown: 'x', audio: '/public/Instruments/guitar/guitar-db.wav' },
    { note: 'eb', keyDown: 'e', audio: '/public/Instruments/guitar/guitar-eb.wav' },
    { note: 'fb', keyDown: 'd', audio: '/public/Instruments/guitar/guitar-fb.wav' },
    { note: 'gb', keyDown: 'c', audio: '/public/Instruments/guitar/guitar-gb.wav' },
];

const PIANO_DEMO_SOUNDS: TDemoSound[] = [
    {
        name: 'tan-tan',
        keys: ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
        delay: 1000,
    },
    {
        name: 'Tin-tan-ton',
        keys: ['n', 'm', 'h', 'n', 'm', 'h', 'n', 'm', 'h', 'n', 'm', 'h', 'n', 'm', 'h', 'n', 'm', 'h', 's'],
        delay: 250,
    },
    {
        name: 'medium sound',
        keys: ['c', 'v', 'g', 'f', 'd', 'x', 'c', 'v', 'g', 'f', 'd', 'x', 'n', 'm', 'z'],
        delay: 500,
    },
];

const GUITAR_DEMO_SOUNDS: TDemoSound[] = [
    {
        name: 'ta-ta',
        keys: ['w', 's', 'x', 'e', 'd', 'c'],
        delay: 1000,
    },
    {
        name: 'Some music',
        keys: ['w', 'w', 's', 'x', 'd', 'w', 'w', 's', 'x', 'd', 'w', 'w', 's', 'x', 'd', 'c'],
        delay: 250,
    },
];

export {
    PIANO,
    PIANO_DEMO_SOUNDS,
    GUITAR,
    GUITAR_DEMO_SOUNDS,
};
