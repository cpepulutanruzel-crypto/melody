function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg position-absolute top-0 start-0 w-100 z-3">
      <div className="container-fluid px-4 px-lg-5">

        <a className="navbar-brand text-white fw-bold" href="#home">
          HOUSE
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav gap-lg-4">

            <li className="nav-item">
              <a className="nav-link text-white" href="#home">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-white" href="#about">
                About
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-white" href="#gallery">
                Gallery
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-white" href="#features">
                Features
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-white" href="#contact">
                Contact
              </a>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;