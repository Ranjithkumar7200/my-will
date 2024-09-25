import React from "react";
import { Col, Image } from "react-bootstrap";
import emp1 from "../../assets/images/emp1.jfif";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { categoryItems } from "../../constants/categoryItems";
import Category from "../../components/Category";
import BeneficiaryTable from "./BeneficiaryTable";
import AddBeneficiaryForm from "./forms/AddBeneficiaryForm";

const Beneficiaries = () => {
  const navigate = useNavigate();

  return (
    <>
      <Col className="d-flex flex-lg-row  flex-column">
        <Col
          xs={12}
          md={1}
          className="bgMain px-1 d-lg-flex flex-column  d-none align-items-center justify-content-between"
          style={{
            height: "calc(100vh - 72px)",
            width: "150px",
            marginRight: "15px",
          }}
        >
          <div>
            <div className="position-relative mt-5 d-flex justify-content-center">
              <Image
                src={emp1}
                alt="Ethan Will"
                className="profile-pic bg-secondary"
                width={100}
                height={100}
                style={{ objectFit: "contain" }}
              />
              <div
                className="position-absolute d-flex flex-row align-items-center justify-content-center bottom-0"
                style={{
                  width: "100px",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                }}
              >
                <span className="text-light" style={{ fontSize: "12px" }}>
                  ETHAN 'Will'
                </span>
              </div>
            </div>
            <div className="text-center mt-5">
              <p
                style={{ fontSize: "10px" }}
                className="text-nowrap d-flex align-items-center justify-content-around  text-light"
              >
                <span style={{ fontWeight: "bold" }}>D.O.C</span>
                <span style={{ fontWeight: "bold" }}> : </span>
                <span>04/12/1988</span>
              </p>
              <p
                style={{ fontSize: "10px" }}
                className="text-nowrap d-flex align-items-center justify-content-around  text-light"
              >
                <span style={{ fontWeight: "bold" }}>STATUS</span>
                <span style={{ fontWeight: "bold" }}> : </span>
                <span>Complete</span>
              </p>
            </div>
          </div>
          <div
            className="mb-4 d-flex align-items-center justify-content-center gap-2 pointer"
            onClick={() => navigate("/")}
          >
            <IoIosArrowBack color="white" size={15} />
            <span
              style={{ fontSize: "15px" }}
              className="text-nowrap text-light"
            >
              Back Home
            </span>
          </div>
        </Col>
        <Col className="bgMain px-1 d-lg-none flex-column d-flex align-items-center justify-content-between">
          <div>
            <div className="position-relative mt-5 d-flex justify-content-center">
              <Image
                src={emp1}
                alt="Ethan Will"
                className="profile-pic bg-secondary"
                width={100}
                height={100}
                style={{ objectFit: "contain" }}
              />
              <div
                className="position-absolute d-flex flex-row align-items-center justify-content-center bottom-0"
                style={{
                  width: "100px",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                }}
              >
                <span className="text-light" style={{ fontSize: "12px" }}>
                  ETHAN 'Will'
                </span>
              </div>
            </div>
            <div className="text-center mt-5">
              <p
                style={{ fontSize: "10px" }}
                className="text-nowrap d-flex align-items-center justify-content-around  text-light"
              >
                <span style={{ fontWeight: "bold" }}>D.O.C</span>
                <span style={{ fontWeight: "bold" }}> : </span>
                <span>04/12/1988</span>
              </p>
              <p
                style={{ fontSize: "10px" }}
                className="text-nowrap d-flex align-items-center justify-content-around  text-light"
              >
                <span style={{ fontWeight: "bold" }}>STATUS</span>
                <span style={{ fontWeight: "bold" }}> : </span>
                <span>Complete</span>
              </p>
            </div>
          </div>
          <div
            className="mb-4 d-flex align-items-center justify-content-center gap-2 pointer"
            onClick={() => navigate("/")}
          >
            <IoIosArrowBack color="white" size={15} />
            <span
              style={{ fontSize: "15px" }}
              className="text-nowrap text-light"
            >
              Back Home
            </span>
          </div>
        </Col>

        <Col className="bg-light">
          <Col className="d-none d-lg-flex  flex-md-nowrap flex-wrap">
            {categoryItems.map((items, index) => (
              <Category
                className={
                  "d-flex flex-nowrap w-100   px-4 px-md-0 align-items-center m-2 m-md-0 py-2 justify-content-center gap-2 border"
                }
                bg={items.bg}
                color={items.color}
                icon={items.icon}
                description={items.description}
                header={items.header}
                key={index}
                count={items.count}
                badgeColor={"white"}
              />
            ))}
          </Col>
          <Col className="d-flex d-lg-none  px-3 px-lg-0 flex-lg-nowrap flex-wrap justify-content-center justify-content-md-start">
            {categoryItems.map((items, index) => (
              <Category
                className={
                  "d-flex flex-nowrap w-100  px-5 px-lg-0 align-items-center m-2 m-lg-0 py-2 justify-content-center gap-2 border"
                }
                bg={items.bg}
                color={items.color}
                icon={items.icon}
                description={items.description}
                header={items.header}
                key={index}
                count={items.count}
                badgeColor={"white"}
              />
            ))}
          </Col>
          <Col className="d-flex flex-wrap">
            <Col xs={12} lg={8} className="px-lg-0 px-4">
              <BeneficiaryTable />
            </Col>
            <Col className="px-lg-0 px-4 py-lg-0 py-4" xs={12} lg={4}>
              <AddBeneficiaryForm />
            </Col>
          </Col>
        </Col>
      </Col>
    </>
  );
};

export default Beneficiaries;
