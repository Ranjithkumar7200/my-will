import React, { useState } from "react";
import {
  Container,
  Col,
  FormControl,
  InputGroup,
  Badge,
  Offcanvas,
  Nav,
} from "react-bootstrap";
import {
  FaSearch,
  FaBell,
  FaCog,
  FaUserCircle,
  FaPowerOff,
  FaBars,
} from "react-icons/fa";

const TopNavbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  // Functions to toggle Offcanvas (menu)
  const handleCloseMenu = () => setShowMenu(false);
  const handleShowMenu = () => setShowMenu(true);

  return (
    <>
      <Container
        fluid
        className="d-flex align-items-center justify-content-between p-3 bg-light w-100 position-sticky top-0"
        style={{ zIndex: 999 }}
      >
        <Col xs={6} md={3}>
          <span
            className="mainColor"
            style={{ fontSize: "20px", fontWeight: "bold" }}
          >
            my-will
          </span>
        </Col>
        <Col
          xs={6}
          md={6}
          className="d-flex justify-content-end align-items-center"
        >
          <div className="d-none mx-2 d-md-block">
            <InputGroup style={{ border: "none", outline: "none" }}>
              <FormControl
                placeholder="Search..."
                aria-label="Search"
                style={{
                  borderBottom: "2px solid black",
                  borderRadius: 0,
                  boxShadow: "none",
                  outline: "none",
                }}
                className="bg-transparent"
              />
              <InputGroup.Text
                className="pointer"
                style={{
                  backgroundColor: "transparent",
                  borderBottom: "2px solid black",
                  borderRadius: 0,
                  boxShadow: "none",
                }}
              >
                <FaSearch />
              </InputGroup.Text>
            </InputGroup>
          </div>
          <div className="d-md-none">
            <FaBars size={24} onClick={handleShowMenu} />
          </div>
          <div className="d-none d-md-flex justify-content-end align-items-center">
            <div className="me-3 position-relative pointer">
              <FaBell size={20} />
              <Badge
                bg="danger"
                pill
                className="position-absolute translate-middle badge-sm "
                style={{ top: "4px", right: "-20px" }}
              >
                5
              </Badge>
            </div>
            <div className="me-3 pointer">
              <FaCog size={20} />
            </div>
            <div className="me-3 pointer">
              <FaUserCircle size={20} />
            </div>
            <div className="pointer">
              <FaPowerOff size={20} />
            </div>
          </div>
        </Col>
      </Container>
      <Offcanvas show={showMenu} onHide={handleCloseMenu} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            {" "}
            <span
              className="mainColor"
              style={{ fontSize: "20px", fontWeight: "bold" }}
            >
              my-will
            </span>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Search..."
              aria-label="Search"
              style={{
                borderBottom: "2px solid black",
                borderRadius: 0,
                boxShadow: "none",
                outline: "none",
              }}
              className="bg-transparent"
            />
            <InputGroup.Text
              className="pointer"
              style={{
                backgroundColor: "transparent",
                borderBottom: "2px solid black",
                borderRadius: 0,
                boxShadow: "none",
              }}
            >
              <FaSearch />
            </InputGroup.Text>
          </InputGroup>
          <Nav className="flex-column">
            <Nav.Item className="d-flex align-items-center mb-3 pointer">
              <FaBell className="me-3" />
              <span>Notifications</span>
            </Nav.Item>
            <Nav.Item className="d-flex align-items-center mb-3 pointer">
              <FaCog className="me-3" />
              <span>Settings</span>
            </Nav.Item>
            <Nav.Item className="d-flex align-items-center mb-3 pointer">
              <FaUserCircle className="me-3" />
              <span>Profile</span>
            </Nav.Item>
            <Nav.Item className="d-flex align-items-center mb-3 pointer">
              <FaPowerOff className="me-3" />
              <span>Logout</span>
            </Nav.Item>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default TopNavbar;
