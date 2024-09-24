import React from "react";

const AddButton = ({ icon, text }) => {
  return (
    <>
      <span
        className="bg-light shadow d-flex align-items-center pointer justify-content-center px-5 py-2 text-center position-relative"
        style={{
          borderRadius: "25px",
          fontSize: "12px",
          fontWeight: "bold",
          position: "relative",
          paddingLeft: "30px",
          width: "200px",
          textWrap: "nowrap",
        }}
      >
        <span
          className="text-center text-light position-absolute"
          style={{
            backgroundColor: "#ca1c40",
            borderRadius: "50%",
            fontSize: "20px",
            fontWeight: "100",
            width: "35px",
            height: "35px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            left: "0px",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          {icon}
        </span>
        {text}
      </span>
    </>
  );
};

export default AddButton;
