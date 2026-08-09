import { Button, Col, Row } from "@core";
import Badge from "@core/components/ui/Badge/Badge";
import type { ProjectType } from "@web/components/Projects/ProjectType";

type ProjectHeaderProps = ProjectType;

export function ProjectHeader({
  badge,
  title,
  subtitle,
  description,
  technologies,
  action,
}: ProjectHeaderProps) {
  return (
    <Col>
      <Row>
        <Badge>{badge}</Badge>
      </Row>
      <h2>{title}</h2>
      <p className="project-subtitle">
        <span>- {subtitle}</span>
      </p>
      <p>{description}</p>
      <Row>
        <Button
          href={action.href}
          className={`btn-${action.variant} btn-${action.size} ${action.weight}`}
        >
          {action.label}
        </Button>
      </Row>
      <Row>
        {technologies.map((technology) => (
          <Badge key={technology}>{technology}</Badge>
        ))}
      </Row>
    </Col>
  );
}
