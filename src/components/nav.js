import React from 'react'
import { Link } from 'gatsby'
import '../resources/styles/components/nav.scss'

const Nav = () => {
    return (
        <nav>
            <ul id="nav-links">
                <li id="nav-link-item">
                    <Link to="/" id="nav-link-text">
                        Home
                    </Link>
                </li>
                <li id="nav-link-item">
                    <Link to="/about" id="nav-link-text">
                        About
                    </Link>
                </li>
                <li id="nav-link-item">
                    <Link to="/blog" id="nav-link-text">
                        Blog
                    </Link>
                </li>
                <li id="nav-link-item">
                    <Link to="/portfolio" id="nav-link-text">
                        Portfolio
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
