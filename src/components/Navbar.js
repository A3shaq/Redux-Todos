import React from 'react';
import '../App.css';

const Navbar = (props) => {
    return (
        <div className='nav'>
            <h3 id='navHeading' className ="text-center" >TODO LIST</h3>
            {props.children}
        </div>
    )
}

export default Navbar;


