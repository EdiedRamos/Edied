import { ROUTE_URLS } from "@/Domain/Constants/urls";

import { ContactCards, IntroduceMyself } from "@/Components/Molecules";

import "./Home.scss";

const Home = () => {
  return (
    <section
      id={ROUTE_URLS.HOME}
      className="home-section home-section__container"
    >
      <div className="home-section__content">
        <div style={{ margin: "1.5rem 0" }}>
          <ContactCards />
        </div>
        <IntroduceMyself />
      </div>
    </section>
  );
};

export default Home;
