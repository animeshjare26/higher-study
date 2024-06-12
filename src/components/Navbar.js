import "./NavbarStyles.css";
import { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
    state = {clicked: false};

    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }
  render() {
    return (
      <nav className="navbarItems">
        <h1 className="navbarLogo">EduPeak</h1>
        <div className="menu-icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to="/" className="nav-links">
              <i className="fa-solid fa-house-user"></i>
              Home
            </Link>
          </li>
          <li>
            <Link to="/About" className="nav-links">
              <i className="fa-solid fa-info-circle"></i>
              About
            </Link>
          </li>
          <li>
            <Link to="/Faq" className="nav-links">
              <i className="fa-solid fa-question-circle"></i>
              FAQ
            </Link>
          </li>
          <li>
            <Link to="/PastSeminar" className="nav-links">
              <i className="fa-solid fa-calendar-alt"></i>
              Past Seminars
            </Link>
          </li>
          <li>
            <Link to="/Register" className="nav-links-mobile">
              <i className="fa-solid fa-sign-in-alt"></i>
              SignUp
            </Link>
          </li>
          <button>Sign Up</button>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
