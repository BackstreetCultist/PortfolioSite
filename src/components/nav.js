import React from 'react'
import { Link } from 'gatsby'
import { navLinks, navLinkItem, navLinkText } from '../resources/styles/components/nav.module.scss'

const Nav = () => {
    return (
        <nav>
            <ul className={navLinks}>
                <li className={navLinkItem}>
                    <Link to="/" className={navLinkText}>
                        Home
                    </Link>
                </li>
                <li className={navLinkItem}>
                    <Link to="/about" className={navLinkText}>
                        About
                    </Link>
                </li>
                <li className={navLinkItem}>
                    <Link to="/blog" className={navLinkText}>
                        Blog
                    </Link>
                </li>
                <li className={navLinkItem}>
                    <Link to="/portfolio" className={navLinkText}>
                        Portfolio
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
