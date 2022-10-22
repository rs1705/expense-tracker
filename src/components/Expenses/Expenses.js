import ExpenseItem from "../ExpenseItem/ExpenseItem";
import Card from "../Card/Card";
import "./Expenses.css";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      
      {
        props.items.map((item)=>{
          return (
            <ExpenseItem key={item.id}title={item.title} amount={item.amount} date={item.date}/>
          )
        })
      }

    </Card>
  );
};

export default Expenses;
