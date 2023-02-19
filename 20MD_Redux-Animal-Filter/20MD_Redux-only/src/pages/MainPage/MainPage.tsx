import { useState } from 'react';
import Button from '../../components/Button/Button';
import CardItem from '../../components/Card/components/CardItem/CardItem';
import CardList from '../../components/Card/components/CardList/CardList';
import FormPortal from '../../portal/FormPortal/FormPortal';
import { useAppSelector } from '../../store/storeHooks';
import style from './MainPage.module.scss';

export default function MainPage () {
    const { allAnimal } = useAppSelector((store) => store.animals);

    const [isOpen, setIsOpen] = useState(false);

    const openHandler = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={style.mainPageWrap}>
            {isOpen && <FormPortal openHandler={openHandler}/>}
            {allAnimal.length === 0 ? (<span className={style.text}>No animals added yet</span>)
                : (<CardList>
                    {allAnimal.map(({ image, name, spec }, i) => (
                        <CardItem
                            key={i}
                            image={image}
                            name={name}
                            species={spec}
                        />
                    ))}
                </CardList>)
            }

            <Button
                label='Add animal'
                onClick={openHandler}
                type='button'
            />
        </div>
    );
}
