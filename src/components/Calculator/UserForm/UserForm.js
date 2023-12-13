import { useState } from 'react';
import styles from './UserForm.module.css'

const initialUserValues = {
    currentSavings: '',
    yearlyContribution: '',
    expectedInterest: '',
    duration: ''
};

const UserForm = (props) => {
    const [uservalues, setuserValues] = useState(initialUserValues);
    const [isInvalid, setIsInvalid] = useState(false);

    const submitHandler = (event) => {
        event.preventDefault();
        if (areInputsInvalid()) {
            setIsInvalid(true);
        } else {
            props.onCalculate(uservalues);
        }
    };

    const inputChangeHandler = (event, prop) => {
        let valueInput = event.target.value;
        setuserValues(prevState => {
            return { ...prevState, [prop]: valueInput }
        });
        setIsInvalid(!valueInput);
    };

    const resetValuesHandler = () => {
        setuserValues(initialUserValues);
        setIsInvalid(false);
        props.onResetValues({});
    }

    const areInputsInvalid = () => {
        return !(uservalues.currentSavings && uservalues.yearlyContribution && uservalues.expectedInterest
            && uservalues.duration);
    }

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <div className={styles['input-group']}>
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input type="number" id="current-savings" value={uservalues.currentSavings}
                        onChange={(event) => inputChangeHandler(event, 'currentSavings')} />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input type="number" id="yearly-contribution" value={uservalues.yearlyContribution}
                        onChange={(event) => inputChangeHandler(event, 'yearlyContribution')} />
                </p>
            </div>
            <div className={styles['input-group']}>
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>
                    <input type="number" id="expected-return" value={uservalues.expectedInterest}
                        onChange={(event) => inputChangeHandler(event, 'expectedInterest')} />
                </p>
                <p>
                    <label htmlFor="duration" value={uservalues.duration}>Investment Duration (years)</label>
                    <input type="number" id="duration" min="1" onChange={(event) => inputChangeHandler(event, 'duration')} />
                </p>
            </div>
            <p className={styles.actions}>
                <button type="reset" className={styles.buttonAlt} onClick={resetValuesHandler}>
                    Reset
                </button>
                <button type="submit" className={styles.button}>
                    Calculate
                </button>
            </p>
            {
                isInvalid ?
                    <p className='text-danger text-center cover-full'>
                        Please check your inputs, all info required
                    </p>
                    : ''
            }
        </form>
    );
}
export default UserForm;