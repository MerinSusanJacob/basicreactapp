import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Home from './components/Home';
import Navbar from './components/Navbar';
import TableArray from './components/TableArray';
import Users from './components/Users';
import Products from './components/Products';
import Counter from './components/Counter';
import UseEffect from './components/UseEffect';
import Avatar from './components/Avatar';
import Form1 from './components/Form1';
import Form2 from './components/Form2';


function App() {
  return (
    <div>
      <Navbar/>
     <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/sign' element={<Signup/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/pro' element={<Products/>}/>
      <Route path='/count' element={<Counter/>}/>
      <Route path='/effect' element={<UseEffect/>}/>
      <Route path='/avatar' element={<Avatar/>}/>
      <Route path='/form' element={<Form1/>}/>
      <Route path='/formtwo' element={<Form2/>}/>
     </Routes>
     
    </div>
  );
}

export default App;
