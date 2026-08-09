import "./ContactItem.css";
import "@core/styles/typography.css";

import { Col, Container, Row } from "@core/layout";

type ContactItemProps = {
    title: string;
    href?: string;
    label: string;
    icon: string;
}

export function ContactItem({ title, href = "", label,  icon }: ContactItemProps) {
  return (
    <Container className="contact-card">
      <Row className="center">
        <img src={icon} alt="" className="contact-icon"></img>
        <Col>
          <span className="contact-title">{title}</span>
          {href && (
            <a href={href} className="contact-link">
                {label ?? href}
            </a>
          )}
        </Col>
      </Row>
    </Container>
  );
}
