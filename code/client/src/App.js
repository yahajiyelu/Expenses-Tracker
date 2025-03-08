import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'; // Import Redirect
import Header from './components/Header';
import Home from './components/Home';
import Track from './components/Track';
import NotFound from './components/NotFound';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './components/Login';
import Registration from './components/Registration';
import AddIncomeAndExpense from './components/AddIncomeAndExpense';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Registration />} />
          <Route path="/" element={<ProtectedRoute Component={Home}/>} />
          <Route path="/track" element={<ProtectedRoute Component={Track}/>} />
          <Route path="/addincome-or-expense" element={<ProtectedRoute Component={AddIncomeAndExpense}/>} />
          <Route path="/not-found" element={<NotFound />} /> 
          <Route path="*" element={<Navigate to='/not-found' element={<NotFound/>} />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
