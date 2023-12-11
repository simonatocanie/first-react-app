
import ResultItem from '../ResultItem/ResultItem'
import styles from './ResultTable.module.css'

const ResultsTable = ({ yearlyData, initialInvestment }) => {
    return (
        <table className={styles.result}>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Total Savings</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {
                    yearlyData.map((item) => {
                        return (<ResultItem key={item.year} yearDataItem={item}
                            initialInvestment={initialInvestment} />)
                    })
                }
            </tbody>
        </table>
    );
}

export default ResultsTable;