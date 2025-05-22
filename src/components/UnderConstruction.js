// src/components/UnderConstruction.js
import React from "react";

const UnderConstruction = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Website Under Construction</h1>
      <p style={styles.message}>
        - - - - - - - -I'm working on something awesome! Please check back soon.
      </p>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffcc00",
    color: "#333",
    padding: "10px 0",
    width: "100%",
    position: "fixed",
    bottom: "50px",
    left: 0,
    zIndex: 1000, // Ensure it's above other content
  },
  header: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    margin: 0,
  },
  message: {
    fontSize: "1rem",
    margin: 0,
  },
};

export default UnderConstruction;
