import React from 'react'
import { useState, useEffect } from 'react'
import { encryptStorage } from '../config/Encrypt'
import {Card,Button} from 'react-bootstrap'
function Dashboard() {
    const [user, setuser] = useState("")
    async function fetchdata(){
        await setuser(encryptStorage.getItem('user'))
    }
    useEffect(() => {
        fetchdata()
        console.log(encryptStorage.getItem('user'))
    }, [])
    return (
        <div style={{ textAlign: 'center', padding: "20px" ,marginLeft:"40%"}}>
            <h1 style={{marginLeft:"-60%"}}><u>Profile</u></h1>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`http://localhost:8899/${encryptStorage.getItem('user').profile_img}`} />
                <Card.Body>
                    <Card.Title>Name: {user.name}</Card.Title>
                    <Card.Text>
                        Email:{user.email}
                    </Card.Text>
                    <Button variant="primary">Like</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Dashboard
