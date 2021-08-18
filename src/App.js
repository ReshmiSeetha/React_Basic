import React,{useState} from 'react';
import Tweet from './tweet';
import './App.css';

function App(){
  const [users,setUsers]=useState([
    {
      name:"RESH",message:'HEY THERE'
    },
    {
      name:"GAYU",message:'HEY THERE'
    },
  ]);

  
   return(
     <div className="app">
      {users.map((user)=>{
        return(
        <Tweet name={user.name} message={user.message}/>);
      })}
       
     </div>
   );
}

export default App;