import { useState } from 'react'
import './App.css'
import Form from './Form.jsx'
import Button from './Button.js'

function App() {
  const [data, setData]= useState({

  email: '',
  password: '',
  rePassword: '',
  rememberMe: false,
  });

  const [arr, setArr]= useState([

  ])
    
    function handleChange(event){
      const value = event.target.value;
     setData({...data, [event.target.name]: value});
    }

    

    function handleClick(event){
      event.preventDefault();

      const person= {
        email: data.email,
        password: data.password,
        rePassword: data.rePassword,
      };
      
      setArr((prevArr)=> [...prevArr, person]);
      localStorage.setItem('data', JSON.stringify([...arr, person]);
      setData({email: '', password: '', rePassword: ''})
    }

  return (
  <>
  <div>
  <h2>Sign Up</h2>

  <Form label="Email" type= "email" content="email" handleChange={handleChange} value={data.email}/>

<Form label="Password" type= "password" content="password" handleChange={handleChange} value={data.password}  />

<Form label="Rewrite password" type= "password"  content="rePassword" handleChange={handleChange} value={data.rePassword} />

  <p>Remember me when I logIn <input type="checkbox"      type="checkbox"
              name="rememberMe"
              checked={data.rememberMe}
              onChange={handleChange}/> </p> <br /> <br />


<p>By creating account, you agree to the <a href="">Terms/Policy of our website</a>  </p>

<Button text= "Cancel" backgroundColor= "#ff0000"/>

<Button text= "Sign Up" backgroundColor= "#008000" submit={handleClick}/>

  </div>
  </>
  )
}

export default App;
