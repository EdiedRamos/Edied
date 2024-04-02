import { Title } from "@/Components/Atoms";
import { ContactCards } from "@/Components/Molecules";
import { ROUTE_URLS } from "@/Domain/Constants/urls";

const Contact = () => {
  return (
    <section id={ROUTE_URLS.CONTACT}>
      <div className="container" style={{ margin: "4rem auto" }}>
        <article>
          <Title>Contacto</Title>
          <ContactCards />
        </article>
      </div>
    </section>
  );
};

export default Contact;
