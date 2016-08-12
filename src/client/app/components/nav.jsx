import React from 'react';
import { Link } from 'react-router';

class Nav extends React.Component{

    render(){
        return(
            <nav>
                <ul>
                    <li><Link to="/">Introduction</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/repos">Repo</Link></li>
                </ul>
            </nav>
        )
    }
}


export default Nav;
