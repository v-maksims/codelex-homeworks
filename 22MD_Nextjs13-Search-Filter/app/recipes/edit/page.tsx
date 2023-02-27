import Link from 'next/link';
import EditForm from './components/EditForm/EditForm';
import styles from './EditRecipePage.module.scss';

const EditRecipePage = () => (
    <div className={styles.pageWrap}>
        <EditForm/>
    </div>
);

export default EditRecipePage;
