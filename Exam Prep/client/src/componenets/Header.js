import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const Header = (props) => {






    return (

        <div style={{boarder: "5px double lightgray"}}>
            <ul style={{display: "flex", justifyContent:"space-around", listStyle: "none"}}>
                <li><Link style={{textDecoraton: "none", fontSize:"26px", color:"gray"}} to="/cartoons">All Cartoons</Link></li>
                <li><Link style={{textDecoraton: "none", fontSize:"26px", color:"gray"}} to="/cartoon/new">New Cartoon</Link></li>

            </ul>
        </div>
    )
}

export default Header;