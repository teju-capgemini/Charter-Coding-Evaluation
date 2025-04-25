
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FilteredTransaction from '../components/FilteredTransaction';

const transactions = {
    "customerId": 1,
    "customerName": "John Doe",
    "transactionId": "T11",
    "amount": 120.00,
    "date": "2023-01-15"
}

test('renders Transaction Filter component', () => {
      render(<FilteredTransaction transactions={transactions}/>);
      const monthSelect = screen.getByLabelText(/Month/i);
      const yearSelect = screen.getByLabelText(/Year/i);
      expect(monthSelect).toBeInTheDocument();
      expect(yearSelect).toBeInTheDocument();
    });
    