
import React from 'react';


import { Balance } from './components/Balance';
import {IncomeExpenses} from './components/IncomeExpenses'; 
import TransactionsList from './components/TransactionsList'; 
import AddTransaction from './components/AddTransaction'; 
import { GlobalProvider } from './context/GlobalState'; 
import './App.css';
import firebase from "./firebase";

function App() {
  const messaging =firebase.messaging();
  messaging.requestPermission().then(() =>{
    return messaging.getToken()
  }).then((token) =>{
    alert(token);
    prompt('token',token)
    console.log('token',token);
  })
  return (
    <GlobalProvider>
     
      <div className= "container">
        <Balance/>
        <IncomeExpenses/>
        <TransactionsList/> 
        <AddTransaction/> 
      </div>
      
    </GlobalProvider>
  );
}

export default App;
