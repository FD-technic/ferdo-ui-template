import Badge from "@core/components/ui/Badge/Badge";
import { technologies } from "./technologies";
import { Row } from "@core";

const Contact = () => {
  return (
    <div className="container">
      <Badge className="lg m-bottom">
        <span className="badge-dot"></span>
        <span className="heading">About me</span>
      </Badge>

      <div className="heading">Hi, I'm Petr.</div>
      <p>
        I'm a junior Java developer focused on backend development with Java and
        Spring Boot. I enjoy building applications that connect a solid backend
        with a practical frontend and real-world data.
      </p>
      <p>
        My main interests are backend development, REST APIs, databases and IoT.
        I also work with React and TypeScript, which helps me understand the
        full application stack and build complete solutions.
      </p>
      <p>
        Currently, I'm continuously improving my development skills through
        personal projects and hands-on learning. I like understanding how things
        work, solving problems step by step, and turning ideas into working
        applications.
      </p>
      <Row>
        <div className="heading m-bottom m-top">I work with:</div>
      </Row>

      {technologies.map((technology) => (
        <Badge key={technology}>{technology}</Badge>
      ))}
    </div>
  );
};

export default Contact;
