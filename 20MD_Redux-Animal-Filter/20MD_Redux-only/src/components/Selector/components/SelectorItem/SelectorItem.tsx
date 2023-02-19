import style from './SelectorItem.module.scss';

type TSelectorItemProps = {
    label: string;
}

export default function SelectorItem (props: TSelectorItemProps) {
    const { label } = props;
    return (
        <option>{label}</option>
    );
}
