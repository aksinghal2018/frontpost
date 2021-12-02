import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Card, Button,Col,Row } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { encryptStorage } from '../config/Encrypt'
function Post() {
    const [posts, setposts] = useState([])
    const [state, setstate] = useState(1)
    //const { id } = useParams()

    useEffect(() => {
        const data1=encryptStorage.getItem("user")
        axios.get(`http://localhost:8899/post/${data1.id}`).then(
            data => {
                setposts(data.data.posts)
                //console.log(data)
            }
        )
    }, [state])
    const likehandler=(id)=>{
        const data1=encryptStorage.getItem("user")
        axios.get(`http://localhost:8899/datalike/${data1.id}/${id}`).then(
            data =>{
                console.log(data)
                setstate(state+1)
            }
        )
    }
    const removelikeshandler=(id)=>{
        const data1=encryptStorage.getItem("user")
        axios.get(`http://localhost:8899/dataremove/${data1.id}/${id}`).then(
            data =>{
                console.log(data)
                setstate(state+1)
            }
        )
    }
    return (
        <div>
            <Container>
                <Row style={{padding:"20px"}}>
                    
                {posts.map((item, index) => {
                    return (
                        <Col xs={4} key={index}>
                        <Card style={{ width: '18rem',margin:"20px" }} >
                            <Card.Img variant="top" src={`http://localhost:8899/${item.post_img}`} />
                            <Card.Body>
                                <Card.Title>{item.post}</Card.Title>
                                <Card.Text>
                                    {item.postdesc}
                                </Card.Text>
                                <Button variant="primary" onClick={()=>likehandler(`${item.postid}`)} style={{marginRight:"20px"}}>Like {item.likes}</Button>
                                <Button variant="danger" onClick={()=>removelikeshandler(`${item.postid}`)}>Dislike </Button>
                            </Card.Body>
                        </Card>
                        </Col>
                    )
                })}
                </Row>
            </Container>
            <ul>
            </ul>
        </div>
    )
}

export default Post
