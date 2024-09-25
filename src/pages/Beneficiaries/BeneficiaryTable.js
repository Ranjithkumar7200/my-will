import React, { useState } from "react";
import { Col, Table, Form, Pagination } from "react-bootstrap";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { RxDoubleArrowLeft, RxDoubleArrowRight } from "react-icons/rx";

const BeneficiaryTable = () => {
  const [beneficiaries, setBeneficiaries] = useState([
    {
      id: 1,
      name: "John Doe",
      relationship: "Brother",
      dob: "01/01/1990",
      status: "Active",
    },
    {
      id: 2,
      name: "Jane Smith",
      relationship: "Sister",
      dob: "02/02/1992",
      status: "Inactive",
    },
    {
      id: 3,
      name: "Michael Johnson",
      relationship: "Friend",
      dob: "03/03/1995",
      status: "Active",
    },
    {
      id: 4,
      name: "Emily Davis",
      relationship: "Cousin",
      dob: "04/04/1993",
      status: "Active",
    },
    {
      id: 5,
      name: "James Wilson",
      relationship: "Uncle",
      dob: "05/05/1985",
      status: "Inactive",
    },
    {
      id: 6,
      name: "Linda Taylor",
      relationship: "Aunt",
      dob: "06/06/1980",
      status: "Active",
    },
    {
      id: 7,
      name: "Chris Evans",
      relationship: "Friend",
      dob: "07/07/1988",
      status: "Inactive",
    },
    {
      id: 8,
      name: "Sarah Connor",
      relationship: "Colleague",
      dob: "08/08/1990",
      status: "Active",
    },
    {
      id: 9,
      name: "Mark Smith",
      relationship: "Brother",
      dob: "09/09/1982",
      status: "Active",
    },
    {
      id: 10,
      name: "Lucy Liu",
      relationship: "Sister",
      dob: "10/10/1995",
      status: "Inactive",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const toggleStatus = (id) => {
    setBeneficiaries((prev) =>
      prev.map((beneficiary) =>
        beneficiary.id === id
          ? {
              ...beneficiary,
              status: beneficiary.status === "Active" ? "Inactive" : "Active",
            }
          : beneficiary
      )
    );
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = beneficiaries.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(beneficiaries.length / itemsPerPage);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Col>
      <Col className="d-flex align-items-center justify-content-between my-2">
        <div>
          <span style={{ fontSize: "15px", fontWeight: "500" }}>
            List of Beneficiaries
          </span>
        </div>
        <div className="d-flex gap-4">
          <span
            className="mainColor fw-bold pointer"
            style={{ fontSize: "12px" }}
          >
            Edit
          </span>
          <span
            className="mainColor fw-bold pointer"
            style={{ fontSize: "12px" }}
          >
            Delete
          </span>
        </div>
      </Col>
      <div className="border">
        <Table striped={false} bordered={false} hover={false} responsive>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Relationship</th>
              <th>Date of Birth</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((beneficiary, index) => (
              <tr key={beneficiary.id}>
                <td>
                  <Form.Check type="checkbox" />
                </td>
                <td>{beneficiary.name}</td>
                <td>{beneficiary.relationship}</td>
                <td>{beneficiary.dob}</td>
                <td>
                  <Form.Check
                    type="switch"
                    id={`status-switch-${beneficiary.id}`}
                    label={beneficiary.status}
                    checked={beneficiary.status === "Active"}
                    onChange={() => toggleStatus(beneficiary.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Col
          className="d-flex px-md-5 px-1  justify-content-between align-items-center"
          style={{ height: "30px" }}
        >
          <p className="text-center">
            Page {currentPage} of {totalPages}
          </p>

          <Pagination className="custom-pagination">
            <Pagination.Prev
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <RxDoubleArrowLeft />
            </Pagination.Prev>
            <Pagination.Item
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <MdArrowBackIosNew />
            </Pagination.Item>
            <Pagination.Item
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <MdArrowForwardIos />
            </Pagination.Item>
            <Pagination.Next
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <RxDoubleArrowRight />
            </Pagination.Next>
          </Pagination>
        </Col>
      </div>
    </Col>
  );
};

export default BeneficiaryTable;
