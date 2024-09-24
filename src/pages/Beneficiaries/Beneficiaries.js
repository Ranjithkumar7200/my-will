import React, { useState } from "react";
import { Container, Row, Col, Table, Button, Form } from "react-bootstrap";

const Beneficiaries = () => {
  const [beneficiaries, setBeneficiaries] = useState([
    {
      id: 1,
      name: "Vaishnavi",
      relationship: "Sister",
      dob: "04/10/1988",
      status: "Active",
    },
    {
      id: 2,
      name: "Vaishnavi",
      relationship: "Sister",
      dob: "04/10/1988",
      status: "Inactive",
    },
  ]);

  return (
    <Container fluid>
      <Row className="mb-3">
        <Col xs={12} className="text-center">
          <h4>Add Beneficiaries</h4>
        </Col>
      </Row>
      <Row>
        <Col lg={8} md={12}>
          <Table striped bordered hover responsive="md">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Relationship</th>
                <th>Date of Birth</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {beneficiaries.map((beneficiary, index) => (
                <tr key={beneficiary.id}>
                  <td>{index + 1}</td>
                  <td>{beneficiary.name}</td>
                  <td>{beneficiary.relationship}</td>
                  <td>{beneficiary.dob}</td>
                  <td>
                    <Form.Check
                      type="switch"
                      id={`status-switch-${beneficiary.id}`}
                      label={
                        beneficiary.status === "Active" ? "Active" : "Inactive"
                      }
                      checked={beneficiary.status === "Active"}
                      onChange={() => {
                        const newStatus =
                          beneficiary.status === "Active"
                            ? "Inactive"
                            : "Active";
                        setBeneficiaries((prev) =>
                          prev.map((b) =>
                            b.id === beneficiary.id
                              ? { ...b, status: newStatus }
                              : b
                          )
                        );
                      }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
        <Col lg={4} md={12}>
          <h4>Add New Beneficiary</h4>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Relationship</Form.Label>
              <Form.Control type="text" placeholder="Enter relationship" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Add Beneficiary
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Beneficiaries;
