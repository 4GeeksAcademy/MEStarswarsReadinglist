import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Image, Nav, DropdownButton, Dropdown } from "react-bootstrap";

export const NavbarMenu = () => {
  return (
    <Navbar>
      <Navbar.Brand>
        <Link to="/">
          <Image
            src="https://cdn.freebiesupply.com/logos/large/2x/star-wars-logo-svg-vector.svg"
            height="75"
            alt="Star Wars"
          />
        </Link>
      </Navbar.Brand>

      <Nav>
      <Nav.Link as={Link} to="/characters">
          Characters
        </Nav.Link>
        <Nav.Link as={Link} to="/planets">
          Planets
        </Nav.Link>
      </Nav>
      <DropdownButton
        id="dropdown-basic-button"
        title="Favorites"
        className="ms-auto"
        variant="dark"
      >
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </DropdownButton>
    </Navbar>
  );
};
