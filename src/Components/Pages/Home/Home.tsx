import { ROUTE_URLS } from "@/Domain/Constants/urls";

import { ContactCards, IntroduceMyself } from "@/Components/Molecules";

import "./Home.scss";

const Home = () => {
  return (
    <section id={ROUTE_URLS.HOME} className="home-section">
      <ContactCards />
      <IntroduceMyself />
    </section>
  );
};

export default Home;
