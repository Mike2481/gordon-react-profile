export default function Resume() {
    return (
        <div className="resume">
            <div className="resume-title"><a className="resume-text" href="https://docs.google.com/document/d/1ExRP1BaHd5kDP3TcExjqH-8sineNliN_GdbHmArjbxk/edit?usp=sharing" target="blank">Download My Resume</a> </div>
            <br></br>
            <div className="proficiencies">
                <h3 className="resume-text">Front-End Proficiencies</h3>
                <ul>
                    <li className="resume-text-li">HTML</li>
                    <li className="resume-text-li">CSS</li>
                    <li className="resume-text-li">JaveScript</li>
                    <li className="resume-text-li">JQuery</li>
                    <li className="resume-text-li">Responsive Design</li>
                    <li className="resume-text-li">React</li>
                    <li className="resume-text-li">Bootstrap</li>
                </ul>
                <h3 className="resume-text">Back-End Proficiencies</h3>
                <ul>
                    <li className="resume-text-li">API's</li>
                    <li className="resume-text-li">Node</li>
                    <li className="resume-text-li">Express</li>
                    <li className="resume-text-li">MySQL, Sequelize</li>
                    <li className="resume-text-li">MongoDB, Mongoose</li>
                    <li className="resume-text-li">REST</li>
                    <li className="resume-text-li">GraphQL</li>
                </ul>
            </div>
        </div>
    );
}