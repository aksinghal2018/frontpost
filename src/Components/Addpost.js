import React from 'react'
//import axios from 'axios'
import { postrequest } from '../Services/Myservice'
import { useState } from 'react'
import { useHistory } from 'react-router'
import {Form,Container,Button} from 'react-bootstrap'
import {encryptStorage} from '../config/Encrypt'
import axios from 'axios'
function Addpost() {
    const [pname, setpname] = useState("")
    const [pdesc, setpdesc] = useState("")
    let history = useHistory()
    const handler = (e) => {
        if (e.target.id == "pname") {
            setpname(e.target.value)
        }
        if(e.target.id == "pdesc") {
            console.log(e.target.value)
            setpdesc(e.target.value)
        }
    }
    const submit = (e) => {
        e.preventDefault()
        let formData = new FormData();    //formdata object
        var imagedata = document.querySelector('input[type="file"]').files[0];
        formData.append("myfile", imagedata);
         formData.append('post', pname);   //append the values with key, value pair
         formData.append('pdesc', pdesc);
         formData.append('userid',encryptStorage.getItem('user').id)
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
        axios.post('http://localhost:8899/addpost1', formData,config).then(
            data => { 
            if(data.data.err===""){
                alert(data.data.message)
                window.location.replace("/posts")
            }
            else{
                alert(data.data.err)
                //window.location.reload()
            }
            }
        )
    }
    return (
        <div className="container">

            <Container style={{ padding: "20px", marginBottom: "20px" }}>
                <Form style={{ padding: "50px", border: "2px solid black", width: "50%", marginLeft: "23%", marginBottom: "30px" }} onSubmit={submit} encType="multipart/form-data">
                    <h1><u>Add Post</u></h1>
                    <Form.Group className="mb-3" controlId="pname">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter post name" onChange={handler} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="pdesc">
                        <Form.Label>Post Desc</Form.Label>
                        <Form.Control as="textarea" rows={3} onChange={handler}/>
                    </Form.Group>
                    <Form.Group controlId="mypic" className="mb-3">
                        <Form.Label>Post Pic: </Form.Label>
                        <input type="file" name="mypic" onChange={handler} style={{ marginLeft: "20px" }} />
                    </Form.Group>
                    <div style={{ display: "flex" }}>
                        <Button variant="primary" type="submit" style={{ marginRight: "5px" }}>
                            Submit
                        </Button>
                        <Button variant="primary" type="reset">
                            Reset
                        </Button>
                    </div>
                </Form>
            </Container>
        </div>
    )
}

export default Addpost
