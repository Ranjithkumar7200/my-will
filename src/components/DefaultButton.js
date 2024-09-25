import React from "react";
import { Button } from "react-bootstrap";

const DefaultButton = ({ bg, text,color ,border}) => {
  return (
    <Button
      className="px-3 py-1"
      style={{
        width: "48%",
        backgroundColor: bg,
        color: color,
        border: `1px solid ${border}`,
        borderRadius: "0px",
      }}
    >
      {text}
    </Button>
  );
};

export default DefaultButton;
