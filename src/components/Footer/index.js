import logo from '../../assets/images/mike-gordon-logo.jpg'

function Footer() {
    return (
        <div className='bottom'>
            <div>
                <img className='logo' src={logo} alt="brand logo"></img>
            </div>
            <div className='social'>
                <a className="link" href="https://www.linkedin.com/in/mike-gordon-a34832b0" target="blank" ><i className="fab fa-linkedin"></i></a>
                <a className="link" href="https://twitter.com/ducttapeandWD?ref_src=twsrc%5Etfw" target="blank"><i className="fab fa-twitter-square"></i></a>
                <a className="link" href="https://github.com/Mike2481" target="blank"><i class="fab fa-github-square"></i></a>
            </div>
        </div>
    )
}

export default Footer;