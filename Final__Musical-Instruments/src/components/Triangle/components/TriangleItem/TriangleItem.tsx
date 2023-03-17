import useInstrument from '../../../../hooks/useInstrument';
import styles from './TriangleItem.module.scss';

type TTriangleItemProps = {
    audio: string;
    keyDown: string;
    disabled: boolean;
    setClassName: (active: boolean, disabled: boolean) => string;
}

const TriangleItem = (props: TTriangleItemProps) => {
    const {
        audio,
        keyDown,
        disabled,
        setClassName,
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
                className={styles[setClassName(active, disabled)]}
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
