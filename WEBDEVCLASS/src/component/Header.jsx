import React from "react";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-red">
        <div className="container-fluid">
          <a className="navbar-brand" href="/food">
            Home
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="/food">
                Food
              </a>
              <a className="nav-link" href="/counter">
                Counter
              </a>
              <a className="nav-link" href="/lang">
                Language
              </a>
              <a className="nav-link" href="/usecontext">
                useContext
              </a>
              <a className="nav-link" href="/colors">
                colors
              </a>
              {/* <a className="nav-link" href="/usereducer">
              useReducer
              </a> */}
                <a className="nav-link" href="/usememo">
              UseMemo
              </a>
                <a className="nav-link" href="/usecallback">
              UseCallback
              </a>
                <a className="nav-link" href="/changename">
              ChangeName
              </a>
              <a className="nav-link" href="/Useref">
              Useref
              </a>
              <a className="nav-link" href="/home">
              Home
              </a>

            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
