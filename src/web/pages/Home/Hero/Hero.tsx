import "./Hero.css";
import { Button } from "@core/components";
import letter from "@assets/icons/email.png";
import arrow from "@assets/icons/arrow-right.png";
import { Row, Section, Col, Grid } from "@core/layout";
import Badge from "@core/components/ui/Badge/Badge";

export function Hero() {
  return (
    <Section>
      <Col className="hero">
        <Col className="hero-content">
          <div>
            <Badge className="lg"><div className="badge-dot"></div>Hi, I'm Petr</Badge>
          </div>
          <div>
            <h2>I build <span className="span">web applications</span>,<span className="span"> APIs</span> and <span className="span">IoT</span> solutions.</h2>
          </div>
          <div>Junior Java developer focused on backend development with Spring Boot. I build modern web applications, REST APIs and IoT solutions while continuously expanding my full-stack skills.</div>
          <Grid
            columns={2}
            gap="sm"
          >
            <Button href="/projects" className="btn btn-md btn-accent text-b">
              <Row className="gap">
                View Projects<img src={arrow} height={25} alt="Letter" />
              </Row>
            </Button>
            <Button href="/contacts" className="btn btn-md text-a btn-border-primary">
              <Row className="gap">
                Contact Me<img src={letter} height={25} alt="Letter" />
              </Row>
            </Button>
          </Grid>
        </Col>
      </Col>
    </Section>
  );
}
