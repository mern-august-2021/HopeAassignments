import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import DeleteCartoon from './DeleteCartoon';

const AllCartoons = (props) => {

    const [cartoonList, setCartoonList] = useState([]);

    useEffect(() =>{
        axios.get('http://localhost:8000/api/cartoons')
        .then((res) =>{
            console.log(res.data);
            setCartoonList(res.data)
        })
        .catch((err)=>{
            console.log(err);
        })
    }, [])






    return (

        <div>
            <h1 style={{fontSize: "50px", boarderBottom: "5px double lightgray", marginLeft:"450px", marginRight:"450px"}}>The Cartoon Collection</h1>
            
            <div>
                {
                    cartoonList.map((cartoon, index) =>(
                        
                        <div style={{border:"6px double blue", padding:"50px", borderRadius: "130"}} key={index}>
                            {/* This Link allows us to pass the id prop into the OneCartoon component.
                            Rememeber, we set that up in our App.js paths "/cartoon/:id" */}
                            <Link to = {`/cartoon/${cartoon._id}`}>
                            <p>{cartoon.name}</p>
                            <img src={cartoon.image} alt="cartoon image" style={{width:"150px", height:"150px"}}/>
                            </Link>
                            <br/>
                            <Link to={`/cartoon/edit/${cartoon._id}`}>Edit</Link>
                            <DeleteCartoon cartoonList =
                            {cartoonList} setCartoonList=
                            {setCartoonList} id={cartoon._id}
                            />

                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default AllCartoons;