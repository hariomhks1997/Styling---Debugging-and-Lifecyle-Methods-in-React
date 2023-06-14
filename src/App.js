import React,{useState,Fragment} from 'react';
import './App.css';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';
const App = () => {
  const [userList,setuserList]=useState([])
  const adduserhandler=(uname,uage,ucollege)=>{
    setuserList((prevuserlist)=>{
      return [...prevuserlist,{name:uname,age:uage,college:ucollege,id:Math.random().toString()}];
    })
  }
return (
    <Fragment>
     <AddUser onAddUser={adduserhandler}></AddUser> 
     <UserList users={userList}></UserList>
    </Fragment>
  );
};
export default App;
