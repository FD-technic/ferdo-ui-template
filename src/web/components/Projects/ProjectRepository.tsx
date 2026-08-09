import { Button, Col } from "@core";
import type { Action } from "./ProjectType";

type RepositoryProps = {
  actions: Action[];
};

export function Repository({ actions }: RepositoryProps) {
  return (
    <Col>
      <span>Repositories:</span>
      {actions.map(( action ) => (
        <Button
          key={action.href}
          href={action.href}
          className={`btn-${action.size} btn-${action.variant} ${action.weight}`}
        >
          {action.label}
        </Button>
      ))}
    </Col>
  );
}
