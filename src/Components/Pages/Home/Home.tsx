import "./Home.scss";

import { IntroduceMyself } from "@/Components/Molecules";
import { ROUTE_URLS } from "@/Domain/Constants/urls";

const Home = () => {
  return (
    <section
      id={ROUTE_URLS.HOME}
      className="home-section home-section__container"
    >
      <div className="home-section__content">
        <IntroduceMyself />
      </div>
    </section>
  );
};

export default Home;
