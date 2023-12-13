import ResultsTable from './ResultsTable/ResultsTable';
import UserForm from './UserForm/UserForm'
import Header from '../Header/Header'
import { useState } from 'react';

const Calculator = () => {
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  const resetHandler = (props) => {
    setUserInput(null);
  };
  const yearlyData = [];

  if (userInput) {
    let currentSavings = +userInput.currentSavings;
    const yearlyContribution = +userInput.yearlyContribution;
    const expectedInterest = +userInput.expectedInterest / 100;
    const duration = +userInput.duration;

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedInterest;
      currentSavings += yearlyInterest + yearlyContribution;

      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <Header />
      <UserForm onCalculate={calculateHandler} onResetValues={resetHandler} />
      {!userInput && <p className='text-center row-full'>No results calculated yet</p>}
      {userInput && <ResultsTable yearlyData={yearlyData} initialInvestment={+userInput.currentSavings} />}
    </div>
  );
}
export default Calculator;