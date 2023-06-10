import React,{useState} from 'react';
import './App.css';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';
const App = () => {
  const [userList,setuserList]=useState([])
  const adduserhandler=(uname,uage)=>{
    setuserList((prevuserlist)=>{
      return [...prevuserlist,{name:uname,age:uage,id:Math.random().toString()}];
    })
  }
return (
    <div>
     <AddUser onAddUser={adduserhandler}></AddUser> 
     <UserList users={userList}></UserList>
    </div>
  );
};
export default App;
