import React from "react";

export const Loader = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="spinner-border customSpinner" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};
