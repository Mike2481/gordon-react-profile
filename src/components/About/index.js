// bring in profile image

import avatar from '../../assets/images/profile3.jpg'
// export jsx
export default function About() {
    return (
        <div className='about-container'>
            <h1 className='about-title'>About Me</h1>
            <div className='animation-box'>
                <div className='pic-animation'>
                    {/* add profile image in from import */}
                    <img className="profile-pic" src={avatar} alt="Mike Gordon with lobsters" />
                </div>
                {/* div class to set animation */}
                <div className='about-animation'>
                    <p className='about-text'>
                        Hi, I'm Mike
                        I'm a driven person by nature and have a strong work ethic. I have high expectations for myself when it comes to the quality of my work, which translates to an amazing finished product for you!
                        Although I do like to code websites from scratch, my real passion is to bring modernity to existing websites through interesting interactive features.
                        Check out some of my work in the Portfolio tab, and please don't hesitate to reach out if you have any questions or want to get your project started
                    </p>
                </div>
            </div>
        </div>
    );
}