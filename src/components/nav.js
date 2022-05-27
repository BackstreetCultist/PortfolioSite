import React from 'react'
import { Link } from 'gatsby'
import { navLinks, navLinkItem, navLinkText } from '../resources/styles/components/nav.module.scss'

const Nav = () => {
    return (
        <nav>
            <ul className={navLinks}>
                <li className={navLinkItem}>
                    <Link to="/" className={navLinkItem}>
                        Home
                    </Link>
                </li>
                <li className={navLinkItem}>
                    <Link to="/about" className={navLinkItem}>
                        About
                    </Link>
                </li>
                <li className={navLinkItem}>
                    <Link to="/blog" className={navLinkItem}>
                        Blog
                    </Link>
                </li>
                <li className={navLinkItem}>
                    <Link to="/portfolio" className={navLinkItem}>
                        Portfolio
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
