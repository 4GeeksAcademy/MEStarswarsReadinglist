import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";

export const Characters = () => {
  const [showLukeModal, setShowLukeModal] = useState(false);
  const [showR2Modal, setShowR2Modal] = useState(false);
  const [showObiModal, setShowObiModal] = useState(false);
  const [showLeiaModal, setShowLeiaModal] = useState(false);
  const [showHanModal, setShowHanModal] = useState(false);
  const [showChewModal, setShowChewModal] = useState(false);
  const [showYodaModal, setShowYodaModal] = useState(false);
  const [showDarthModal, setShowDarthModal] = useState(false);

  const handleClose = () => {
    setShowLukeModal(false);
    setShowR2Modal(false);
    setShowObiModal(false);
    setShowLeiaModal(false);
    setShowHanModal(false);
    setShowChewModal(false);
    setShowYodaModal(false);
    setShowDarthModal(false);
  };

  const handleShowLuke = () => setShowLukeModal(true);
  const handleShowR2 = () => setShowR2Modal(true);
  const handleShowObi = () => setShowObiModal(true);
  const handleShowLeia = () => setShowLeiaModal(true);
  const handleShowHan = () => setShowHanModal(true);
  const handleShowChew = () => setShowChewModal(true);
  const handleShowYoda = () => setShowYodaModal(true);
  const handleShowDarth = () => setShowDarthModal(true);

  return (
    <div className="row mb-4">
      {/*LUKE*/}
      <Card
        className="col-md-4 mb-4 mx-auto"
        style={{
          width: "100%",
          maxWidth: "18rem",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Card.Img
          variant="top"
          src="https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_7ffe21c7.jpeg?region=130%2C147%2C1417%2C796"
        />
        <Card.Body style={{ padding: "1rem", textAlign: "center" }}>
          <Card.Title style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            LUKE SKYWALKER
          </Card.Title>
          <Button variant="dark" onClick={handleShowLuke}>
            Click Here to learn more about Luke!
          </Button>
        </Card.Body>
      </Card>
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
        <Modal.Body>
          Luke Skywalker was a Tatooine farmboy who rose from humble beginnings
          to become one of the greatest Jedi the galaxy has ever known. Along
          with his friends Princess Leia and Han Solo, Luke battled the evil
          Empire, discovered the truth of his parentage, and ended the tyranny
          of the Sith. A generation later, the location of the famed Jedi master
          was one of the galaxy’s greatest mysteries. Haunted by Ben Solo’s fall
          to evil and convinced the Jedi had to end, Luke sought exile on a
          distant world, ignoring the galaxy’s pleas for help. But his solitude
          would be interrupted – and Luke Skywalker had one final, momentous
          role to play in the struggle between good and evil.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/*OBI-WAN*/}
      <Card
        className="col-md-4 mb-4 mx-auto"
        style={{
          width: "100%",
          maxWidth: "18rem",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Card.Img
          variant="top"
          src="https://lumiere-a.akamaihd.net/v1/images/obi-wan-kenobi-main_3286c63c.jpeg?region=0%2C0%2C1280%2C721"
        />
        <Card.Body style={{ padding: "1rem", textAlign: "center" }}>
          <Card.Title style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            OBI-WAN KENOBI
          </Card.Title>
          <Button variant="dark" onClick={handleShowObi}>
            Click Here to learn more about Obi-Wan!
          </Button>
        </Card.Body>
      </Card>
      <Modal show={showObiModal} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            <img
              src="https://lumiere-a.akamaihd.net/v1/images/obi-wan-kenobi-main_3286c63c.jpeg?region=0%2C0%2C1280%2C721"
              alt="Luke"
              style={{ width: "100%" }}
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          A legendary Jedi Master, Obi-Wan Kenobi was a noble man and gifted in
          the ways of the Force. He trained Anakin Skywalker, served as a
          general in the Republic Army during the Clone Wars, and guided Luke
          Skywalker as a mentor.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/*LEIA*/}
      <Card
        className="col-md-4 mb-4 mx-auto"
        style={{
          width: "100%",
          maxWidth: "18rem",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Card.Img
          variant="top"
          src="https://lumiere-a.akamaihd.net/v1/images/leia-organa-main_9af6ff81.jpeg?region=187%2C157%2C1400%2C786"
        />
        <Card.Body style={{ padding: "1rem", textAlign: "center" }}>
          <Card.Title style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            LEIA ORGANA
          </Card.Title>
          <Button variant="dark" onClick={handleShowLeia}>
            Click Here to learn more about Leia!
          </Button>
        </Card.Body>
      </Card>
      <Modal show={showLeiaModal} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            <img
              src="https://lumiere-a.akamaihd.net/v1/images/leia-organa-main_9af6ff81.jpeg?region=187%2C157%2C1400%2C786"
              alt="Luke"
              style={{ width: "100%" }}
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Princess Leia Organa was one of the greatest leaders of the Rebel
          Alliance, fearless on the battlefield and dedicated to ending the
          Empire’s tyranny. Daughter of Padmé Amidala and Anakin Skywalker,
          sister of Luke Skywalker, and with a soft spot for scoundrels, Leia
          ranked among the galaxy’s great heroes. But life under the New
          Republic proved difficult for her. Sidelined by a new generation of
          political leaders, she struck out on her own to oppose the First Order
          as founder of the Resistance. These setbacks in her political career
          were accompanied by more personal losses, which she endured with her
          seemingly inexhaustible will.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/*HAN SOLO*/}
      <Card
        className="col-md-4 mb-4 mx-auto"
        style={{
          width: "100%",
          maxWidth: "18rem",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Card.Img
          variant="top"
          src="https://lumiere-a.akamaihd.net/v1/images/han-solo-main_a4c8ff79.jpeg?region=0%2C0%2C1920%2C1080"
        />
        <Card.Body style={{ padding: "1rem", textAlign: "center" }}>
          <Card.Title style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            HAN SOLO
          </Card.Title>
          <Button variant="dark" onClick={handleShowHan}>
            Click Here to learn more about Han!
          </Button>
        </Card.Body>
      </Card>
      <Modal show={showHanModal} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            <img
              src="https://lumiere-a.akamaihd.net/v1/images/han-solo-main_a4c8ff79.jpeg?region=0%2C0%2C1920%2C1080"
              alt="Luke"
              style={{ width: "100%" }}
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Han Solo rose from an impoverished childhood on the mean streets of
          Corellia to become one of the heroes of the Rebel Alliance. As captain
          of the Millennium Falcon, Han and his co-pilot Chewbacca came to
          believe in the cause of galactic freedom, joining Luke Skywalker and
          Princess Leia Organa in the fight against the Empire. After the Battle
          of Endor, Han faced difficult times in a chaotic galaxy, leading to a
          shattering confrontation with his estranged son Ben.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/*CHEWBACCA*/}
      <Card
        className="col-md-4 mb-4 mx-auto"
        style={{
          width: "100%",
          maxWidth: "18rem",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Card.Img
          variant="top"
          src="https://lumiere-a.akamaihd.net/v1/images/chewie-main_906097a5.jpeg?region=0%2C1%2C768%2C432"
        />
        <Card.Body style={{ padding: "1rem", textAlign: "center" }}>
          <Card.Title style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            CHEWBACCA
          </Card.Title>
          <Button variant="dark" onClick={handleShowChew}>
            Click Here to learn more about Chewbacca!
          </Button>
        </Card.Body>
      </Card>
      <Modal show={showChewModal} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            <img
              src="https://lumiere-a.akamaihd.net/v1/images/chewie-main_906097a5.jpeg?region=0%2C1%2C768%2C432"
              alt="Luke"
              style={{ width: "100%" }}
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          A legendary Wookiee warrior and Han Solo’s longtime co-pilot,
          Chewbacca continues to serve as faithful first mate to carry out
          daring missions against the First Order behind the controls of the
          Millennium Falcon. Known as Chewie to his closest friends, he was part
          of a core group of rebels who restored freedom to the galaxy during
          the reign of the Galactic Empire. Known for his short temper and
          accuracy with a bowcaster, Chewie also has a big heart and unwavering
          loyalty to his friends.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/*YODA*/}
      <Card
        className="col-md-4 mb-4 mx-auto"
        style={{
          width: "100%",
          maxWidth: "18rem",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Card.Img
          variant="top"
          src="https://lumiere-a.akamaihd.net/v1/images/Yoda-Retina_2a7ecc26.jpeg?region=0%2C0%2C1536%2C864"
        />
        <Card.Body style={{ padding: "1rem", textAlign: "center" }}>
          <Card.Title style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            YODA
          </Card.Title>
          <Button variant="dark" onClick={handleShowYoda}>
            Click Here to learn more about Yoda!
          </Button>
        </Card.Body>
      </Card>
      <Modal show={showYodaModal} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            <img
              src="https://lumiere-a.akamaihd.net/v1/images/Yoda-Retina_2a7ecc26.jpeg?region=0%2C0%2C1536%2C864"
              alt="Luke"
              style={{ width: "100%" }}
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Yoda was a legendary Jedi Master and stronger than most in his
          connection with the Force. Small in size but wise and powerful, he
          trained Jedi for over 800 years, playing integral roles in the Clone
          Wars, the instruction of Luke Skywalker, and unlocking the path to
          immortality.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/*DARTHVADER*/}
      <Card
        className="col-md-4 mb-4 mx-auto"
        style={{
          width: "100%",
          maxWidth: "18rem",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Card.Img
          variant="top"
          src="https://lumiere-a.akamaihd.net/v1/images/darth-vader-main_4560aff7.jpeg?region=0%2C67%2C1280%2C720"
        />
        <Card.Body style={{ padding: "1rem", textAlign: "center" }}>
          <Card.Title style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            DARTH VADER
          </Card.Title>
          <Button variant="dark" onClick={handleShowDarth}>
            Click Here to learn more about Vader!
          </Button>
        </Card.Body>
      </Card>
      <Modal show={showDarthModal} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            <img
              src="https://lumiere-a.akamaihd.net/v1/images/darth-vader-main_4560aff7.jpeg?region=0%2C67%2C1280%2C720"
              alt="Luke"
              style={{ width: "100%" }}
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Once the heroic Jedi Knight named Anakin Skywalker, Darth Vader was
          seduced by the dark side of the Force. Forever scarred by his defeat
          on Mustafar, Vader was transformed into a cybernetically-enhanced Sith
          Lord. At the dawn of the Empire, Vader led the Empire’s eradication of
          the Jedi Order and the search for survivors. He remained in service of
          the Emperor -- the evil Darth Sidious -- for decades, enforcing his
          Master’s will and seeking to crush the Rebel Alliance and other
          detractors. But there was still good in him…
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/*R2-D2*/}
      <Card
        className="col-md-4 mb-4 mx-auto"
        style={{
          width: "100%",
          maxWidth: "18rem",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Card.Img
          variant="top"
          src="https://lumiere-a.akamaihd.net/v1/images/r2-d2-main_f315b094.jpeg?region=273%2C0%2C951%2C536"
        />
        <Card.Body style={{ padding: "1rem", textAlign: "center" }}>
          <Card.Title style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            R2-D2
          </Card.Title>
          <Button variant="dark" onClick={handleShowR2}>
            Click Here to learn more about R2-D2!
          </Button>
        </Card.Body>
      </Card>
      <Modal show={showR2Modal} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            <img
              src="https://lumiere-a.akamaihd.net/v1/images/r2-d2-main_f315b094.jpeg?region=273%2C0%2C951%2C536"
              alt="Ahsoka Tano"
              style={{ width: "100%" }}
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          A reliable and versatile astromech droid, R2-D2 has served Padmé
          Amidala, Anakin Skywalker, and Luke Skywalker in turn, showing great
          bravery in rescuing his masters and their friends from many perils. A
          skilled starship mechanic and fighter pilot's assistant, he has an
          unlikely but enduring friendship with the fussy protocol droid C-3PO.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};