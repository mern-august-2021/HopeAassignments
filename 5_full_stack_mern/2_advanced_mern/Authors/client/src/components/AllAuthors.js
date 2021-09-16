import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import DeleteAuthor from './DeleteAuthor';

const AllAuthors = (props) => {
    
    const [authorList, setAuthorList] = useState([]);

    useEffect(() =>{
        axios.get('http://localhost:8000/api/authors')
        .then((res) =>{
            console.log(res.data);
            setAuthorList(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }, [])

    return(
        <div>
            <h1>Favorite Authors</h1>
            <div style={{display: "flex", justifyContent:"space-evenly"}}>
                {
                    authorList.map((author) =>(
                        <div style={{border: "5px solid purple", padding: "30px", boarderRadius: "50px"}}>
                        <p>{author.name}</p>
                        <Link to = {`/author/edit/${author._id}`}><button>Edit</button></Link>
                        <DeleteAuthor authorList={authorList} setAuthorList={setAuthorList} id={author._id}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default AllAuthors;