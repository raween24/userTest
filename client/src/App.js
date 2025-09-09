import './App.css';
import { BrowserRouter } from 'react-router-dom'; // ← ajoute cette ligne
import User from './getuser/User.jsx';

function App() {
  return (
    <BrowserRouter> {/* ← entoure ton app ici */}
      <div className="App">
        <User />
      </div>
    </BrowserRouter>
  );
}

export default App;
