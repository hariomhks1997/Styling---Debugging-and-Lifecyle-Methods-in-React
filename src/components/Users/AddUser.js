import React,{ useState }from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css'
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
const AddUser = (props) => {
   const [enteredusername,setenteredusername]= useState('');
   const [enteredage,setenteredage]=useState('')
   const [error,seterror]=useState();
    const adduserhandler = (event) => {
        event.preventDefault();
        if(enteredusername.trim().length===0 || enteredage.trim().length===0)
        {
            seterror({
                title:'invalid input',
            message:'Please enter a valid name and age (non-empty values).'
            
        })
        return;
        }
        if (+enteredage<1){
            seterror({
                title:'invalid input',
            message:'Please enter a valid age (>0).'
        }) 
        return;
        }
        console.log(enteredage,enteredusername)
        props.onAddUser(enteredusername,enteredage);
        setenteredage('');
        setenteredusername('');
    } 
    const usernamechangehandler=(event)=>{
         setenteredusername(event.target.value);
    }
    const agechangehandler=(event)=>{
        setenteredage(event.target.value);
    }
    const errorhandler=()=>{
        seterror(null)
    }
    return (
        <div>
        {error && <ErrorModal title={error.title} message={error.message} onconfirm={errorhandler}></ErrorModal>}
        <Card className={classes.input} >
            <form onSubmit={adduserhandler}>
                <label htmlFor="username">Username</label>
                <input id='username' type='text' value={enteredusername}onChange={usernamechangehandler}></input>
                <label htmlFor="age">Age (Year)</label>
                <input id='username' type='number' onChange={agechangehandler}value={enteredage}></input>
                <Button type='submit'>Add User</Button>
                
            </form>
            
        </Card>
        </div>

    )

}
export default AddUser;