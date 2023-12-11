const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency:'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits:2
})

const ResultItem = ({ yearDataItem, initialInvestment }) => {
    return (
        <tr key={yearDataItem.year}>
            <td>{yearDataItem.year}</td>
            <td>{formatter.format(yearDataItem.savingsEndOfYear)}</td>
            <td>{formatter.format(yearDataItem.yearlyInterest)}</td>
            <td>{formatter.format(yearDataItem.savingsEndOfYear - initialInvestment 
                - yearDataItem.yearlyContribution * yearDataItem.year)}</td>
            <td>{formatter.format(initialInvestment 
                + yearDataItem.yearlyContribution * yearDataItem.year)}</td>
        </tr>
    );
}

export default ResultItem;
