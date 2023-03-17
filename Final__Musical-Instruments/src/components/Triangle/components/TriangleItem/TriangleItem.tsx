import useInstrument from '../../../../hooks/useInstrument';
import styles from './TriangleItem.module.scss';

type TTriangleItemProps = {
    audio: string;
    keyDown: string;
    disabled: boolean;
    setTriangleClassName: (active: boolean, disabled: boolean) => 'key--active' | 'key--disabled' | 'key'
}

const TriangleItem = (props: TTriangleItemProps) => {
    const {
        audio,
        keyDown,
        disabled,
        setTriangleClassName,
    } = props;

    const {
        audioRef,
        playAudio,
        active,
        setActive,
    } = useInstrument(keyDown);

    return (
        <>
            <span
                className={styles[setTriangleClassName(active, disabled)]}
                onClick={() => !disabled && playAudio()}
            >
                {keyDown}
            </span>
            <audio
                ref={audioRef}
                src={audio}
                onEnded={() => setActive(false)}
            />
        </>
    );
};

export default TriangleItem;
