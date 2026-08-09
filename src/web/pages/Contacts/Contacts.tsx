import Badge from "@core/components/ui/Badge/Badge";
import "../Home/Hero/Hero.css";
import { Col, Grid } from "@core";
import { useTheme } from "@core/hooks/useTheme";
import light from "@web/content/images/developersDay.png";
import dark from "@web/content/images/developersNight.png";
import { ContactItem } from "@core/components/ContactItem";
import { contacts } from "@web/content/contacts";

const Contacts = () => {
  const { theme } = useTheme();

  return (
    <>
      <Badge className="lg m-bottom">
        <div className="badge-dot"></div>Contact
      </Badge>
      <h1>
        Let's <span className="span">connect</span>.
      </h1>

      <Grid columns={2}>
        <Col>
        <p>
          I'm open to new opportunities, collaborations and interesting
          projects.
        </p>
        <p>Feel free to reach out.</p>
        {contacts.map((contact) => (
         <ContactItem 
            key={contact.title}
            title={contact.title}
            href={contact.href}
            label={contact.label}
            icon={contact.icon} />
        ))}
          
        </Col>
        <img
          src={theme === "dark" ? dark : light}
          width={500}
          alt="Developers workspace"
          className="radius"
        />
      </Grid>
    </>
  );
};

export default Contacts;
