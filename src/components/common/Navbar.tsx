import logo from '../../assets/logo.png'
const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="The Truth" style={{ width: "70px", height: "70px", borderRadius: "50%" }} />
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
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <hr className="vr" />
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-3">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/all?category=business"
                >
                  Business
                </a>
              </li>

              <li className="nav-item mx-3">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/all?category=technology"
                >
                  Technology
                </a>
              </li>

              <li className="nav-item mx-3">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/all?category=entertainment"
                >
                  Entertainment
                </a>
              </li>

              <li className="nav-item mx-3">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/all?category=general"
                >
                  General
                </a>
              </li>

              <li className="nav-item mx-3">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/all?category=health"
                >
                  Health
                </a>
              </li>

              <li className="nav-item mx-3">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/all?category=sports"
                >
                  Sports
                </a>
              </li>
              <li className="nav-item mx-3">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/all?category=science"
                >
                  Science
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar