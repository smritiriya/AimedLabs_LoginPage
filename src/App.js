import logo from './logo.svg';
import './App.css';
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Image,
  InputGroup,
  Modal,
} from "react-bootstrap";
import { useState } from 'react';
function App() {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    setShowModal(true);
  };
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    // <Container>
    //   <Row
    //     className="d-flex flex-column flex-md-row justify-content-center align-items-center"
    //     style={{ height: "100vh" }}
    //   >
    //     <Col md={6}>
    //       <Image src="pic.jpg" fluid />
    //     </Col>
    //     <Col md={6}>
    //       <h1 className="text-center">Login</h1>

    //       <Form>
    //         <Form.Group controlId="loginId" className="mb-3">
    //           <Form.Label>Login ID</Form.Label>
    //           <Form.Control type="text" placeholder="Enter your login ID" />
    //         </Form.Group>

    //         <Form.Group controlId="password" className="mb-3">
    //           <Form.Label>Password</Form.Label>
    //           <Form.Control type="password" placeholder="Password" />
    //         </Form.Group>

    //         <Form.Group controlId="rememberMe" className="mb-3">
    //           <Form.Check type="checkbox" label="Remember me" />
    //         </Form.Group>

    //         <Form.Group controlId="changePassword" className="mb-3">
    //           <Form.Check type="checkbox" label="Change password" />
    //         </Form.Group>

    //         <Form.Group controlId="termsAndConditions" className="mb-3">
    //           <InputGroup>
    //             <Form.Check type="checkbox" />
    //             <Form.Label>Agree to Terms and Conditions</Form.Label>
    //           </InputGroup>
    //         </Form.Group>

    //         <Button variant="primary" type="submit" style={{ width: "100%" }}>
    //           Login
    //         </Button>

    //         <p className="mt-3">
    //           Don't have an account? <a href="#">Register here</a>
    //         </p>
    //       </Form>
    //     </Col>
    //   </Row>
    // </Container>
    <Container className="p-5">
      <Row
        className="d-flex flex-column-reverse flex-md-row justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <Col md={6} className="mb-4" data-aos="fade-right">
          
          <Image src="pic.jpg" fluid style={{ height: "70vh" }} />
        </Col>
        <Col md={6} className="mb-4" data-aos="fade-left">
          <h1 className="text-center">Login</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="loginId" className="mb-3">
              <Form.Label style={{ fontWeight: "bold" }}>Login ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your login ID"
                required
              />
            </Form.Group>

            <Form.Group controlId="password" className="mb-3">
              <Form.Label style={{ fontWeight: "bold" }}>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" required />
            </Form.Group>

            <Form.Group
              controlId="rememberMe"
              className="mb-3 d-flex justify-content-between"
            >
              <div>
                <Form.Check type="checkbox" label="Remember me" />
              </div>
              <div>
                <Form.Check
                  type="checkbox"
                  label="Change password"
                  style={{ color: "#F78719" }}
                />
              </div>
            </Form.Group>
            <Form.Group controlId="termsAndConditions" className="mb-3">
              <InputGroup>
                <Form.Check type="checkbox" />
                <Form.Label>
                  &nbsp; Agree to{" "}
                  <a href="" style={{ color: "#F78719" }}>
                    Terms and Conditions
                  </a>
                </Form.Label>
              </InputGroup>
            </Form.Group>
            <Row>
              <Col className="d-flex justify-content-center">
                <Button
                  variant="primary"
                  className="mybtn shadow"
                  type="submit"
                  style={{ width: "60%", backgroundColor: "#1575A7" }}
                >
                  Login
                </Button>
              </Col>
            </Row>

            <p className="mt-3 text-center">
              Don't have an account?{" "}
              <a href="#" style={{ color: "#F78719", fontWeight: "bold" }}>
                Register here
              </a>
            </p>
          </Form>
        </Col>
      </Row>
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          {/* <Modal.Title>You are logged in</Modal.Title> */}
        </Modal.Header>
        <Modal.Body className="p-3">
          <h5 style={{ color: "#116694" }}>
            {" "}
            Congratulations! You have successfully logged in.
          </h5>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => setShowModal(false)}
            style={{ backgroundColor: "#116694" }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default App;
