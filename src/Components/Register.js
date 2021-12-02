import React from 'react'
import { useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import axios from 'axios'
function Register() {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [cpassword, setcpassword] = useState("")
    const [mypic, setmypic] = useState("")

    const handler = (e) => {
        var id = e.target.id
        //console.log(id)
        if (id === "name") {
            setname(e.target.value)
        }
        if (id === "email") {
            setemail(e.target.value)
        }
        if (id === "password") {
            setpassword(e.target.value)
        }
        if (id === "cpassword") {
            setcpassword(e.target.value)
        }
        else {
            setmypic(e.target.value)
        }
    }
    const submit = (e) => {
        e.preventDefault()
        if(cpassword===password){
        //const data = { "name": name, "email": email, "password": password, "myfile": mypic }
        //console.log(data)
        let formData = new FormData();    //formdata object
        var imagedata = document.querySelector('input[type="file"]').files[0];
        formData.append("myfile", imagedata);
         formData.append('name', name);   //append the values with key, value pair
         formData.append('email', email);
         formData.append('password', password);
        
        const config = {
            headers: { "Content-Type": "multipart/form-data; boundary=AaB03x" +
            "--AaB03x" +
            "Content-Disposition: file" +
            "Content-Type: png" +
            "Content-Transfer-Encoding: binary" +
            "...data... " +
            "--AaB03x--",
            "Accept": "application/json",
            "type": "formData" }
        }
        axios.post('http://localhost:8899/projects', formData,config).then(
            data => { 
            if(data.data.err===""){
                alert(data.data.message)
                window.location.replace("/login")
            }
            else{
                alert(data.data.err)
                //window.location.reload()
            }
            }
        )
        }
        else{
            alert("password and confirm password should be same")
        }
    }
    return (
        <Container style={{ padding: "20px", marginBottom: "20px" }}>
            <Form style={{ padding: "50px", border: "2px solid black", width: "50%", marginLeft: "23%", marginBottom: "30px" }} onSubmit={submit} encType="multipart/form-data">
                <h1><u>Register</u></h1>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Username"  onChange={handler} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"  onChange={handler} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={handler} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="cpassword">
                    <Form.Label> Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password"  onChange={handler} />
                </Form.Group>
                <Form.Group controlId="mypic" className="mb-3">
                    <Form.Label>Profile Pic: </Form.Label>
                <input type="file" name="mypic" onChange={handler} style={{marginLeft:"20px"}}/>
                </Form.Group>
                <div style={{display:"flex"}}>
                <Button variant="primary" type="submit" style={{marginRight:"5px"}}>
                    Submit
                </Button>
                <Button variant="primary" type="reset">
                    Reset
                </Button>
                </div>
            </Form>
        </Container>
    )
}

export default Register
