import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ExpenseTracker from "./components/ExpenseTracker";
import ShowData from "./components/ShowList";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/add"
            element={<ExpenseTracker onTrue={undefined} onClose={undefined} />}
          />
          <Route path="/" element={<ShowData />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
