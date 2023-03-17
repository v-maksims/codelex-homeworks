const useInstrumentClass = (instrument: string) => {
    const setClassName = (active: boolean, disabled: boolean) => {
        if (active) {
            return `${instrument}--active`;
        }

        if (disabled) {
            return `${instrument}--disabled`;
        }

        return instrument;
    };

    return {
        setClassName,
    };
};

export default useInstrumentClass;
