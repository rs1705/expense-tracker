import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
const ExpenseItem = ({ title, date, amount }) => {
  //   const expenseDate = date;

  //   const expenseAmount = amount;

  return (
    <div className="expense-item">
      <ExpenseDate date={date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;