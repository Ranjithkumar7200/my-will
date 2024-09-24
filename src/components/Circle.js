import React from "react";

const Circle = ({ points, category, description, barColor, description1 }) => {
  return (
    <>
      {" "}
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div style={styles.container}>
          <svg viewBox="0 0 200 200" style={styles.circle}>
            <circle
              cx="100"
              cy="100"
              r="90"
              fill="none"
              stroke={barColor}
              strokeWidth="8"
            />
          </svg>
          <div style={styles.centerText}>{points}</div>
          <div style={styles.bottomText}>{category}</div>
        </div>

        <span className="text-center" style={styles.description}>
          {description}
        </span>
        <span className="text-center" style={styles.description}>
          {description1}
        </span>
      </div>
    </>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "80px",
    height: "80px",
    position: "relative",
  },
  circle: {
    width: "100%",
    height: "100%",
  },
  centerText: {
    position: "absolute",
    fontSize: "20px",
    fontWeight: "bold",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "black",
  },
  bottomText: {
    position: "absolute",
    fontSize: "8px",
    bottom: "0%",
    padding: "5px",
    backgroundColor: "white",
    color: "black",
  },
  description: {
    fontSize: "10px",
  },
};

export default Circle;
