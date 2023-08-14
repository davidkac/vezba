import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import CartButton from "../Cart/CartButton";

function MainNavigation(props) {

 

  return (
    <Navbar className="bg-body-tertiary justify-content-between">
      <Nav className="me-auto" style={{ marginLeft: "3rem" }}>
        <Nav.Link as={Link} to="/products" style={{ marginRight: "2rem" }}>
          Products
        </Nav.Link>
      </Nav>
      <Form inline="true" style={{ marginRight: "5rem" }}>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
      <CartButton onClick={props.onClickCartButton} />
    </Navbar>
  );
}

export default MainNavigation;
