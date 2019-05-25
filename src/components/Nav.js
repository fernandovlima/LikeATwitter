import React from "react"
import { NavLink } from "react-router-dom"

export default function Nav() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink to="/" exact className="active">
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/new" className="active">
            NEW TWEET
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
