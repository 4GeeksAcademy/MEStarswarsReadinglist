import React from "react";
import { Button } from "react-bootstrap/";
import { useContext } from "react";
import { Card } from "react-bootstrap/";
import { FavoritesContext } from "../Favorites";
import { Link } from "react-router-dom"
import ListGroup from 'react-bootstrap/ListGroup';


function EntityCard({ data }) {
  const { store, actions } = useContext(FavoritesContext);


  return (
    <Card style={{ width: '18rem', marginRight: '30px', marginBottom: '20px' }}>
      <Card.Img variant="top" src={`https://starwars-visualguide.com/assets/img/${data.type}/${data.uid}.jpg`}
        onError={(e) => { e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"; }} />
      <ListGroup variant="flush">
        <ListGroup.Item>{data.name}</ListGroup.Item>
        <ListGroup.Item>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </ListGroup.Item>
        <ListGroup.Item>
          <Link to="/learnmore" state={{ type: data.type, index: data.uid }}>
            <Button variant="primary" style={{ margin: "5px" }}>
              Learn More!
            </Button>
          </Link>
          <Button variant="primary" onClick={() => actions.addFavorites(data)}>
            Favorite
          </Button>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default EntityCard;
