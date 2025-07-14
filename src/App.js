import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewNews from './components/ViewNews';

function App() {
  return (
    
    <BrowserRouter>
    <Routes>
    <Route path="/" element={  <ViewNews/> } />
    </Routes>
    </BrowserRouter>


  );
}

export default App;
