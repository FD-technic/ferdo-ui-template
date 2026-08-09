import type { ProjectType } from "./ProjectType";
import { Project } from "./Project";

type ProjectsArticleProps = {
    projects: ProjectType[];
}

export function ProjectArticles({ projects }: ProjectsArticleProps) {

    return (
        <>
        {projects.map((project) => (
            <Project
                key={project.title}
                content={project}
            /> 
        ))}
        </>
    );
};
