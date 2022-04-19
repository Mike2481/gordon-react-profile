import ProjectList from "../Project";
// imports the compiled project list

export default function Portfolio() {
    return (
        <div className="container">
            <h1 className="portfolio-title">Things I've Made</h1>
            <div>
                {/* render imported projectList */}
                <ProjectList />


            </div>
        </div>
    );
}