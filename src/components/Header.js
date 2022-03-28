import React from 'react';
import Link from 'next/link';
import LogoNetflix from '/src/public/assets/images/netflix-logo.png';

function Header() {
    return(
        <div className="header-main">
            <div className="header-logo">
                <img src={LogoNetflix.src} alt="Netflix" width="150" />
            </div>
            <nav className="header-nav">
                <ul className="nav-list nav-list-left">
                    <li className="nav-item">
                        <Link href="#">
                            <a className="nav-link">Accueil</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="#">
                            <a className="nav-link">Séries</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="#">
                            <a className="nav-link">Films</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="#">
                            <a className="nav-link">Nouveautés les plus regardées</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="#">
                            <a className="nav-link">Ma liste</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="#">
                            <a className="nav-link">Audio et sous-titres</a>
                        </Link>
                    </li>
                </ul>
                <ul className="nav-list nav-list-right">
                <li className="nav-item">
                        <Link href="#">
                            <a className="nav-link">RECHERCHE</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="#">
                            <a className="nav-link">DIRECT</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="#">
                            <a className="nav-link">Jeunesses</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );

}

export default Header;
