import { IntroduceMyself, SkillCards } from "../../Molecules";

import { ROUTE_URLS } from "../../../Domain/Constants/urls";

import "./Home.scss";

const Home = () => {
  return (
    <section id={ROUTE_URLS.HOME} className="home">
      <IntroduceMyself />
      <SkillCards />
    </section>
  );
};

export default Home;
