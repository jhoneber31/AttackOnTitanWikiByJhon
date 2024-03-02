import { Link, NavLink } from "react-router-dom"
import  aoticon  from "../../assets/img/aoticon.png"

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link
          className="navbar-brand d-lg-none"
          to="/"
        >
          <img src={aoticon} width={50} alt="Wiki attack on titan" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link
            className="navbar-brand d-none d-lg-block"
            to="/"
          >
            <img src={aoticon} width={50} alt="Wiki attack on titan" />
          </Link>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item text-center">
              <NavLink
                className={({isActive}) => `nav-link ${isActive ? 'active':''}`} 
                to="/titans"
              >
                Titans
              </NavLink>
            </li>
            <li className="nav-item text-center">
              <NavLink
                className={({isActive}) => `nav-link ${isActive ? 'active':''}`} 
                to="/humans"
              >
                Humans
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
