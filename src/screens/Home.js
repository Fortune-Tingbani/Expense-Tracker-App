import React, { useContext } from "react";
import { AuthContext } from "../context/authContext";
import Header from '../components/Header';
import Balance from "../components/Balance";
import IncomeExpense from "../components/IncomeExpense";
import TransactionList from "../components/TransactionList";
import AddTransaction from "../components/AddTransaction";

function Home() {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (

    
    <div>
        <Header />
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
    </div>
  )
}


export default Home;
