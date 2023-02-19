import { useState } from 'react';
import Button from '../../components/Button/Button';
import Form from '../../components/Form/Form';
import Input from '../../components/Input/Input';
import FormPortal from '../../portal/FormPortal/FormPortal';
import { addNewAnimal } from '../../store/animalSlice';
import { useAppSelector } from '../../store/storeHooks';
import style from './MainPage.module.scss';

export default function MainPage () {
    const { allAnimal } = useAppSelector((store) => store.animals);

    const [isOpen, setIsOpen] = useState(false);

    const openHandler = () => {
        setIsOpen(!isOpen);
    };

    console.log(allAnimal);
    return (
        <div className={style.mainPageWrap}>
            {isOpen && <FormPortal openHandler={openHandler}/>}
            {allAnimal.length === 0 && <span className={style.text}>No animals added yet</span>}
            <Button
                label='Add animal'
                onClick={openHandler}
                type='button'
            />
        </div>
    );
}
