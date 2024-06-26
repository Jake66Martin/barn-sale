import { Link, useLocation } from "react-router-dom";
import './header.css'
import Auth from "../../utils/auth";
import {useQuery} from '@apollo/client'
import { ME } from '../../utils/queries'

export default function Header() {
  const cp = useLocation().pathname;


  /**
   * This function will build the options for when user is logged in and for when they are not. All options are
   * available for anyone that uses the website
   * @returns
   */
  function showOptions() {
    if (Auth.loggedIn()) {
      return (
        <ul className="navbar-nav" id="navScrollspy">
          <li key={1} className="nav-item">
            <Link
              className={`nav-link fs-3 ${cp === "/" ? "active" : ""}`}
              to="/"
            >
              Homepage
            </Link>
          </li>
          <li key={2} className="nav-item">
            <Link
              className={`nav-link fs-3 ${cp === "/About" ? "active" : ""}`}
              to="/About"
            >
              About Us
            </Link>
          </li>
          <li key={3} className="nav-item">
            <Link
              className={`nav-link fs-3 ${cp === "/Browse" ? "active" : ""}`}
              to="/Browse"
            >
              Browse
            </Link>
          </li>
          <li key={4} className="nav-item">
            <Link
              className={`nav-link fs-3 ${cp === "/Contact" ? "active" : ""}`}
              to="/Contact"
            >
              Contact
            </Link>
          </li>
          <li key={5} className="nav-item">
            <a
              className={`nav-link fs-3 ${cp === "/Logout" ? "active" : ""}`}
              href="/"
              onClick={() => Auth.logout()}
            >
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="navbar-nav" id="navScrollspy">
          <li key={1} className="nav-item">
            <Link
              className={`nav-link fs-3 ${cp === "/" ? "active" : ""}`}
              to="/"
            >
              Homepage
            </Link>
          </li>
          <li key={2} className="nav-item">
            <Link
              className={`nav-link fs-3 ${cp === "/About" ? "active" : ""}`}
              to="/About"
            >
              About Us
            </Link>
          </li>
          <li key={3} className="nav-item">
            <Link
              className={`nav-link fs-3 ${cp === "/Browse" ? "active" : ""}`}
              to="/Browse"
            >
              Browse
            </Link>
          </li>
          <li key={4} className="nav-item">
            <Link
              className={`nav-link fs-3 ${cp === "/Contact" ? "active" : ""}`}
              to="/Contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <nav className="navbar bg-danger navbar-dark navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand nav-title" to="/">
          <i className="fa fa-smile-o" aria-hidden="true"></i> <h1 className='font-fam'>Thrift-Barn-Furniture</h1>
        </Link>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          fill="#000000"
          height="80px"
          width="80px"
          version="1.1"
          id="Capa_1"
          viewBox="0 0 458.132 458.132"
          xmlSpace="preserve"
        >
          <g>
            <path d="M456.993,208.997L373.852,75.966c-0.95-1.52-2.413-2.649-4.123-3.184L231.303,29.525c-1.457-0.455-3.018-0.455-4.475,0   L88.403,72.782c-1.71,0.535-3.173,1.664-4.123,3.184L1.139,208.997c-1.054,1.687-1.395,3.724-0.947,5.662s1.646,3.62,3.333,4.673   l27.133,16.953c3.514,2.195,8.14,1.127,10.335-2.385l4.573-7.317v187.365h-16.5c-4.143,0-7.5,3.358-7.5,7.5s3.357,7.5,7.5,7.5h400   c4.143,0,7.5-3.358,7.5-7.5s-3.357-7.5-7.5-7.5h-16.5V226.584l4.573,7.317c1.423,2.276,3.867,3.526,6.367,3.526   c1.357,0,2.731-0.368,3.968-1.141l27.133-16.953c1.687-1.054,2.886-2.735,3.333-4.673S458.047,210.684,456.993,208.997z    M243.734,284.949h74.664l-37.332,51.69L243.734,284.949z M271.815,349.449l-35.249,48.806v-97.611L271.815,349.449z    M221.566,300.643v97.611l-35.249-48.806L221.566,300.643z M177.066,336.639l-37.332-51.69h74.664L177.066,336.639z    M214.398,413.949h-74.664l37.332-51.69L214.398,413.949z M281.066,362.259l37.332,51.69h-74.664L281.066,362.259z    M290.318,349.449l35.249-48.806v97.611L290.318,349.449z M116.566,269.949v-17h225v17H116.566z M167.815,349.449l-35.249,48.806   v-97.611L167.815,349.449z M397.566,413.949h-57v-129h8.5c4.143,0,7.5-3.358,7.5-7.5v-32c0-4.142-3.357-7.5-7.5-7.5h-240   c-4.143,0-7.5,3.358-7.5,7.5v32c0,4.142,3.357,7.5,7.5,7.5h8.5v129h-57V202.585l55.813-89.298l112.687-35.214l112.687,35.214   l55.813,89.298V413.949z M425.885,219.592L353,102.982c-0.949-1.52-2.412-2.649-4.122-3.184L231.303,63.056   c-0.729-0.228-1.483-0.341-2.237-0.341s-1.509,0.114-2.237,0.341L109.255,99.798c-1.71,0.535-3.173,1.664-4.122,3.184   l-72.886,116.61l-14.412-9.005L95.528,86.271l133.538-41.73l133.538,41.73l77.693,124.315L425.885,219.592z" />
            <path d="M269.066,117.949h-80c-4.143,0-7.5,3.358-7.5,7.5v80c0,4.142,3.357,7.5,7.5,7.5h80c4.143,0,7.5-3.358,7.5-7.5v-80   C276.566,121.307,273.209,117.949,269.066,117.949z M196.566,143.556l21.893,21.893l-21.893,21.893V143.556z M207.173,132.949   h43.786l-21.893,21.893L207.173,132.949z M229.066,176.056l21.893,21.893h-43.786L229.066,176.056z M239.673,165.449l21.893-21.893   v43.786L239.673,165.449z" />
          </g>
        </svg>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <div>{showOptions()}</div>
        </div>
      </div>
    </nav>
  );
}
