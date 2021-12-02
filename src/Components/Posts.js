import React from 'react'
import { getrequest, postrequest } from '../Services/Myservice'
import { deletetrequest } from '../Services/Myservice'
import { useState, useEffect } from 'react'
function Posts() {
    const [post, setpost] = useState([])
    const [date1, setdate1] = useState(1)
    useEffect(() => {
        const datedata = new Date()
        const datetime=datedata.getTime()
        setdate1(datetime)
       // console.log(date1)
        getrequest().then(
            data => {
                //  console.log(data.data.pdata)
                setpost(data.data.pdata)
            }
        )

    }, [])
    const updatedata = (data) => {
        window.location.replace(`https://newpostserver.herokuapp.com/api/post/update/${data}`)
    }
    const deletedata = (data) => {
        deletetrequest(data).then(data => {
            //  console.log(data.data.message)
            window.location.reload()
        })

    }
    const datesecond = (data) => {
        let min = Math.floor((data / 1000 / 60) << 0)
        let sec = Math.floor((data / 1000) % 60);

        //console.log(min + ':' + sec);
        if(min<1){
            return(`before ${sec} sec`)    
        }
        return(`before ${min} min`)
    }
    return (
        <div className="container">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>pname</th>
                        <th>pdescription</th>
                        <th>Actions</th>
                        <th>Post time</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        post.map((item, index) => {
                            return (<tr key={index}><td>{index + 1}</td><td>{item.post}</td><td>{item.postdesc}</td><td><button type="button" className="btn btn-warning mr-4" onClick={() => updatedata(item.id)} >Update</button><button type="button" className="btn btn-danger" onClick={() => deletedata(item.id)} >Delete</button></td><td className="text-secondary">{datesecond(parseInt(date1) - parseInt(item.date))}</td></tr>)
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Posts
