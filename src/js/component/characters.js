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
          <div>
            <Button
              variant="dark"
              onClick={handleShowLuke}
              style={{ marginBottom: "10px" }}
            >
              Click Here to learn more about Luke!
            </Button>
            <button>
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
          <Modal.Body>
            Luke Skywalker was a Tatooine farmboy who rose from humble
            beginnings to become one of the greatest Jedi the galaxy has ever
            known. Along with his friends Princess Leia and Han Solo, Luke
            battled the evil Empire, discovered the truth of his parentage, and
            ended the tyranny of the Sith. A generation later, the location of
            the famed Jedi master was one of the galaxy’s greatest mysteries.
            Haunted by Ben Solo’s fall to evil and convinced the Jedi had to
            end, Luke sought exile on a distant world, ignoring the galaxy’s
            pleas for help. But his solitude would be interrupted – and Luke
            Skywalker had one final, momentous role to play in the struggle
            between good and evil.
          </Modal.Body>
          <Modal.Footer>
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  {/* Left side information */}
                  {[
                    { label: "Name", value: "Luke Skywalker" },
                    { label: "Birthplace", value: "Tatooine" },
                    {
                      label: "Affiliation",
                      value: "Rebel Alliance, Jedi Order",
                    },
                    { label: "Species", value: "Human" },
                  ].map((info, index) => (
                    <div key={index}>
                      <strong>{info.label}:</strong> {info.value}
                    </div>
                  ))}
                </div>
                <div className="col-md-6">
                  {/* Right side information */}
                  {[
                    { label: "Occupation", value: "Jedi Knight" },
                    { label: "Height", value: "1.72 meters" },
                    { label: "Lightsaber Color", value: "Blue" },
                    { label: "Master", value: "Yoda, Obi-Wan Kenobi" },
                    { label: "Apprentices", value: "Ben Solo (Kylo Ren)" },
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
          <div>
            <Button
              variant="dark"
              onClick={handleShowObi}
              style={{ marginBottom: "10px" }}
            >
              Click Here to learn more about Luke!
            </Button>
            <button>
              <img
                src="https://www.svgrepo.com/show/114534/favorite.svg"
                alt="favorite"
                style={{ width: "15%", height: "30%" }}
              />
            </button>
          </div>
        </Card.Body>

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
            A legendary Jedi Master, Obi-Wan Kenobi was a noble man and gifted
            in the ways of the Force. He trained Anakin Skywalker, served as a
            general in the Republic Army during the Clone Wars, and guided Luke
            Skywalker as a mentor.
          </Modal.Body>
          <Modal.Footer>
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  {[
                    { label: "Name", value: "Obi-Wan Kenobi" },
                    { label: "Birthplace", value: "Stewjon" },
                    {
                      label: "Affiliation",
                      value: "Jedi Order, Galactic Republic",
                    },
                    { label: "Species", value: "Human" },
                  ].map((info, index) => (
                    <div key={index}>
                      <strong>{info.label}:</strong> {info.value}
                    </div>
                  ))}
                </div>
                <div className="col-md-6">
                  {[
                    { label: "Occupation", value: "Jedi Master" },
                    { label: "Height", value: "1.77 meters" },
                    { label: "Lightsaber Color", value: "Blue" },
                    { label: "Master", value: "Qui-Gon Jinn" },
                    {
                      label: "Apprentices",
                      value: "Anakin Skywalker, Ahsoka Tano",
                    },
                  ].map((info, index) => (
                    <div key={index}>
                      <strong>{info.label}:</strong> {info.value}
                    </div>
                  ))}
                </div>
              </div>
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
          <div>
            <Button
              variant="dark"
              onClick={handleShowLeia}
              style={{ marginBottom: "10px" }}
            >
              Click Here to learn more about Luke!
            </Button>
            <button>
              <img
                src="https://www.svgrepo.com/show/114534/favorite.svg"
                alt="favorite"
                style={{ width: "15%", height: "30%" }}
              />
            </button>
          </div>
        </Card.Body>

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
            political leaders, she struck out on her own to oppose the First
            Order as founder of the Resistance. These setbacks in her political
            career were accompanied by more personal losses, which she endured
            with her seemingly inexhaustible will.
          </Modal.Body>
          <Modal.Footer>
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  {/* Left side information */}
                  {[
                    { label: "Name", value: "Leia Organa" },
                    { label: "Birthplace", value: "Polis Massa" },
                    {
                      label: "Affiliation",
                      value: "Rebel Alliance, Resistance",
                    },
                    { label: "Species", value: "Human" },
                  ].map((info, index) => (
                    <div key={index}>
                      <strong>{info.label}:</strong> {info.value}
                    </div>
                  ))}
                </div>
                <div className="col-md-6">
                  {/* Right side information */}
                  {[
                    {
                      label: "Occupation",
                      value: "Princess, Senator, General",
                    },
                    { label: "Height", value: "1.50 meters" },
                    { label: "Lightsaber Color", value: "None" },
                    { label: "Master", value: "Luke Skywalker" },
                    { label: "Apprentices", value: "Rey" },
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
          <div>
            <Button
              variant="dark"
              onClick={handleShowHan}
              style={{ marginBottom: "10px" }}
            >
              Click Here to learn more about Luke!
            </Button>
            <button>
              <img
                src="https://www.svgrepo.com/show/114534/favorite.svg"
                alt="favorite"
                style={{ width: "15%", height: "30%" }}
              />
            </button>
          </div>
        </Card.Body>

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
            Corellia to become one of the heroes of the Rebel Alliance. As
            captain of the Millennium Falcon, Han and his co-pilot Chewbacca
            came to believe in the cause of galactic freedom, joining Luke
            Skywalker and Princess Leia Organa in the fight against the Empire.
            After the Battle of Endor, Han faced difficult times in a chaotic
            galaxy, leading to a shattering confrontation with his estranged son
            Ben.
          </Modal.Body>
          <Modal.Footer>
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  {/* Left side information */}
                  {[
                    { label: "Name", value: "Han Solo" },
                    { label: "Birthplace", value: "Corellia" },
                    {
                      label: "Affiliation",
                      value: "Rebel Alliance, Resistance",
                    },
                    { label: "Species", value: "Human" },
                  ].map((info, index) => (
                    <div key={index}>
                      <strong>{info.label}:</strong> {info.value}
                    </div>
                  ))}
                </div>
                <div className="col-md-6">
                  {/* Right side information */}
                  {[
                    { label: "Occupation", value: "Smuggler, Captain" },
                    { label: "Height", value: "1.80 meters" },
                    { label: "Lightsaber Color", value: "None" },
                    { label: "Master", value: "None" },
                    { label: "Apprentices", value: "None" },
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
          <div>
            <Button
              variant="dark"
              onClick={handleShowChew}
              style={{ marginBottom: "10px" }}
            >
              Click Here to learn more about Luke!
            </Button>
            <button>
              <img
                src="https://www.svgrepo.com/show/114534/favorite.svg"
                alt="favorite"
                style={{ width: "15%", height: "30%" }}
              />
            </button>
          </div>
        </Card.Body>

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
            Millennium Falcon. Known as Chewie to his closest friends, he was
            part of a core group of rebels who restored freedom to the galaxy
            during the reign of the Galactic Empire. Known for his short temper
            and accuracy with a bowcaster, Chewie also has a big heart and
            unwavering loyalty to his friends.
          </Modal.Body>
          <Modal.Footer>
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  {/* Left side information */}
                  {[
                    { label: "Name", value: "Chewbacca" },
                    { label: "Birthplace", value: "Kashyyyk" },
                    {
                      label: "Affiliation",
                      value: "Rebel Alliance, Resistance",
                    },
                    { label: "Species", value: "Wookiee" },
                  ].map((info, index) => (
                    <div key={index}>
                      <strong>{info.label}:</strong> {info.value}
                    </div>
                  ))}
                </div>
                <div className="col-md-6">
                  {/* Right side information */}
                  {[
                    { label: "Occupation", value: "Smuggler, Resistance Hero" },
                    { label: "Height", value: "7.3 feet" },
                    { label: "Lightsaber Color", value: "None" },
                    { label: "Master", value: "None" },
                    { label: "Apprentices", value: "None" },
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
          <div>
            <Button
              variant="dark"
              onClick={handleShowYoda}
              style={{ marginBottom: "10px" }}
            >
              Click Here to learn more about Luke!
            </Button>
            <button>
              <img
                src="https://www.svgrepo.com/show/114534/favorite.svg"
                alt="favorite"
                style={{ width: "15%", height: "30%" }}
              />
            </button>
          </div>
        </Card.Body>

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
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  {/* Left side information */}
                  {[
                    { label: "Name", value: "Yoda" },
                    { label: "Birthplace", value: "Unknown" },
                    {
                      label: "Affiliation",
                      value: "Jedi Order, Galactic Republic, Rebel Alliance",
                    },
                    { label: "Species", value: "Yoda's species" },
                  ].map((info, index) => (
                    <div key={index}>
                      <strong>{info.label}:</strong> {info.value}
                    </div>
                  ))}
                </div>
                <div className="col-md-6">
                  {/* Right side information */}
                  {[
                    { label: "Occupation", value: "Jedi Grand Master" },
                    { label: "Height", value: "0.66 meters" },
                    { label: "Lightsaber Color", value: "Green" },
                    { label: "Master", value: "Huyang" },
                    {
                      label: "Apprentices",
                      value:
                        "Count Dooku, Mace Windu, Qui-Gon Jinn, Obi-Wan Kenobi, Anakin Skywalker, Luke Skywalker",
                    },
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
          <div>
            <Button
              variant="dark"
              onClick={handleShowDarth}
              style={{ marginBottom: "10px" }}
            >
              Click Here to learn more about Luke!
            </Button>
            <button>
              <img
                src="https://www.svgrepo.com/show/114534/favorite.svg"
                alt="favorite"
                style={{ width: "15%", height: "30%" }}
              />
            </button>
          </div>
        </Card.Body>

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
            on Mustafar, Vader was transformed into a cybernetically-enhanced
            Sith Lord. At the dawn of the Empire, Vader led the Empire’s
            eradication of the Jedi Order and the search for survivors. He
            remained in service of the Emperor -- the evil Darth Sidious -- for
            decades, enforcing his Master’s will and seeking to crush the Rebel
            Alliance and other detractors. But there was still good in him…
          </Modal.Body>
          <Modal.Footer>
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  {/* Left side information */}
                  {[
                    { label: "Name", value: "Darth Vader" },
                    { label: "Birthplace", value: "Tatooine" },
                    { label: "Affiliation", value: "Sith, Galactic Empire" },
                    { label: "Species", value: "Human" },
                  ].map((info, index) => (
                    <div key={index}>
                      <strong>{info.label}:</strong> {info.value}
                    </div>
                  ))}
                </div>
                <div className="col-md-6">
                  {/* Right side information */}
                  {[
                    {
                      label: "Occupation",
                      value: "Sith Lord, Jedi Knight (formerly)",
                    },
                    { label: "Height", value: "2.02 meters" },
                    { label: "Lightsaber Color", value: "Red" },
                    { label: "Master", value: "Darth Sidious" },
                    {
                      label: "Apprentices",
                      value:
                        "Ahsoka Tano (formerly), Galen Marek (Starkiller), The Inquisitors",
                    },
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
          <div>
            <Button
              variant="dark"
              onClick={handleShowR2}
              style={{ marginBottom: "10px" }}
            >
              Click Here to learn more about Luke!
            </Button>
            <button>
              <img
                src="https://www.svgrepo.com/show/114534/favorite.svg"
                alt="favorite"
                style={{ width: "15%", height: "30%" }}
              />
            </button>
          </div>
        </Card.Body>

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
            bravery in rescuing his masters and their friends from many perils.
            A skilled starship mechanic and fighter pilot's assistant, he has an
            unlikely but enduring friendship with the fussy protocol droid
            C-3PO.
          </Modal.Body>
          <Modal.Footer>
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  {/* Left side information */}
                  {[
                    { label: "Name", value: "R2-D2" },
                    { label: "Manufacturer", value: "Industrial Automaton" },
                    {
                      label: "Affiliation",
                      value:
                        "Galactic Republic, Rebel Alliance, Jedi Order, Resistance",
                    },
                    { label: "Model", value: "R2-series astromech droid" },
                  ].map((info, index) => (
                    <div key={index}>
                      <strong>{info.label}:</strong> {info.value}
                    </div>
                  ))}
                </div>
                <div className="col-md-6">
                  {/* Right side information */}
                  {[
                    { label: "Height", value: "0.96 meters" },
                    { label: "Gender", value: "Masculine programming" },
                    { label: "Sensor Color", value: "Red" },
                    {
                      label: "Equipment",
                      value:
                        "Various tools, Fire extinguisher, Electric shock prod, Holographic projector",
                    },
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
    </div>
  );
};
