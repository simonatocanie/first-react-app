import { useState } from "react";
import ExpenseForm from "./ExepenseForm/ExpensesForm";
import ExpensesList from "./ExpensesList/ExpensesList";
import ExpenseTotal from "./ExpenseTotal/ExpenseTotal"
import Button from "../Common/Button/Button";
import styles from "./Expenses.module.css"

const Expenses = () => {
    const [expenses, setExpenses] = useState([]);
    const [isFound, setIsFound] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const enableFormHandler = () => {
        setIsButtonDisabled(true);
        setIsFound(false);
    }
    const addExpenseHandler = (userInput) => {
        const expenseFound = expenses.find(x => x.name === userInput.name);

        if (expenseFound) {
            let indexOfExpenseFound = expenses.indexOf(expenseFound);
            let updatedExpenses = [...expenses];
            updatedExpenses[indexOfExpenseFound] = {
                ...expenses[indexOfExpenseFound],
                amount: userInput.amount
            };
            setExpenses(() => (updatedExpenses));
            setIsFound(true);
        }
        else {
            const ids = expenses.map(x => x.id);
            let newId = 0;
            if (expenses.length > 0) {
                newId = Math.max(...ids);
            }

            userInput.id = newId + 1;
            setExpenses(prevState => ([...prevState, userInput]));
            setIsFound(false)
        }

        setIsButtonDisabled(false);
    };

    const onCancelHandler = () => {
        console.log('cancel')
        setIsButtonDisabled(false);
    }

    const removeExpenseHandler = (item) => {
        setExpenses(expenses.filter(x => x.id !== item.id));
    }

    return (
        <div className={styles['div-block']}>
            <div>
                <Button type="button" className={'button button-add'}
                    disabled={isButtonDisabled} onClick={enableFormHandler}>Add expense </Button>
            </div>

            <div>
                <ExpenseForm onAddExpense={addExpenseHandler} onCancel={onCancelHandler} isFound={isFound} isFormDisabled={!isButtonDisabled} />
                {expenses.length === 0 && <div className={`text-center ${styles['display-flex']}`} >
                    <p>No expenses added</p>
                </div>}
                {expenses.length > 0 &&
                    <ExpensesList expensesValues={expenses} onRemoveExpense={removeExpenseHandler} />
                }
                <ExpenseTotal values={expenses.map((item) => item.amount)} />
            </div>
        </div>
    );
}

export default Expenses;