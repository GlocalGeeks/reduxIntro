import { connect, useSelector } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}



function BalanceDisplay({ balance }) {
  const {isLoading} = useSelector(store => store.account)
  console.log(isLoading);
  
  return (
    <div className="balance">{isLoading ? "....": formatCurrency(balance)}</div>
  );
}

function mapStateToProps(state) {
  return {
    balance: state.account.balance,
  };
}

export default connect(mapStateToProps)(BalanceDisplay);