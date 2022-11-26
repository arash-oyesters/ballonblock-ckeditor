import logo from './logo.svg';
import './App.css';
import Ballanblock from './components/Ballanblock';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Ballanblock />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
