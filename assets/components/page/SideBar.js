import { NavLink } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import React from "react";
export default function SideBar() {
  return (
    <nav className="left_menu">
      <ul className="left_menu__ul">
        <li className="nav-item">
          <Dropdown>
            <Dropdown.Toggle variant="dark" className="left_menu__dropdown">
              Customers
            </Dropdown.Toggle>

            <Dropdown.Menu className="left_menu__dropdown_menu">
              <NavLink to="/customers" className="left_menu__dropdown--item">
                Customers liste
              </NavLink>
              <NavLink
                to="/new-customers"
                className="left_menu__dropdown--item"
              >
                Nouveau membre
              </NavLink>
            </Dropdown.Menu>
          </Dropdown>
        </li>

        <li className="nav-item">
          <Dropdown>
            <Dropdown.Toggle variant="dark" className="left_menu__dropdown">
              Sessions
            </Dropdown.Toggle>

            <Dropdown.Menu className="left_menu__dropdown_menu">
              <NavLink to="/sessions" className="left_menu__dropdown--item">
                Sessions
              </NavLink>
              <NavLink to="/new-session" className="left_menu__dropdown--item">
                Nouvelle session
              </NavLink>
              <NavLink
                to="/session-places"
                className="left_menu__dropdown--item"
              >
                Place de sessions
              </NavLink>
              <NavLink
                to="/new-session-place"
                className="left_menu__dropdown--item"
              >
                Nouvelle place de session
              </NavLink>
              <NavLink
                to="//session-types"
                className="left_menu__dropdown--item"
              >
                Types de session
              </NavLink>
              <NavLink
                to="/new-session-type"
                className="left_menu__dropdown--item"
              >
                Nouveau type de session
              </NavLink>
            </Dropdown.Menu>
          </Dropdown>
        </li>

        <li className="nav-item">
          <Dropdown>
            <Dropdown.Toggle variant="dark" className="left_menu__dropdown">
              Items
            </Dropdown.Toggle>

            <Dropdown.Menu className="left_menu__dropdown_menu">
              <NavLink to="/items" className="left_menu__dropdown--item">
                Items liste
              </NavLink>
              <NavLink to="/new-item" className="left_menu__dropdown--item">
                Nouveau item
              </NavLink>
            </Dropdown.Menu>
          </Dropdown>
        </li>

        <li className="nav-item">
          <Dropdown>
            <Dropdown.Toggle variant="dark" className="left_menu__dropdown">
              Factures
            </Dropdown.Toggle>

            <Dropdown.Menu className="left_menu__dropdown_menu">
              <NavLink to="/bills" className="left_menu__dropdown--item">
                Liste des Factures
              </NavLink>
              <NavLink
                to="/generate-bill"
                className="left_menu__dropdown--item"
              >
                Generer les factures
              </NavLink>
            </Dropdown.Menu>
          </Dropdown>
        </li>
      </ul>
    </nav>
  );
}
