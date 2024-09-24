import React from "react";
import { Card, Col, Container, Image } from "react-bootstrap";
import emp1 from "../../assets/images/emp1.jfif";
import Circle from "../../components/Circle";
import { barItems } from "../../constants/barItems";
import { FaPlus } from "react-icons/fa";
import AddButton from "../../components/AddButton";
import { IoIosArrowDown } from "react-icons/io";
import ProfileCard from "../../components/ProfileCard";

const Dashboard = () => {
  return (
    <>
      <div className="w-100 bgMain">
        <Container fluid>
          <Col className="bgMain p-2 d-flex flex-column justify-content-center gap-1">
            <span className="text-light" style={{ fontSize: "15px" }}>
              Good morning, Vinoth!
            </span>
            <span className="text-light" style={{ fontSize: "10px" }}>
              Today is September 24,2024
            </span>
          </Col>
        </Container>
      </div>
      <div className="w-100 d-flex flex-lg-row flex-xl-row flex-xxl-row  flex-column mt-3">
        <Col lg={8} md={12} className="my-1 px-1">
          <Card className="px-3 py-2" style={{ borderRadius: 0 }}>
            <Col className="d-flex align-items-center justify-content-between">
              <span style={{ fontSize: "17px", fontWeight: "500" }}>
                My-will
              </span>
              <span style={{ fontSize: "12px" }}>1/3</span>
            </Col>
            <Col className="my-5 d-flex flex-wrap align-items-start justify-content-md-between justify-content-center justify-content-xxl-between justify-content-xl-between justify-content-lg-between gap-2">
              <Col className="position-relative d-flex mr-2 align-items-center justify-content-between gap-5">
                {" "}
                <Image
                  src={emp1}
                  alt="Ethan Will"
                  className="profile-pic bg-secondary position-relative"
                  width={120}
                  height={120}
                  style={{ objectFit: "contain" }}
                />
                <div
                  className="position-absolute d-flex flex-row align-items-center justify-content-center bottom-0"
                  style={{
                    width: "120px",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                  }}
                >
                  <span className="text-light" style={{ fontSize: "12px" }}>
                    ETHAN 'Will'
                  </span>
                </div>
                <Col className="">
                  <h6 className="my-3">Information</h6>
                  <p style={{ fontSize: "10px" }} className="text-nowrap">
                    <span style={{ fontWeight: "bold" }}>D.O.C : </span>
                    04/12/1988
                  </p>
                  <p style={{ fontSize: "10px" }} className="text-nowrap">
                    <span style={{ fontWeight: "bold" }}>STATUS : </span>
                    Complete
                  </p>
                </Col>
              </Col>
              <Col className="d-flex flex-wrap justify-content-center mt-4">
                <Col className="d-flex gap-2 justify-content-center">
                  <div>
                    {" "}
                    <span
                      className="text-secondary"
                      style={{ fontSize: "25px", fontWeight: "bolder" }}
                    >
                      ₹
                    </span>
                  </div>
                  <div className="d-flex flex-column justify-content-center gap-0 ">
                    <span
                      className="text-secondary"
                      style={{ fontSize: "20px", fontWeight: "400" }}
                    >
                      {" "}
                      2.5 Lakhs{" "}
                    </span>
                    <span className="text-success" style={{ fontSize: "10px" }}>
                      Worth of Assets Today
                    </span>
                  </div>
                </Col>
                <Col className="d-flex gap-2 justify-content-center">
                  <div>
                    {" "}
                    <span
                      className="text-secondary"
                      style={{ fontSize: "25px", fontWeight: "bolder" }}
                    >
                      ₹
                    </span>
                  </div>
                  <div className="d-flex flex-column justify-content-center  gap-0 ">
                    <span
                      className="text-secondary"
                      style={{ fontSize: "20px", fontWeight: "400" }}
                    >
                      {" "}
                      2.5 Lakhs{" "}
                    </span>
                    <span className="text-danger" style={{ fontSize: "10px" }}>
                      Worth of Assets Today
                    </span>
                  </div>
                </Col>
              </Col>
            </Col>

            <Col className="d-flex flex-wrap justify-content-between gap-3 align-items-center align-items-xxl-start align-items-xl-start align-items-lg-start align-items-md-start my-4">
              {barItems.map((items, index) => {
                return (
                  <Circle
                    category={items.category}
                    barColor={items.barColor}
                    points={items.points}
                    description={items.description}
                    key={index}
                    description1={items.description1}
                  />
                );
              })}
            </Col>
            <Col className="mt-5 mb-4 d-flex flex-wrap align-items-start justify-content-md-between justify-content-center justify-content-xxl-between justify-content-xl-between justify-content-lg-between">
              <Col className="d-flex mb-3 justify-content-center justify-content-xxl-start justify-content-xl-start justify-content-lg-start justify-content-md-start">
                <AddButton icon={<FaPlus />} text={"ADD NEW"} />
              </Col>
              <Col className="d-flex gap-4   justify-content-xxl-end justify-content-xl-end  justify-content-lg-end justify-content-md-end justify-content-center align-items-center">
                <div className="d-flex flex-column align-items-center pointer justify-content-end">
                  <span
                    className="p-0 m-0"
                    style={{
                      fontSize: "10px",
                      fontWeight: "bold",
                      color: "#ca1c40",
                    }}
                  >
                    Up Next
                  </span>
                  <span className="m-0 p-0">
                    <IoIosArrowDown />
                  </span>
                </div>
                <div className="d-flex justify-content-end align-items-center position-relative">
                  <Image
                    src={emp1}
                    alt="Ethan Will"
                    className="profile-pic bg-secondary"
                    width={50}
                    height={50}
                    style={{ objectFit: "contain" }}
                  />
                  <div
                    className="position-absolute d-flex align-items-center justify-content-center"
                    style={{
                      width: "50px",
                      height: "20px",
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      bottom: "0",
                    }}
                  >
                    <span className="text-light" style={{ fontSize: "4px" }}>
                      ETHAN 'Will'
                    </span>
                  </div>
                </div>
              </Col>
            </Col>
          </Card>
        </Col>
        <Col lg={4} md={12} className="my-1 px-1">
          <Card
            className="px-3 py-2 position-relative"
            style={{
              maxHeight: "77vh",
              overflow: "hidden",
              overflowX: "hidden",
              borderRadius: 0,
            }}
          >
            <Col className="d-flex align-items-center justify-content-between">
              <span style={{ fontSize: "17px", fontWeight: "500" }}>
                Signatory Will
              </span>
              <span style={{ fontSize: "12px" }}>1/4</span>
            </Col>

            <Col className="mt-2">
              {Array.from({ length: 6 }).map((_, index) => (
                <div className="my-2" key={index}>
                  <ProfileCard />
                </div>
              ))}
            </Col>

            <div
              className="d-flex align-items-center justify-content-center position-absolute w-100"
              style={{
                bottom: "0",
                padding: "10px",
                backgroundColor: "white",
              }}
            >
              <AddButton icon={"5"} text={"VIEW INVITATIONS"} />
            </div>
          </Card>
        </Col>
      </div>
    </>
  );
};

export default Dashboard;
