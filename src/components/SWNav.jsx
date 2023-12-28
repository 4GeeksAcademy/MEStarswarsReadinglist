import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import FavDropdown from "./FavDropdown";

function SWNav(){
    return (
        <Navbar className="justify-content-between">
      <Navbar.Brand>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Star_Wars_Yellow_Logo.svg/640px-Star_Wars_Yellow_Logo.svg.png"
            height="75"
            alt="Star Wars"
          />
      </Navbar.Brand>
      <FavDropdown />
    </Navbar>
    )
}

export default SWNav;