import React from 'react';

const customStyle={
  Color:"blue"
}
function Navbar (){
    return (
      <nav style={customStyle}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    );
    }


export default Navbar;
