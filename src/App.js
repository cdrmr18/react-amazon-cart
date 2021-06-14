import './App.css';
import './Header.css';
import './CartItems.css'
import './CartTotal.css'
import Header from './Header.js'
import AppMain from './AppMain.js'

function App() {
  return (
    <div className="App">
      <Header title="Amazon Cart" />
      <AppMain />
    </div>
  );
}

export default App;
