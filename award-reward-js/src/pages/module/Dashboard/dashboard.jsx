import React, { useEffect, useState } from 'react'
import { get } from '../../../services/httpServices';
import { toast } from 'react-toastify';
import styles from "./style.module.css";
import TransactionTable from '../../../components/TransactionTable';
import FilteredTransaction from '../../../components/FilteredTransaction';

const Index = () => {
  const [transactionsData, setTransactionsData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTransactionData();
  }, []);

  const getTransactionData = async () => {
    setLoading(true);
    await get('/transactions')
      .then((res) => {
        setTransactionsData(res);
        setLoading(false);
      })
      .catch(() => {
        toast.error('Unable to get Data');
        setLoading(false);
      })
  }
  return (
    <div>
      <h2>Transaction Data</h2>
      {
        loading ?
          <h4>Loading...</h4>
          :
          <FilteredTransaction transactions={transactionsData}/>
      }

    </div>
  )
}

export default Index