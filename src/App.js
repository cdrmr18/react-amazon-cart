import React, { useState }  from 'react'
import './App.css';
import Header from './components/Header'
import AppMain from './components/AppMain'
import data from './Data'

function App() {
  const [ cartItems, setCartItems ] = useState(data);

  return (
    <div className="App">
      <Header title="Amazon Cart" />
      <AppMain items={ cartItems }/>
    </div>
  );
}

export default App;
