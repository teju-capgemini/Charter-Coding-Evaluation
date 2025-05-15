import {
  calculatePoints,
  calculateMonthlyPoints,
  calculateTotalPoints,
  getMonthInWord,
} from '../util/commonFunctions';

describe('calculatePoints', () => {
  test('should return 0 for amount <= 50', () => {
    expect(calculatePoints(30)).toBe(0);
  });

  test('should return 50 for amount = 100', () => {
    expect(calculatePoints(100)).toBe(50);
  });

  test('should return 90 for amount = 120', () => {
    expect(calculatePoints(120)).toBe(90); // 2*(120-100) + 1*(100-50)
  });
});

describe('calculateMonthlyPoints', () => {
  test('should calculate monthly points correctly', () => {
    const transaction = {
      customerId: 'C001',
      amount: 120,
      date: '2025-05-10',
    };
    expect(calculateMonthlyPoints(transaction)).toBe(90);
  });
});

describe('calculateTotalPoints', () => {
  test('should calculate total points correctly', () => {
    const transaction = {
      customerId: 'C001',
      amount: 120,
      date: '2025-05-10',
    };
    expect(calculateTotalPoints(transaction)).toBe(90);
  });
});

describe('getMonthInWord', () => {
  test('should return formatted month string', () => {
    expect(getMonthInWord('2025-05-10')).toBe('May-2025');
  });
});
