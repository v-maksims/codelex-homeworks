import style from './SpeciesItem.module.scss';

type TSpeciesItemProps = {
    species: string;
    onClick: (species:string) => void
}

export default function SpeciesItem ({ species, onClick }:TSpeciesItemProps) {
    return (
        <>
            <span
                className={style.speciesItemWrap}
                onClick={() => onClick(species)}
            >
                {species}
            </span>
        </>
    );
}
