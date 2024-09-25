import React from "react";
import TextInput from "../../../components/TextInput";
import { Col } from "react-bootstrap";
import DefaultButton from "../../../components/DefaultButton";

const AddBeneficiaryForm = () => {
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-between p-4"
      style={{ backgroundColor: "#ededed" }}
    >
      <p
        className="text-center"
        style={{
          fontSize: "18px",
          fontWeight: "400",
          display: "inline-block",
          position: "relative",
        }}
      >
        Add New Beneficiary
        <span
          style={{
            content: '""',
            display: "block",
            height: "1px",
            backgroundColor: "black",
            width: "100%",
            position: "absolute",
            bottom: "-5px",
            left: "0",
          }}
        />
      </p>

      <Col className="w-100">
        <span>Personal Information</span>

        <div className="mb-4">
          <TextInput placeholder={"Title*"} />
        </div>

        <div className="mb-4">
          <TextInput placeholder={"First Name*    Middle Name   Last Name"} />
        </div>

        <div className="mb-4">
          <TextInput placeholder={"Gender*"} />
        </div>

        <div className="mb-4">
          <TextInput placeholder={"Date of Birth*"} />
        </div>

        <div className="mb-4">
          <TextInput placeholder={"Religion*"} />
        </div>

        <div className="mb-4">
          <TextInput placeholder={"Father Name*"} />
        </div>

        <div className="mb-4">
          <TextInput placeholder={"Mother Name*"} />
        </div>

        <div className="d-flex justify-content-between w-100 mt-4">
          <DefaultButton
            bg={"#fff"}
            text={"Cancel"}
            color={"black"}
            border={"black"}
          />

          <DefaultButton
            bg={"#2b6cb3"}
            text={"Update"}
            color={"#fff"}
            border={"#2b6cb3"}
          />
        </div>
      </Col>
    </div>
  );
};

export default AddBeneficiaryForm;
