export const calculatePoints = (amount) => {
    let points = 0;
    if (amount > 100) {
      points += 2 * (amount - 100);
      amount = 100;
    }
    if (amount > 50) {
      points += 1 * (amount - 50);
    }
    return points;
  };

export  const calculateMonthlyPoints = (transaction) => {
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
  };

 export const calculateTotalPoints = (transaction) => {
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
  };

 export const getMonthInWord = (date) => {
    const dateObj = new Date(date);
    const options = { year: "numeric", month: "short" };
    const month = dateObj
      .toLocaleDateString("en-US", options)
      .replace(" ", "-");
    return month;
  };