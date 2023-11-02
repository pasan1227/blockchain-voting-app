import React from "react";

const ErrorComponent = () => {
  return (
    <div className="container text-center mt-5">
      <h2 className="text-danger">Error: 404 - Page not found</h2>
      <p className="text-muted">
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  );
};

export default ErrorComponent;
