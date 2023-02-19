import { useAppDispatch } from '../../../../store/storeHooks';
import { sortBySpecies } from '../../../../store/animalSlice';

import style from './SpeciesItem.module.scss';

type TSpeciesItemProps = {
    species: string;
    onClick: () => void
}

export default function SpeciesItem ({ species, onClick }:TSpeciesItemProps) {
    const dispatch = useAppDispatch();

    return (
        <>
            <span
                className={style.speciesItemWrap}
                onClick={() => {
                    dispatch(sortBySpecies(species.toLocaleLowerCase()));
                    onClick();
                }}
            >
                {species}
            </span>
        </>
    );
}
