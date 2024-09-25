import React from "react";

const Category = ({
  className,
  bg,
  color,
  header,
  description,
  icon,
  width,
  count,
  badgeColor,
}) => {
  return (
    <div
      className={className}
      style={{ backgroundColor: bg, width: width, position: "relative" }}
    >
      <div>{icon}</div>
      <div className="d-flex flex-column" style={{ color: color }}>
        <span style={{ fontSize: "15px", fontWeight: "800" }}>{header}</span>
        <span style={{ fontSize: "12px", fontWeight: "300" }}>
          {description}
        </span>
      </div>
      {count > 0 && (
        <span
          style={{
            position: "absolute",
            top: "5px",
            right: "5px",
            backgroundColor: badgeColor,
            color: "#2b6cb3",
            borderRadius: "50%",
            width: "20px",
            height: "20px",
            textAlign: "center",
            fontSize: "12px",
            fontWeight: "bold",
          }}
        >
          {count}
        </span>
      )}
    </div>
  );
};

export default Category;
