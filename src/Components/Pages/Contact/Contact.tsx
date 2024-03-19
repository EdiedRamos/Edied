import { ROUTE_URLS } from "@/Domain/Constants/urls";
import { Title } from "@/Components/Atoms";
import { ContactCards, MyCv } from "@/Components/Molecules";

const Contact = () => {
  return (
    <section id={ROUTE_URLS.CONTACT}>
      <div className="container" style={{ marginTop: "4rem" }}>
        <article>
          <Title>Contacto</Title>
          <ContactCards />
        </article>
        <MyCv />
      </div>
    </section>
  );
};

export default Contact;
