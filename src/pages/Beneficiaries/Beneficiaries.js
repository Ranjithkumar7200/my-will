import React from "react";
import { Col, Image } from "react-bootstrap";
import emp1 from "../../assets/images/emp1.jfif";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { categoryItems } from "../../constants/categoryItems";
import Category from "../../components/Category";
import BeneficiaryTable from "./BeneficiaryTable";

const Beneficiaries = () => {
  const navigate = useNavigate();

  return (
    <>
      <Col className="d-flex flex-md-row  flex-column">
        <Col
          xs={12}
          md={1}
          className="bgMain px-1 d-md-flex flex-column  d-none align-items-center justify-content-between"
          style={{ height: "calc(100vh - 72px)", width: "150px",marginRight:"15px" }}
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
        <Col className="bgMain px-1 d-md-none flex-column d-flex align-items-center justify-content-between">
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
              />
            ))}
          </Col>
          <Col className="d-flex d-lg-none  flex-lg-nowrap flex-wrap justify-content-center justify-content-md-start">
            {categoryItems.map((items, index) => (
              <Category
                className={
                  "d-flex flex-nowrap  px-5 px-lg-0 align-items-center m-2 m-lg-0 py-2 justify-content-center gap-2 border"
                }
                bg={items.bg}
                color={items.color}
                icon={items.icon}
                description={items.description}
                header={items.header}
                key={index}
              />
            ))}
          </Col>
          <Col>
            <Col className="px-md-0 px-4">
              <BeneficiaryTable />
            </Col>
            <Col></Col>
          </Col>
        </Col>
      </Col>
    </>
  );
};

export default Beneficiaries;

// <Table striped bordered hover responsive="md">
//             <thead>
//               <tr>
//                 <th>#</th>
//                 <th>Name</th>
//                 <th>Relationship</th>
//                 <th>Date of Birth</th>
//                 <th>Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {beneficiaries.map((beneficiary, index) => (
//                 <tr key={beneficiary.id}>
//                   <td>{index + 1}</td>
//                   <td>{beneficiary.name}</td>
//                   <td>{beneficiary.relationship}</td>
//                   <td>{beneficiary.dob}</td>
//                   <td>
//                     <Form.Check
//                       type="switch"
//                       id={`status-switch-${beneficiary.id}`}
//                       label={
//                         beneficiary.status === "Active" ? "Active" : "Inactive"
//                       }
//                       checked={beneficiary.status === "Active"}
//                       onChange={() => {
//                         const newStatus =
//                           beneficiary.status === "Active"
//                             ? "Inactive"
//                             : "Active";
//                         setBeneficiaries((prev) =>
//                           prev.map((b) =>
//                             b.id === beneficiary.id
//                               ? { ...b, status: newStatus }
//                               : b
//                           )
//                         );
//                       }}
//                     />
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
