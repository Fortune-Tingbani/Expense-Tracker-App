import React, { useContext } from "react";
import { AuthContext } from "../context/authContext";

import Balance from "../components/Balance";
import IncomeExpense from "../components/IncomeExpense";
import TransactionList from "../components/TransactionList";
import AddTransaction from "../components/AddTransaction";
import Navbar from "../components/Navbar";

import { GlobalProvider } from "../context/GlobalState";


function Home() {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <>
    <Navbar />
    <div >
    <GlobalProvider>
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
    </GlobalProvider>
    </div>
    </>
  );
}

export default Home;
