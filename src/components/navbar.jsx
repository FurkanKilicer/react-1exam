import React from "react";
function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light linear">
      <div className="container">
        <a className="navbar-brand text-warning" href="#">
          DoğaHit
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link text-danger" href="#">
                AnaSayfa <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-info" href="#">
                Haberler
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-dark"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Neler Var?
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item text-warning" href="cin-anime.html">
                  Cansız Varlıklar
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item text-info" href="#">
                  Hayvanlar
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item text-danger" href="#">
                  Doğalar
                </a>
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Doğadaki Her Şey"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Arama Butonu
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
