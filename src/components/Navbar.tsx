import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CharacterAvatar } from "@crossbell/ui";
import NavDropdown from "react-bootstrap/NavDropdown";
import { metadata } from "../../metadata";
import { ILink, generateLink } from "./interfaces/ILink";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import { ConnectButton } from "@crossbell/connect-kit";
import { Button } from "react-bootstrap";
import { useAccountCharacter } from "@crossbell/connect-kit";
function BNavbar(props: { links: ILink[] }) {
  const character = useAccountCharacter();

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="/">{metadata.name}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {props.links.map((e) => (
              <Nav.Link href={generateLink(e)} key={e.name.toLowerCase()}>
                {e.name}
              </Nav.Link>
            ))}
          </Nav>
          <div className="my-3 my-lg-0">
            <ConnectButton>
              {(status, { connect, disconnect }) => (
                <Button onClick={status.isConnected ? disconnect : connect}>
                  {status.isConnected ? "Disconnect" : "Connect"}
                </Button>
              )}
            </ConnectButton>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BNavbar;
