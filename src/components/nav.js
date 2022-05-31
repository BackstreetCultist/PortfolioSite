import React from 'react'
import { Link } from 'gatsby'
import { navLinks, navLinkItem, navLinkText, navLinkSpan } from '../resources/styles/components/nav.module.scss'

const Nav = () => {
    return (
        <nav>
            <ul className={navLinks}>
                <li className={navLinkItem}>
                    <Link to="/" className={navLinkText}>
                        <span className={navLinkSpan}></span>
                        Home
                    </Link>
                </li>
                <li className={navLinkItem}>
                    <Link to="/about" className={navLinkText}>
                        <span className={navLinkSpan}></span>
                        About
                    </Link>
                </li>
                <li className={navLinkItem}>
                    <Link to="/blog" className={navLinkText}>
                        <span className={navLinkSpan}></span>
                        Blog
                    </Link>
                </li>
                <li className={navLinkItem}>
                    <Link to="/portfolio" className={navLinkText}>
                        <span className={navLinkSpan}></span>
                        Portfolio
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
