import React from 'react';
import styles from "../pages/module/Dashboard/style.module.css";
import { customerTableColumn } from '../constant';

const TransactionTable = ({transactions}) => {
    const calculatePoints = (amount) => {
        let points = 0;
        if (amount > 100) {
          points += 2 * (amount - 100);
          amount = 100;
        }
        if (amount > 50) {
          points += 1 * (amount - 50);
        }
        return points;
      }
    
      const calculateMonthlyPoints = (transaction) => {
    
        const monthlyPoints = {};
        const { customerId, amount, date } = transaction;
        const month = date.slice(0, 7); // Extract YYYY-MM from date
    
        const points = calculatePoints(amount);
    
        if (!monthlyPoints[customerId]) {
          monthlyPoints[customerId] = {};
        }
        if (!monthlyPoints[customerId][month]) {
          monthlyPoints[customerId][month] = 0;
        }
        monthlyPoints[customerId][month] += points;
        return Math.round(monthlyPoints[customerId][month]);
      }
    
      const calculateTotalPoints = (transaction) => {
        const monthlyPoints = {};
        const { customerId, amount, date } = transaction;
        const month = date.slice(0, 7); // Extract YYYY-MM from date
        const points = calculatePoints(amount);
    
        if (!monthlyPoints[customerId]) {
          monthlyPoints[customerId] = { pointsByMonth: {} };
        }
    
        if (!monthlyPoints[customerId].pointsByMonth[month]) {
          monthlyPoints[customerId].pointsByMonth[month] = 0;
        }
        monthlyPoints[customerId].pointsByMonth[month] += points;
        return Math.round(monthlyPoints[customerId].pointsByMonth[month]);
      }
    
      const getMonthInWord = (date) => {
        const dateObj = new Date(date);
        const options = { year: 'numeric', month: 'short' };
        const month = dateObj.toLocaleDateString('en-US', options).replace(' ', '-');
        return month
      }

  return (
  <div style={{ width: '100%', overflowX: 'auto', marginTop: '20px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <tbody>
                <tr>{
                  customerTableColumn.map((col, i) => (
                    <th key={i} className={styles.tableHeaderStyle}>{col}</th>
                  ))
                }
                </tr>
                {
                  transactions && transactions.map((transaction, i) => (
                    <tr key={transaction.transactionId} className={i % 2 === 0 ? styles.tableRowStyleEven : styles.tableRowStyleOdd}>
                      <td className={styles.tableCellStyle}>{i + 1}</td>
                      <td className={styles.tableCellStyle}>{transaction.customerName}</td>
                      <td className={styles.tableCellStyle}>{getMonthInWord(transaction.date)}</td>
                      <td className={styles.tableCellStyle}>{transaction.amount}</td>
                      <td className={styles.tableCellStyle}>{calculateMonthlyPoints(transaction)}</td>
                      <td className={styles.tableCellStyle}>{calculateTotalPoints(transaction)}</td>
                    </tr>
                  ))
                }

              </tbody>
            </table>
          </div>
  )
}

export default TransactionTable