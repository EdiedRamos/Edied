import { IntroduceMyself, SkillCards } from "../../Molecules";

import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <IntroduceMyself />
      <SkillCards />
    </div>
  );
};

export default Home;
