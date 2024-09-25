import React from "react";

const TextInput = ({ placeholder }) => {
  return (
    <input
      className="text-input px-3 py-1 w-100"
      placeholder={placeholder}
      style={{
        borderRadius: "0px",
        borderColor: "1px solid black",
        backgroundColor: "transparent",
      }}
    />
  );
};

export default TextInput;
