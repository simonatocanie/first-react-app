
import styles from './ExpensesTotal.module.css'
const ExpenseTotal = ({ values }) => {
    var sum = values.reduce((acc, currentValue) => {
        return (+acc) + (+currentValue)
    }, 0);

    console.log(sum)

    return (
        <div className={styles['div-content']}>
            <div className={styles['div-sum']}>
                <p>{sum + ' lei'}</p>
            </div>
        </div>
    );
}

export default ExpenseTotal;