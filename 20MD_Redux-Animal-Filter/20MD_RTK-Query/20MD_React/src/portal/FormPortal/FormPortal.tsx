import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Modal from '../../components/Modal/Modal';
import style from './FormPortal.module.scss';
import Form from '../../components/Form/Form';
import Input from '../../components/Input/Input';
import Selector from '../../components/Selector/components/Selector/Selector';
import Button from '../../components/Button/Button';
import { TAnimal, useCreateAnimalMutation, useGetSpeciesQuery } from '../../store/animalAPISlice';

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
    const [speciesInput, setSpeciesInput] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'onBlur',
    });

    const [createAnimal] = useCreateAnimalMutation();
    const { data: speciesData, isLoading, refetch } = useGetSpeciesQuery();

    const specTextHandler = () => {
        setSpeciesInput(!speciesInput);
    };

    const createAnimalHandler = async (data:Omit<TAnimal, '_id'>) => {
        await createAnimal(data).unwrap();
    };

    const onSubmit: SubmitHandler<Omit<TAnimal, '_id'>> = (data) => {
        createAnimalHandler({
            ...data,
            species: data.species.toLowerCase(),
        });
        openHandler();
    };

    if (isLoading) {
        return <h1>Loading species</h1>;
    }

    if (!speciesData) {
        throw Error('no species');
    }

    return (
        <div className={style.formPortalWrap}>
            <FormPortalFirst target={document.body}>
                <Modal
                    openHandler={openHandler}
                >
                    <Form
                        text='add animal'
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <label className={style.formItem}>
                            <span>Name:</span>
                            <Input
                                register={register}
                                name='name'
                                minLength={{
                                    value: 3,
                                    message: 'Min length 3 characters',
                                }}
                                maxLength={{
                                    value: 30,
                                    message: 'Max length 30 characters',
                                }}
                                require='empty field'
                            />
                            {errors?.name && <span
                                className={style.error}
                            >
                                {errors.name.message}
                            </span>}
                        </label>
                        <label className={style.formItem}>
                            <span>Image source:</span>
                            <Input
                                register={register}
                                name='image'
                                minLength={{
                                    value: 10,
                                    message: 'Min length 10 characters',
                                }}
                                require='empty field'
                            />
                            {errors?.image && <span
                                className={style.error}
                            >
                                {errors.image.message}
                            </span>}
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
                                    register={register}
                                    name='species'
                                    minLength={{
                                        value: 3,
                                        message: 'Min length 3 characters',
                                    }}
                                    maxLength={{
                                        value: 30,
                                        message: 'Max length 30 characters',
                                    }}
                                    require='empty field'
                                />
                                ) : (
                                    <Selector
                                        name='species'
                                        register={register}
                                        options={speciesData}
                                    />
                                )}
                            {errors?.species && <span
                                className={style.error}
                            >
                                {errors.species.message}
                            </span>}
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
