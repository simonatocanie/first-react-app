
import styles from './ExpensesList.module.css';
import Button from '../../Common/Button/Button';

const ExpensesList = (props) => {
    const removeExpenseHandler = (item) => {
        props.onRemoveExpense(item)
    }

    return (
        <div className="text-center">
            <h2>ExpensesList</h2>
            {
                props.expensesValues?.map(item => {
                    return (
                        <div key={item.id} className={styles['list-expenses']}>
                            <input className={styles['inputs-expenses']} type="text" value={item.name} readOnly />
                            <input className={styles['inputs-expenses']} type="text"
                                value={`${item.amount} lei`} readOnly />
                            <Button className='close-btn' onClick={() => removeExpenseHandler(item)}>
                                <span className="close-btn">&times;</span>
                            </Button>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default ExpensesList;