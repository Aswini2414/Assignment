import { React} from 'react';
import "./App.css"
import Home from './Pages/Home';
import Employees from './Pages/Employees';
import Login from './Pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Wrong from "./Pages/Wrong";

const App = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="employees" element={<Employees />} />
        <Route path="wrong" element={<Wrong/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App