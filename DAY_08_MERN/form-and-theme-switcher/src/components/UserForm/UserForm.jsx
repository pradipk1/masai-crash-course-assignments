import React from 'react';
import './UserForm.css';
import { useState } from 'react';
import { useRef } from 'react';
import { useTheme } from '../context/themeContext';

function UserForm() {
    const [name, setName] = useState('');
    const emailRef =useRef();
    const [valid, setValid] = useState(false);

    const {theme} = useTheme();

    const handleForm = (e) => {
        e.preventDefault();
        if(name.length < 3) {
            setValid(true);
        }
        console.log(name);
        console.log(emailRef.current.value);
    }

  return (
    <div className={`userFormMain userFormMain-${theme}`}>
        <div>
            <h2>User Form</h2>
            <form onSubmit={handleForm}>
                <div>
                    <label>Name</label>
                    <input type="text" placeholder='Enter Name' 
                        onChange={(e) => {
                            setName(e.target.value);
                            if(e.target.value.length < 3) {
                                setValid(true);
                            } else {
                                setValid(false);
                            }
                        }}
                    />
                    {valid && <p className='validationMessage'>Must have atleast 3 characters.</p>}
                </div>

                <div>
                    <label>Email</label>
                    <input type="email" placeholder='Enter Email' ref={emailRef}/>
                </div>

                <input type="submit" disabled={name.length < 3}/>
            </form>
        </div>
        
    </div>
  )
}

export default UserForm;