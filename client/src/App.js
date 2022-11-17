import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PirateForm from './components/PirateForm';
import Main from './view/Main';
import OnePirate from './components/OnePirate';

function App() {
  return (
    <div className="App">
      <h1>Pirate Crew</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/pirates" element={<PirateForm />} />
          <Route path="/pirates/:id" element={<OnePirate />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
