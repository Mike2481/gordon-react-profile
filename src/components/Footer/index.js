import logo from '../../assets/images/mike-gordon-logo.jpg'
// import logo for use in footer

function Footer() {
    return (
        <div className='bottom'>
            <div>
                {/* use imported logo */}
                <img className='logo' src={logo} alt="brand logo"></img>
            </div>
            <div className='social'>
                {/* set links with icons */}
                <a className="link" href="https://www.linkedin.com/in/mike-gordon-a34832b0" target="blank" ><i className="fab fa-linkedin"></i></a>
                <a className="link" href="https://twitter.com/ducttapeandWD?ref_src=twsrc%5Etfw" target="blank"><i className="fab fa-twitter-square"></i></a>
                <a className="link" href="https://github.com/Mike2481" target="blank"><i className="fab fa-github-square"></i></a>
            </div>
        </div>
    )
}

export default Footer;