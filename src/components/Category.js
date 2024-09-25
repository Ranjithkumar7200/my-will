import React from "react";

const Category = ({
  className,
  bg,
  color,
  header,
  description,
  icon,
  width,
}) => {
  return (
    <div className={className} style={{ backgroundColor: bg, width: width }}>
      <div>{icon}</div>
      <div className="d-flex flex-column" style={{ color: color }}>
        <span style={{ fontSize: "15px", fontWeight: "800" }}>{header}</span>
        <span style={{ fontSize: "12px", fontWeight: "300" }}>
          {description}
        </span>
      </div>
    </div>
  );
};

export default Category;
