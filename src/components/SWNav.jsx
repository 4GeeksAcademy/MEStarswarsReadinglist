import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import FavDropdown from "./FavDropdown";

function SWNav() {
    return (
        <Navbar className="justify-content-between">
            <Navbar.Brand>
                <Image
                    src="https://www.pngall.com/wp-content/uploads/13/Star-Wars-Logo-Transparent.png"
                    height="75"
                    alt="Star Wars"
                />
            </Navbar.Brand>
            <FavDropdown />
        </Navbar>
    )
}

export default SWNav;
