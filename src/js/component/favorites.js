import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import { Context } from "../store/appContext";

export const Favorites = () => {
  const { store, actions } = useContext(Context);
  const [showLukeModal, setShowLukeModal] = useState(false);

  const handleClose = () => {
    setShowLukeModal(false);
  };

  const handleShowLuke = () => setShowLukeModal(true);

  return (
    <div className="row mb-4">
      {store.people.map((character, index) => {
        return (
          <Card
            className="col-md-4 mb-4 mx-auto"
            style={{
              width: "100%",
              maxWidth: "18rem",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Card.Img variant="top" src={character.imageurl} />
            <Card.Body style={{ padding: "1rem", textAlign: "center" }}>
              <Card.Title style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                {character.Name}
              </Card.Title>
              <div>
                <Button
                  variant="dark"
                  onClick={handleShowLuke}
                  style={{ marginBottom: "10px" }}
                >
                  Click Here to learn more about Luke!
                </Button>
                <button
                  className="favorite"
                  onClick={() =>
                    actions.addtoFavorites(character.Name, "characters")
                  }
                >
                  <img
                    src="https://www.svgrepo.com/show/114534/favorite.svg"
                    alt="favorite"
                    style={{ width: "15%", height: "30%" }}
                  />
                </button>
              </div>
            </Card.Body>

            <Modal show={showLukeModal} onHide={handleClose}>
              <Modal.Header>
                <Modal.Title>
                  <img
                    src="https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_7ffe21c7.jpeg?region=130%2C147%2C1417%2C796"
                    alt="Luke"
                    style={{ width: "100%" }}
                  />
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>{character.description}</Modal.Body>
              <Modal.Footer>
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      {/* Left side information */}
                      {[
                        { label: "Name", value: character.Name },
                        { label: "Birthplace", value: character.Birthplace },
                        {
                          label: "Affiliation",
                          value: character.Affiliation,
                        },
                        { label: "Species", value: character.Species },
                      ].map((info, index) => (
                        <div key={index}>
                          <strong>{info.label}:</strong> {info.value}
                        </div>
                      ))}
                    </div>
                    <div className="col-md-6">
                      {/* Right side information */}
                      {[
                        { label: "Occupation", value: character.Occupation },
                        { label: "Height", value: character.Height },
                        {
                          label: "Lightsaber Color",
                          value: character.LightsaberColor,
                        },
                        { label: "Master", value: character.Master },
                        { label: "Apprentices", value: character.Apprentices },
                      ].map((info, index) => (
                        <div key={index}>
                          <strong>{info.label}:</strong> {info.value}
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Close button at the bottom */}
                  <div className="row justify-content-end">
                    <div className="col-md-12 text-right">
                      <Button variant="dark" onClick={handleClose}>
                        Close
                      </Button>
                    </div>
                  </div>
                </div>
              </Modal.Footer>
            </Modal>
          </Card>
        );
      })}
    </div>
  );
};
