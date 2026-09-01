function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg position-absolute top-0 start-0 w-100 z-3">

      <div className="container">

        {/* Logo */}
        <a className="navbar-brand text-white fw-semibold" href="#home">
          HOUSE
        </a>


        {/* Mobile button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>


        {/* Navigation */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="mainNavbar"
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
              <a className="nav-link text-white" href="#features">
                Features
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-white" href="#gallery">
                Gallery
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