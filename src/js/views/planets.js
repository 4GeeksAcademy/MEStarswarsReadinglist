import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";

export const Planets = () => {
  const [showAeosModal, setShowAeosModal] = useState(false);
  const [showDantooineModal, setShowDantooineModal] = useState(false);
  const [showArModal, setShowArModal] = useState(false);
  const [showReeModal, setShowReeModal] = useState(false);
  const [showConModal, setShowConModal] = useState(false);
  const [showCastModal, setShowCastModal] = useState(false);
  const [showCelsorModal, setShowCelsorModal] = useState(false);
  const [showDawnModal, setShowDawnModal] = useState(false);

  const handleClose = () => {
    setShowAeosModal(false);
    setShowDantooineModal(false);
    setShowArModal(false);
    setShowReeModal(false);
    setShowConModal(false);
    setShowCastModal(false);
    setShowCelsorModal(false);
    setShowDawnModal(false);
  };

  const handleShowAeos = () => setShowAeosModal(true);
  const handleShowDantooine = () => setShowDantooineModal(true);
  const handleShowAr = () => setShowArModal(true);
  const handleShowRee = () => setShowReeModal(true);
  const handleShowCon = () => setShowConModal(true);
  const handleShowCast = () => setShowCastModal(true);
  const handleShowCelsor = () => setShowCelsorModal(true);
  const handleShowDawn = () => setShowDawnModal(true);

  return (
    <div className="row mb-4">
      {/*AEOS PRIME*/}
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
          src="https://lumiere-a.akamaihd.net/v1/images/aeos-prime-main_1af6e847.jpeg?region=0%2C0%2C1280%2C720"
        />
        <Card.Body style={{ padding: "1rem", textAlign: "center" }}>
          <Card.Title style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            AEOS PRIME
          </Card.Title>
          <Button variant="dark" onClick={handleShowAeos}>
            Click Here to learn more about Aeos!
          </Button>
        </Card.Body>
      </Card>

      <Modal show={showAeosModal} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            <img
              src="https://lumiere-a.akamaihd.net/v1/images/aeos-prime-main_1af6e847.jpeg?region=0%2C0%2C1280%2C720"
              alt="Luke"
              style={{ width: "100%" }}
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          After scouring the Outer Rim territories, the Colossus finds a new
          home on the planet Aeos Prime. But among the shimmering caverns and
          outcroppings are remnants of another society and a deadly visit from
          the First Order.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/*ARVALA-7*/}
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
          src="https://lumiere-a.akamaihd.net/v1/images/arvala-7-main_c0f2284a.jpeg?region=164%2C0%2C953%2C536"
        />
        <Card.Body style={{ padding: "1rem", textAlign: "center" }}>
          <Card.Title style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            ARVALA-7
          </Card.Title>
          <Button variant="dark" onClick={handleShowAr}>
            Click Here to learn more about Arvala-7!
          </Button>
        </Card.Body>
      </Card>
      <Modal show={showArModal} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            <img
              src="https://lumiere-a.akamaihd.net/v1/images/arvala-7-main_c0f2284a.jpeg?region=164%2C0%2C953%2C536"
              alt="Luke"
              style={{ width: "100%" }}
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          On the frontier world of Arvala-7, the cracked landscape of hardened
          mud gives way to dust clouds and viscous mud flats. The planet is
          sparsely populated, but intrepid vapor farmers eke out a meager
          living, trading with Jawa settlers.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/*ASHAS REE*/}
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
          src="https://lumiere-a.akamaihd.net/v1/images/zro-ff-003387_29dc5bc0.jpeg?region=0%2C0%2C1280%2C720"
        />
        <Card.Body style={{ padding: "1rem", textAlign: "center" }}>
          <Card.Title style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            ASHAS REE
          </Card.Title>
          <Button variant="dark" onClick={handleShowRee}>
            Click Here to learn more about Ashas!
          </Button>
        </Card.Body>
      </Card>
      <Modal show={showReeModal} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            <img
              src="https://lumiere-a.akamaihd.net/v1/images/zro-ff-003387_29dc5bc0.jpeg?region=0%2C0%2C1280%2C720"
              alt="Luke"
              style={{ width: "100%" }}
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          At first glance the lush green vistas of Ashas Ree seem exotic and
          inviting, but the planet harbors an ancient and dark history. The
          recent excavation of an old Sith temple has sent the local villagers
          fleeing in fear, and the destructive power of the dark side ripples
          from the sacred site like a beacon of doom. Before making a hasty
          departure, villagers left behind warnings to any visitors who might
          mistake the beautiful landscape for a welcoming retreat. "Beware.
          Evil. Get Away."
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/*CANTONICA*/}
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
          src="https://lumiere-a.akamaihd.net/v1/images/ep8-ff-004338_6dd8c0f4.jpeg?region=0%2C0%2C1280%2C720"
        />
        <Card.Body style={{ padding: "1rem", textAlign: "center" }}>
          <Card.Title style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            CANTONICA
          </Card.Title>
          <Button variant="dark" onClick={handleShowCon}>
            Click Here to learn more about Cantonica!
          </Button>
        </Card.Body>
      </Card>
      <Modal show={showConModal} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            <img
              src="https://lumiere-a.akamaihd.net/v1/images/ep8-ff-004338_6dd8c0f4.jpeg?region=0%2C0%2C1280%2C720"
              alt="Luke"
              style={{ width: "100%" }}
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Located in the Corporate Sector, Cantonica would be just another
          forlorn, beige desert planet if not for the presence of the
          ultra-wealthy resort city of Canto Bight, which draws well-heeled
          tourists and high-rolling gamblers from across the galaxy.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/*CASTILON*/}
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
          src="https://lumiere-a.akamaihd.net/v1/images/castilon-main_d217dc4d.jpeg?region=0%2C0%2C1280%2C720"
        />
        <Card.Body style={{ padding: "1rem", textAlign: "center" }}>
          <Card.Title style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            CASTILON
          </Card.Title>
          <Button variant="dark" onClick={handleShowCast}>
            Click Here to learn more about Castilon!
          </Button>
        </Card.Body>
      </Card>
      <Modal show={showCastModal} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            <img
              src="https://lumiere-a.akamaihd.net/v1/images/castilon-main_d217dc4d.jpeg?region=0%2C0%2C1280%2C720"
              alt="Luke"
              style={{ width: "100%" }}
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Located in the Western Reaches near Takodana, the planet Castilon is
          dominated by vast oceans. The surface is broken up by the occasional
          inhabited structures, including for a time the Colossus, a refueling
          station and home to wannabe racers.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/*CELSOR 3*/}
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
          src="https://lumiere-a.akamaihd.net/v1/images/zro-ff-003086_66fd2940.jpeg?region=0%2C0%2C3600%2C2025"
        />
        <Card.Body style={{ padding: "1rem", textAlign: "center" }}>
          <Card.Title style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            CELSOR 3
          </Card.Title>
          <Button variant="dark" onClick={handleShowCelsor}>
            Click Here to learn more about Celsor 3!
          </Button>
        </Card.Body>
      </Card>
      <Modal show={showCelsorModal} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            <img
              src="https://lumiere-a.akamaihd.net/v1/images/zro-ff-003086_66fd2940.jpeg?region=0%2C0%2C3600%2C2025"
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

      {/*CONCORD DAWN*/}
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
          src="https://lumiere-a.akamaihd.net/v1/images/concord-dawn_4277a880.jpeg?region=4%2C0%2C1552%2C873"
        />
        <Card.Body style={{ padding: "1rem", textAlign: "center" }}>
          <Card.Title style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            CONCORD DAWN
          </Card.Title>
          <Button variant="dark" onClick={handleShowDawn}>
            Click Here to learn more about Concord!
          </Button>
        </Card.Body>
      </Card>
      <Modal show={showDawnModal} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            <img
              src="https://lumiere-a.akamaihd.net/v1/images/concord-dawn_4277a880.jpeg?region=4%2C0%2C1552%2C873"
              alt="Luke"
              style={{ width: "100%" }}
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Concord Dawn was a system under Mandalorian control, led by the
          legendary warrior Fenn Rau and his group of Protectors. While Rau
          entered into an agreement with the Empire, he eventually granted the
          rebels safe passage through the Concord Dawn system.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/*DANTOOINE*/}
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
          src="https://lumiere-a.akamaihd.net/v1/images/dantooine_f1c04676.jpeg?region=0%2C20%2C1560%2C878"
        />
        <Card.Body style={{ padding: "1rem", textAlign: "center" }}>
          <Card.Title style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            DANTOOINE
          </Card.Title>
          <Button variant="dark" onClick={handleShowDantooine}>
            Click Here to learn more about DANTOOINE!
          </Button>
        </Card.Body>
      </Card>
      <Modal show={showDantooineModal} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            <img
              src="https://lumiere-a.akamaihd.net/v1/images/dantooine_f1c04676.jpeg?region=0%2C20%2C1560%2C878"
              alt="Ahsoka Tano"
              style={{ width: "100%" }}
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          The site of the first base for the Rebel Alliance, Dantooine is an
          Outer Rim world, filled with lush forests and green landscapes. The
          Alliance would later leave Dantooine for a new home in an effort to
          stay one step ahead of the Empire.
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
