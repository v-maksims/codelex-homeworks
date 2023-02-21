import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import Modal from '../../components/Modal/Modal';
import style from './FormPortal.module.scss';
import Form from '../../components/Form/Form';
import { useAppDispatch, useAppSelector } from '../../store/storeHooks';
import { addNewAnimal, addNewSpecies, TAnimal } from '../../store/animalSlice';
import Input from '../../components/Input/Input';
import Selector from '../../components/Selector/components/Selector/Selector';
import SelectorItem from '../../components/Selector/components/SelectorItem/SelectorItem';
import Button from '../../components/Button/Button';

type TFormPortalFirstProps = {
    children: React.ReactNode;
    target: HTMLElement;
}

type TFormPortalProps = {
    openHandler: () => void
}

// eslint-disable-next-line arrow-body-style
const FormPortalFirst: React.FC<TFormPortalFirstProps> = ({ children, target }) => {
    return ReactDOM.createPortal(children, target);
};

export default function FormPortal ({ openHandler }:TFormPortalProps) {
    const dispatch = useAppDispatch();
    const { species } = useAppSelector((store) => store.animals);

    const [speciesInput, setSpeciesInput] = useState(false);

    const [animalData, setAnimalData] = useState<Omit<TAnimal, 'id'>>({
        image: '',
        name: '',
        spec: '',
    });

    const { image, name, spec } = animalData;

    const specTextHandler = () => {
        setSpeciesInput(!speciesInput);
    };

    const onSubmitHundler = () => {
        if (!species.includes(spec)) {
            dispatch(addNewSpecies(spec));
        }
        dispatch(addNewAnimal({
            ...animalData,
            id: nanoid(),
        }));
        openHandler();
    };

    return (
        <div className={style.formPortalWrap}>
            <FormPortalFirst target={document.body}>
                <Modal
                    openHandler={openHandler}
                >
                    <Form
                        text='add animal'
                        onSubmit={onSubmitHundler}
                    >
                        <label className={style.formItem}>
                            <span>Name:</span>
                            <Input
                                value={name}
                                onChange={(e) => setAnimalData({
                                    ...animalData,
                                    name: e.currentTarget.value,
                                })}
                                placeholder='Enter name...'
                                required={true}
                                type='text'
                            />
                        </label>
                        <label className={style.formItem}>
                            <span>Image source:</span>
                            <Input
                                value={image}
                                onChange={(e) => setAnimalData({
                                    ...animalData,
                                    image: e.currentTarget.value,
                                })}
                                placeholder='Image source...'
                                required={true}
                                type='text'
                            />
                        </label>
                        <label className={style.formItem}>
                            <span>Species
                                (<span
                                onClick={specTextHandler}
                                className={style.selectAdd}
                            >
                                {speciesInput ? 'Choise species' : 'Add new species'}
                            </span>):
                            </span>
                            {speciesInput
                                ? (<Input
                                    value={spec}
                                    onChange={(e) => setAnimalData({
                                        ...animalData,
                                        spec: e.currentTarget.value.toLowerCase(),
                                    })}
                                    placeholder='Enter new spec...'
                                    required={true}
                                    type='text'
                                />) : (<Selector
                                    required={true}
                                    value={spec}
                                    onChange={(e) => setAnimalData({
                                        ...animalData,
                                        spec: e.currentTarget.value,
                                    })}
                                >
                                    {species.map((item, i) => (
                                        <SelectorItem
                                            key={i}
                                            label={item}
                                        />
                                    ))}
                                </Selector>)}
                        </label>
                        <Button
                            label='add'
                            type='submit'
                        />
                    </Form>
                </Modal>
            </FormPortalFirst>
        </div>
    );
}
