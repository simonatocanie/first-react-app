
import Card from '../Card/Card';
import Button from '../Button/Button';
import styles from './ErrorModal.module.css';

import  ReactDOM  from 'react-dom';

const Backdrop = props => {
    return <div className={styles['backdrop']} onClick={props.onClick} />;
}
const ErrorModalContent = props => {
    return (
        <Card className='modal'>
            <header className='text-center'>{props.title}</header>
            <div>
                <p className='row-full text-danger text-center'>{props.errorMessage}</p></div>
            <footer className='text-center row-full'>
                <Button type="button" className='button' onClick={props.onClick}>Confirm</Button>
            </footer>
        </Card>
    );
}
const ErrorModal = (props) => {
    const closeHandler = () => {
        props.onCloseModal();
    };

    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop onClick={closeHandler} />,
                document.getElementById('backdrop-div')
            )}

            {ReactDOM.createPortal(
                <ErrorModalContent title={props.title}
                    errorMessage={props.errorMessage}
                    onClick={closeHandler} />,
                document.getElementById('modal-div')
            )}
        </>
    )
}
export default ErrorModal;