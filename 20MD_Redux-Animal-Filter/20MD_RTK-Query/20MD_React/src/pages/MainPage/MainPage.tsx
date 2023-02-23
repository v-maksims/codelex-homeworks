import { useState, useEffect } from 'react';
import Button from '../../components/Button/Button';
import CardItem from '../../components/Card/components/CardItem/CardItem';
import CardList from '../../components/Card/components/CardList/CardList';
import SpeciesItem from '../../components/Species/components/SpeciesItem/SpeciesItem';
import SpeciesList from '../../components/Species/components/SpeciesList/SpeciesList';
import FormPortal from '../../portal/FormPortal/FormPortal';
import { useGetAllAnimalsQuery, useGetBySpeciesQuery, useGetSpeciesQuery } from '../../store/animalAPISlice';
import style from './MainPage.module.scss';

export default function MainPage () {
    const [isOpen, setIsOpen] = useState(false);
    const [filter, setFilter] = useState('all');

    const { isLoading: areAnenimalsLoad, data: animalsData } = useGetAllAnimalsQuery();
    const { isLoading: areSpeciesLoad, data: speciesData } = useGetSpeciesQuery();

    const { isLoading: areFiltredLoad, data: filtredData } = useGetBySpeciesQuery(filter);

    const openHandler = () => {
        setIsOpen(!isOpen);
    };

    const speciesFilterHandler = (species: string) => {
        setFilter(species);
    };

    if (areAnenimalsLoad || areSpeciesLoad || areFiltredLoad) {
        return <h1>Loading...</h1>;
    }

    if (!animalsData) {
        throw Error('no data');
    }

    if (!speciesData) {
        throw Error('no species');
    }
    if (!filtredData) {
        throw Error('no filter');
    }

    return (
        <div className={style.mainPageWrap}>
            {isOpen && <FormPortal openHandler={openHandler}/>}

            <SpeciesList
                onClick={speciesFilterHandler}
            >
                {speciesData.map((item, i) => <SpeciesItem
                    key={i}
                    species={item}
                    onClick={speciesFilterHandler}
                />)}
            </SpeciesList>

            {animalsData.length === 0 && (<span className={style.text}>No animals added yet</span>)}

            <Button
                label='Add animal'
                onClick={openHandler}
                type='button'
            />
            {filter === 'all' ? (<CardList>
                {animalsData.map(({
                    image, name, species, _id,
                }) => (
                    <CardItem
                        key={_id}
                        image={image}
                        name={name}
                        species={species}
                        id={_id}
                    />
                ))}
            </CardList>) : (<CardList>
                {filtredData.map(({
                    image, name, species, _id,
                }) => (
                    <CardItem
                        key={_id}
                        image={image}
                        name={name}
                        species={species}
                        id={_id}
                    />
                ))}
            </CardList>)}
        </div>
    );
}
