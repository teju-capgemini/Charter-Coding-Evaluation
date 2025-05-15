import React, { useEffect, useState } from 'react'
import { get } from '../../../services/httpServices';
import { toast } from 'react-toastify';
import styles from "./style.module.css";
import TransactionTable from '../../../components/TransactionTable';
import FilteredTransaction from '../../../components/FilteredTransaction';
import { Button } from '@mui/material';

const Index = () => {
  const [transactionsData, setTransactionsData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTransactionData();
  }, []);

  const getTransactionData = async () => {
    setLoading(true);
    await fetch('/db.json')
      .then(response => response.json())
      .then(data => {
        setTransactionsData(data.transactions);
      })
      .catch(() => {
        toast.error('Unable to get Data');
      })
      .finally(() => {
        setLoading(false);
      })

  }

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    window.location.reload()
  }
  return (
    <div>
      <h2>Transaction Data</h2>
      {
        loading ?
          <h4>Loading...</h4>
          :
          <FilteredTransaction transactions={transactionsData} />
      }
      <Button variant='contained' onClick={() => handleLogout()}>Logout</Button>
    </div>
  )
}

export default Index