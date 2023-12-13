
import Card from '../Card/Card';
import Button from '../Button/Button';
import styles from './ErrorModal.module.css';


const ErrorModal = (props) => {
    const closeHandler = () => {
        props.onCloseModal();
    };

    return (
        <div className={styles['backdrop']}>
            <Card className='modal'>
                <header>{props.title}</header>
                <div>
                    < p className='cover-full text-danger'>{props.errorMessage}</p></div>
                <footer>
                    <Button type="button" className='button' onClick={closeHandler}>Confirm</Button>
                </footer>
            </Card>
        </div>
    )
}
export default ErrorModal;