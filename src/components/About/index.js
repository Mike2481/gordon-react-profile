import avatar from '../images/profile3.jpg'

export default function About() {
    return (
        <div className='about-container'>
            <h1 className='about-title'>About Me</h1>
            <img className="profile-pic" src={avatar} alt="Mike Gordon with lobsters" />
            <p className='about-text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
                velit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia nisi
                ac dui fermentum, sed luctus urna tincidunt. Etiam ut feugiat ex. Cras
                non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna imperdiet
                ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras
                rutrum ligula in tincidunt commodo. Morbi sit amet mollis orci, in
                tristique ex. Donec nec ornare elit. Donec blandit est sed risus feugiat
                porttitor. Vestibulum molestie hendrerit massa non consequat. Vestibulum
                vitae lorem tortor. In elementum ultricies tempus. Interdum et malesuada
                fames ac ante ipsum primis in faucibus.
            </p>
        </div>
    );
}