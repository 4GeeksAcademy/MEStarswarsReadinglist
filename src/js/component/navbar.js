import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, Image, Nav, DropdownButton, Dropdown } from "react-bootstrap";
import { Context } from "../store/appContext";

export const NavbarMenu = () => {
  const { store, actions } = useContext(Context);

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
        <Nav.Link as={Link} to="/favorites">
          People
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
        <Dropdown.Item href="#/action-1">
          {store.favorites.map((favorite) => {
            return <div>{favorite.name}</div>;
          })}
        </Dropdown.Item>
      </DropdownButton>
    </Navbar>
  );
};
