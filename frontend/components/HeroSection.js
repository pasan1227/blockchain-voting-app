import React from "react";

const HeroSection = () => {
  return (
    <section>
      <header style={{ paddingLeft: 0 }}>
        <div
          className="p-5 text-center img-fluid bg-image"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3572&q=80)",
            height: 800,
            backgroundSize: 1800,
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            className="mask p-4"
            style={{
              backgroundColor: "rgba(0,0,0,0.5)",
              position: "relative",
              top: 260,
            }}
          >
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white">
                <h1 className="mb-3">Welcome to B-Vote</h1>
                <h4 className="mb-3">
                  A blockchain-based solution for secure and transparent voting.
                </h4>
                <a
                  className="btn btn-outline-light btn-lg"
                  href="/get-started"
                  role="button"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
};

export default HeroSection;
