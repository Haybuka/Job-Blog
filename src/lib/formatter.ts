const formatNumber = (balance: number,currency:string) => {
  const newBalance = new Intl.NumberFormat('en-Ng', {
    style: 'currency',
    currency: currency
  }).format(Number(balance));
  return newBalance;
};

export default formatNumber