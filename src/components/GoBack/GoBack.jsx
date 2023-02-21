import React from "react";
import { Link, useLocation } from "react-router-dom";

export const GoBack = () => {
 const location = useLocation();

  return (
    <Link
      style={{
        color: "green",
        display: "inline-block",
        padding: "5px 15px",
        backgroundColor: "transparent",
        border: "1px solid green",
        borderRadius: "15px",
      }}
      to={location.state?.from || location}
    >
      GoBack
    </Link>
  );
};
