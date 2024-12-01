import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './pages/login/Login';
import  from './components/Topic2b';

function App() {
  const [index,setIndex] = useState(1)
  const receiveLogout =(index:number)=>{
    setIndex(index);
  }
  return (
   <>
   
   {localStorage.getItem('userName') ==null?
   index ==1?
   <Login handleLogin ={receiveLogout} />: <Topic2b />
   :<Topic2b />
   }
   </>
  );
}
export default App;
