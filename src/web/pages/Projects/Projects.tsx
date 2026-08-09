import Badge from "@core/components/ui/Badge/Badge";
import { ProjectArticles } from "../../components/Projects/ProjectArticles";
import { content } from "../../components/Projects/content";

const Projects = () => {
    const projects = content;
    return (
        <>
        <Badge className="lg">
            <div className="badge-dot"></div>
            My projects
        </Badge>
        <ProjectArticles projects={projects} />
        </>
    );
};

export default Projects;