import { useState } from 'react';
import { useAppSelector } from '../../store/storeHooks';
import Button from '../../components/Button/Button';
import CardItem from '../../components/Card/components/CardItem/CardItem';
import CardList from '../../components/Card/components/CardList/CardList';
import SpeciesItem from '../../components/Species/components/SpeciesItem/SpeciesItem';
import SpeciesList from '../../components/Species/components/SpeciesList/SpeciesList';
import FormPortal from '../../portal/FormPortal/FormPortal';
import style from './MainPage.module.scss';

export default function MainPage () {
    const { allAnimal, species, sortedAnimals } = useAppSelector((store) => store.animals);

    const [isOpen, setIsOpen] = useState(false);
    const [filtred, setFiltred] = useState(false);

    const openHandler = () => {
        setIsOpen(!isOpen);
    };

    const filterHandler = () => {
        setFiltred(true);
    };

    const filterRemoveHandler = () => {
        setFiltred(false);
    };

    return (
        <div className={style.mainPageWrap}>
            {isOpen && <FormPortal openHandler={openHandler}/>}

            <SpeciesList
                onClick={filterRemoveHandler}
            >
                {species.map((item, i) => <SpeciesItem
                    key={i}
                    species={item}
                    onClick={filterHandler}
                />)}
            </SpeciesList>

            {allAnimal.length === 0 && (<span className={style.text}>No animals added yet</span>)}

            {filtred ? (<CardList>
                {sortedAnimals.map(({ image, name, spec }, i) => (
                    <CardItem
                        key={i}
                        image={image}
                        name={name}
                        species={spec}
                        id={i}
                    />
                ))}
            </CardList>) : (
                <CardList>
                    {allAnimal.map(({ image, name, spec }, i) => (
                        <CardItem
                            key={i}
                            image={image}
                            name={name}
                            species={spec}
                            id={i}
                        />
                    ))}
                </CardList>
            )}
            <Button
                label='Add animal'
                onClick={openHandler}
                type='button'
            />
        </div>
    );
}
