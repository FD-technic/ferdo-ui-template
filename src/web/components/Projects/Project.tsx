import { Grid, Row, Section } from "@core";
import "./project.css";
import { ProjectHeader } from "./ProjectHeader";
import { Repository } from "./ProjectRepository";
import { ProjectImage } from "./ProjectImage";
import type { ProjectType } from "./ProjectType";

type ProjectProps = {
    content: ProjectType;
}
export function Project({ content }: ProjectProps) {
  
return (
    <Section className="underline">
    <Grid columns={2}>
        <ProjectHeader {...content} />
        
        {content.image && (
            <ProjectImage image = {content.image} />
        )}
    </Grid>
    {content.repositories && (
        <Row>
        <Repository actions={content.repositories} />
        </Row>
    )}
    </Section>
);
}
