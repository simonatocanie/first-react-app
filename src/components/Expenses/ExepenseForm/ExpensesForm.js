import { useState } from 'react';
import Card from '../../Common/Card/Card';
import styles from './ExpensesForm.module.css';
import Button from '../../Common/Button/Button';
import ErrorModal from '../../Common/ErrorModal/ErrorModal'

const initialExpenseInput = {
    id: undefined,
    name: '',
    amount: ''
};

const ExpenseForm = (props) => {
    console.log(props)
    const [expenseInput, setExpenseInput] = useState(initialExpenseInput);
    const [isModalDisplayed, setIsModalDisplayed] = useState(false);

    const addExpenseHandler = (event) => {
        event.preventDefault();

        if (!expenseInput.name || !expenseInput.amount) {
            setIsModalDisplayed(true);
            return;
        }

        if (+expenseInput.amount < 0) {
            setIsModalDisplayed(true);
            return;
        }

        setExpenseInput(initialExpenseInput);
        props.onAddExpense(expenseInput)
    };

    const cancelHandler = (event) => {
        event.preventDefault();
        setExpenseInput(initialExpenseInput);
        props.onCancel()
    };

    const changeInputHandler = (event, prop) => {
        setExpenseInput(prevState => ({ ...prevState, [prop]: event.target.value }))
    };

    const closeModalHandler = () => {
        setIsModalDisplayed(false);
    }

    return (
        <>
            {isModalDisplayed && <ErrorModal title='Error' errorMessage='Something went wrong. Please recheck your inputs.'
                onCloseModal={closeModalHandler} />}
            <Card className='padding-30'>
                <form onSubmit={addExpenseHandler}
                    className={`${styles['form']} ${props.isFormDisabled ? styles['disabled-form'] : ''}`}>
                    <div>
                        <label htmlFor='name'>Name:</label>
                        <input id='name' type='text' placeholder='Enter the name of the expense'
                            value={expenseInput.name} onChange={(event) => changeInputHandler(event, 'name')} />
                    </div>

                    <div >
                        <label htmlFor='amount'>Amount:</label>
                        <input id='amount' type='number' placeholder='Enter the amount for the expense'
                            value={expenseInput.amount} onChange={(event) => changeInputHandler(event, 'amount')} />
                    </div>
                    <div>
                        <Button className='button' type='cancel' onClick={cancelHandler}>
                            Cancel
                        </Button>
                        <Button className='button' type='submit'>
                            Submit
                        </Button>
                    </div>
                    {props.isFound && <p className={`text-danger text-center ${styles['p-full-length']}`}>Please note that if the value is found in the list, the amount is updated.</p>}
                </form>
            </Card>
        </>
    );
}

export default ExpenseForm;