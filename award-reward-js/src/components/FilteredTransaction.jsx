import React, { useState, useEffect } from 'react';
import TransactionTable, { transactionsArrayPropType } from './TransactionTable';

const FilteredTransaction = ({ transactions }) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const currentYear = 2025;
    const years = Array.from({ length: 5 }, (_, i) => currentYear + i);
    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
    const [selectedYear, setSelectedYear] = useState(currentYear);
    const [filteredTransactions, setFilteredTransactions] = useState([]);

    useEffect(() => {
        filterTransactions();
    }, [selectedMonth, selectedYear]);

    const filterTransactions = () => {
        const filtered = transactions.filter(transaction => {
            const date = new Date(transaction.date);
            return date.getMonth() + 1 === selectedMonth && date.getFullYear() === selectedYear;
        });
        setFilteredTransactions(filtered);
    };


    return (
        <div>
            <div className="filter-container">
                <label style={{marginLeft: 5}}>Month:</label>
                <select style={{marginLeft: 5}} id="month-select" value={selectedMonth} onChange={(e) => setSelectedMonth(Number(e.target.value))}>
                    {months.map((month, index) => (
                        <option key={index} value={index + 1}>{month}</option>
                    ))}
                </select>
                <label style={{marginLeft: 5}}>Year:</label>
                <select style={{marginLeft: 5}} id="year-select" value={selectedYear} onChange={(e) => setSelectedYear(Number(e.target.value))}>
                    {years.map((year, index) => (
                        <option key={index} value={year}>{year}</option>
                    ))}
                </select>
            </div>

            <div id="transaction-container">
                {filteredTransactions.length > 0 ? (
                    <TransactionTable transactions={filteredTransactions} />
                ) : (
                    <p>No transaction</p>
                )}
            </div>

        </div>
    );
};

FilteredTransaction.propTypes = {
  transactions: transactionsArrayPropType.isRequired,
};

export default FilteredTransaction;


