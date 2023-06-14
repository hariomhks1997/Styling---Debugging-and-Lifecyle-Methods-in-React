import React, { useState,useRef } from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css'
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";
const AddUser = (props) => {
    const nameInputRef=useRef();
    const ageInputRef=useRef();
    const collegeInputRef=useRef();
    const [error, seterror] = useState();
    const adduserhandler = (event) => {
        event.preventDefault();
        const enteredName=nameInputRef.current.value;
        const enteredUserAge=ageInputRef.current.value;
        const enteredcollegeName=collegeInputRef.current.value;
        if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0  ) {
            seterror({
                title: 'invalid input',
                message: 'Please enter a valid name and age & collegename (non-empty values).'

            })
            return;
        }
        if (+enteredUserAge < 1) {
            seterror({
                title: 'invalid input',
                message: 'Please enter a valid age (>0).'
            })
            return;
        }
        props.onAddUser(enteredName, enteredUserAge,enteredcollegeName);
        nameInputRef.current.value='';
        ageInputRef.current.value='';
    }
    
    
    const errorhandler = () => {
        seterror(null)
    }
    return (
        <Wrapper>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorhandler}></ErrorModal>}
            <Card className={classes.input} >
                <form onSubmit={adduserhandler}>
                    <label htmlFor="username">Username</label>
                    <input id='username' type='text' ref={nameInputRef}></input>
                    <label htmlFor="age">Age (Year)</label>
                    <input id='username' type='number' ref={ageInputRef}></input>
                    <label htmlFor="collegename">College Name</label>
                    <input id='collegename' type='text' ref={collegeInputRef}></input>
                    <Button type='submit'>Add User</Button>

                </form>

            </Card>
        </Wrapper>

    )

    }
export default AddUser;