function Nav({ currentPage, handlePageChange }) {
    return (
        <header>
            <h1>Mike Gordon</h1>
            <nav className="nav nav-tabs">
                <ul className="nav-links">
                    {/* handlePageChange in App.js run on onClick and renders appropriate view*/}
                    <li>
                        <a
                            href="#about"
                            onClick={() => handlePageChange('About')}
                            // changes the class based on selected link
                            className={currentPage === 'About' ? 'nav-link-active' : 'nav-link'}
                        >
                            About Me
                        </a>
                    </li>
                    <li>
                        <a
                            href="#portfolio"
                            onClick={() => handlePageChange('Portfolio')}
                            // changes the class based on selected link

                            className={currentPage === 'Portfolio' ? 'nav-link-active' : 'nav-link'}
                        >
                            Portfolio
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            onClick={() => handlePageChange('Contact')}
                            // changes the class based on selected link

                            className={currentPage === 'Contact' ? 'nav-link-active' : 'nav-link'}
                        >
                            Contact
                        </a>
                    </li>
                    <li>
                        <a
                            href="#resume"
                            onClick={() => handlePageChange('Resume')}
                            // changes the class based on selected link

                            className={currentPage === 'Resume' ? 'nav-link-active' : 'nav-link'}
                        >
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
export default Nav;
