import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';

const Header = (props) => {



    return (
        <div style={{boarder: "5px double blue"}}>
            <ul style={{display: "flex", justifyContent:"space-around", listStyle:"none"}}>
                <li><Link style={{textDecoration:"none", fontSize:"50px", color: "green"}} to="/pet">All Pets</Link></li>
                <li><Link style={{textDecoration:"none", fontSize:"50px", color: "green"}} to="/pet/new">Add New Pet</Link></li>
            </ul>
        </div>
    )
}

export default Header;