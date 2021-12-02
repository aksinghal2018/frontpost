import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import {Form,Button, Container} from 'react-bootstrap'
import { encryptStorage } from '../config/Encrypt'
function Login() {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const handler = (e) => {
        var id = e.target.id
        //console.log(id)
      
        if (id === "email") {
            setemail(e.target.value)
        }
        if (id === "password") {
            setpassword(e.target.value)
        }
    }
    const submit = (e) => {
        e.preventDefault()
        const data = {  "email": email, "password": password }
        console.log(data)
        const config = { headers: { 'Content-Type': 'multipart/form-data' } };
        let formData = new FormData();    //formdata object
         formData.append('email', email);
         formData.append('password', password);
        
      
        axios.post('http://localhost:8899/logindata', data).then(
            data => { 
              console.log(data)
              if(data.data.err===""){
                alert(data.data.message)
                encryptStorage.setItem('user',data.data.data)
                window.location.replace('/dashboard')
                //console.log(data.data)
              }
              else{
                alert(data.data.err)
              }
             }
        )
    }
    return (
        <Container style={{padding:"20px"}}>
            <Form style={{padding:"50px",border:"2px solid black",width:"50%",marginLeft:"23%"}} onSubmit={submit}>
                <h1><u>Login</u></h1>
  <Form.Group className="mb-3" controlId="email">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" onChange={handler} name ="email" />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="password">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={handler} name=" password"/>
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </Container>
    )
}

export default Login
