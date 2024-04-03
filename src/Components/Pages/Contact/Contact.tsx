import { Title } from "@/Components/Atoms";
import { ContactCards } from "@/Components/Molecules";
import { ROUTE_URLS } from "@/Domain/Constants/urls";

const Contact = () => {
  return (
    <section id={ROUTE_URLS.CONTACT}>
      <div
        className="container"
        style={{ paddingBottom: "4rem", paddingTop: "4rem" }}
      >
        <article>
          <Title>Contacto</Title>
          <ContactCards />
        </article>
      </div>
    </section>
  );
};

export default Contact;
