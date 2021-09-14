import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import DeletePets from './DeletePet';

const AllPets = (props) => {

    const [petList, setPetList] = useState([]);

    useEffect(() =>{
        axios.get('http://localhost:8000/api/pets')
        .then((res) =>{
            console.log(res.data);
            setPetList(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

    return (
        <div>
            <h1 style={{fontSize: "50px", color: "blue"}}>Welcome to the Pet Shelter</h1>
            <h3>All these pets are looking for a good home:</h3>
            <div style={{display: "flex", justifyContent:"space-around"}}>
                {
                    petList.map((pet,index) =>(
                        <div style={{border: "10px double green", padding:"50px", borderRadius:"130px", backgroundColor:"lightyellow"}} key={index}>
                            <Link style={{textDecoration:"none"}} to= {`/pet/${pet._id}`}>
                            <p style={{fontSize:"30px", color:"blue"}}>{pet.name}</p>
                            <img src={pet.image} alt="pet image" style={{width:"150px", height:"150px"}}/>
                            </Link>
                            <br/>
                            <Link to= {`/pet/edit/${pet._id}`}>
                            <button>Edit Pet</button>
                            </Link>
                            <DeletePets petList={petList} setPetList= {setPetList} id= {pet._id} />
                        </div>
                    ))
                }
            </div>
        </div>

        

    )
}

export default AllPets;