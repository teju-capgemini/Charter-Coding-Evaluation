import React, { useMemo, useState } from "react";
import styles from "../pages/module/Dashboard/style.module.css";
import { customerTableColumn } from "../constant";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { IconButton } from "@mui/material";
import CustomModal from "./CustomModal";
import { calculateMonthlyPoints, calculateTotalPoints, getMonthInWord } from "../util/commonFunctions";
import PropTypes from "prop-types";

const TransactionTable = ({ transactions }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(15);
  const [openModal, setOpenModal] = useState(false);
  const [custTransactionDetails, setCustTransactionDetails] = useState({});

  const memoizeTransactions = useMemo(() => {
    return transactions.map((transaction) => ({
      ...transaction,
      monthlyPoints: calculateMonthlyPoints(transaction),
      totalPoints: calculateTotalPoints(transaction),
      customizeDate: getMonthInWord(transaction.date),
    }));
  }, [transactions]);

  const handleClick = (direction) => {
    if (direction === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (
      direction === "next" &&
      currentPage < Math.ceil(memoizeTransactions.length / rowsPerPage)
    ) {
      setCurrentPage(currentPage + 1);
    }
  };

  const start = (currentPage - 1) * rowsPerPage;
  const end = start + rowsPerPage;
  const pageData = memoizeTransactions.slice(start, end);

  const showCustomerTransaction = (custTransaction) => {
    setOpenModal(true);
    setCustTransactionDetails(custTransaction);
  };
  console.log('Transaction table transaction', transactions);
  return (
    <div style={{ overflowX: "auto", padding:20 }}>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <tbody>
          <tr>
            {customerTableColumn.map((col, i) => (
              <th key={i} className={styles.tableHeaderStyle}>
                {col}
              </th>
            ))}
          </tr>
          {pageData &&
            pageData.map((transaction, i) => (
              <tr
                onClick={() => showCustomerTransaction(transaction)}
                key={transaction.transactionId}
                className={
                  i % 2 === 0
                    ? styles.tableRowStyleEven
                    : styles.tableRowStyleOdd
                }
              >
                <td className={styles.tableCellStyle}>{(currentPage-1) * rowsPerPage + i + 1}</td>
                <td className={styles.tableCellStyle}>
                  {transaction.customerName}
                </td>
                <td className={styles.tableCellStyle}>
                  {transaction.customizeDate}
                </td>
                <td className={styles.tableCellStyle}>{transaction.amount}</td>
                <td className={styles.tableCellStyle}>
                  {transaction.monthlyPoints}
                </td>
                <td className={styles.tableCellStyle}>
                  {transaction.totalPoints}
                </td>
                <td className={styles.tableCellStyle} style={{textAlign: 'center'}}>
                  <IconButton
                    onClick={() =>
                      showCustomerTransaction(transaction.transactionId)
                    }
                  >
                    <VisibilityIcon color="primary" fontSize="small" />
                  </IconButton>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <CustomModal open={openModal} setOpen={setOpenModal} transaction={custTransactionDetails}/>
      <div className={styles.footer}>
        <div>
           <label>Rows per page : </label>
          <select className={styles.dropdown} value={rowsPerPage} onChange={(e)=>{setRowsPerPage(e.target.value)}}>
            {
              [5,15,25,50].map((each)=>(
                <option value={each}>{each}</option> 
              ))
            }
           
          </select>
        </div>
      <div className={styles.pagination}>
                <button onClick={() => handleClick("prev")}>Previous</button>
               {" "}
        <span>
          Page {currentPage} of{" "}
          {Math.ceil(memoizeTransactions.length / rowsPerPage)}
        </span>
                <button onClick={() => handleClick("next")}>Next</button>
             {" "}
      </div>
      </div>
    </div>
  );
};

export const transactionPropType = PropTypes.shape({
  customerId: PropTypes.number.isRequired,
  customerName: PropTypes.string.isRequired,
  transactionId: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired, // ISO date string
});

export const transactionsArrayPropType = PropTypes.arrayOf(transactionPropType);


TransactionTable.propTypes = {
  transactions: transactionsArrayPropType.isRequired,
};

export default TransactionTable;
