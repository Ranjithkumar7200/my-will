import React from "react";
import { Card, Col, Image, Row } from "react-bootstrap";
import emp from "../assets/images/emp1.jfif";

const ProfileCard = () => {
  return (
    <Card className="d-flex py-3 px-5 shadow border-0 flex-row justify-content-center align-items-center">
      <Row className="w-100 d-flex flex-nowrap justify-content-center align-items-center">
        <Col className="d-flex justify-content-center">
          <div className="position-relative">
            <Image
              src={emp}
              alt="Ethan Will"
              className="profile-pic bg-secondary"
              width={90}
              height={90}
              style={{ objectFit: "contain" }}
            />
            <div
              className="position-absolute d-flex flex-row align-items-center justify-content-center bottom-0"
              style={{
                width: "90px",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              }}
            >
              <span className="text-light" style={{ fontSize: "12px" }}>
                ETHAN 'Will'
              </span>
            </div>
          </div>
        </Col>
        <Col className="text-start d-flex flex-column justify-content-center  gap-2">
          <span style={{ fontSize: "10px" }} className="text-nowrap">
            Liam
          </span>
          <span style={{ fontSize: "10px" }} className="text-nowrap">
            Witness
          </span>
          <span style={{ fontSize: "10px" }} className="text-nowrap">
            D.O.C : 04/12/1988
          </span>
          <span style={{ fontSize: "10px" }} className="text-nowrap">
            STATUS : Complete
          </span>
        </Col>
      </Row>
    </Card>
  );
};

export default ProfileCard;
