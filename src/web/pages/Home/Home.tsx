import { Container, Col, Row, Section, Grid } from "@core/layout";
import { Card } from "@core/components";
import { Hero } from "./Hero/Hero";

import lightStack from "@web/images/stackLight.png";
import darkStack from "@web/images/stackDark.png";
import backend from "@web/images/backend.png";
import frontend from "@web/images/frontend.png";
import iot from "@web/images/IoT.png";
import tools from "@web/images/tools.png";
import { useTheme } from "@core/hooks/useTheme";

const Home = () => {
  const { theme } = useTheme();
  return (
    <>
      <Section id="hero">
        <Grid columns={2}>
          <Hero />
          
          <img 
            src={theme === "dark" ? darkStack : lightStack}
            width={500}
            alt="Architecture"
            className="radius"
          />
            
          
        </Grid>
      </Section>
      <Section id="cards">
        <Col className="align-start row-gap">
          <h3>What I do</h3>
          <Container>
            <Grid columns={4} gap={"md"}>
              <Card title="Backend">
                <Row>
                  <img src={backend} height={60} />
                  <ul>
                    <li>Spring Boot</li>
                    <li>REST API</li>
                    <li>JPA / Hibernate</li>
                    <li>PostgreSQL</li>
                  </ul>
                </Row>
              </Card>
              <Card title="Frontend">
                <Row>
                  <img src={frontend} height={60} />
                  <ul>
                    <li>React</li>
                    <li>TypeScript</li>
                    <li>Vite</li>
                    <li>Responsive UI</li>
                  </ul>
                </Row>
              </Card>
              <Card title="IoT">
                <Row>
                  <img src={iot} height={60} />
                  <ul>
                    <li>ESP32</li>
                    <li>Arduino</li>
                    <li>MQTT</li>
                    <li>Sensors</li>
                  </ul>
                </Row>
              </Card>
              <Card title="Tools">
                <Row>
                  <img src={tools} height={60} />
                  <ul>
                    <li>Git</li>
                    <li>Linux</li>
                    <li>Docker</li>
                    <li>Nginx</li>
                  </ul>
                </Row>
              </Card>
            </Grid>
          </Container>
        </Col>
      </Section>
    </>
  );
};

export default Home;
