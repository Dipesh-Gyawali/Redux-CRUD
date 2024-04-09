import "./_home.scss";
import { Counter } from "./counter";

export const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="content-container">
          <h1>Unified one solution any device</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
            autem nobis veniam! Consequuntur, adipisci iure! Ipsum omnis cumque
            consectetur perspiciatis illum rerum, aliquid id culpa. Mollitia
            impedit officiis dicta veritatis.
          </p>
          <button>Get Started Free</button>
        </div>

        <div className="img-container">
          {/* <img src="../../src/assets/groupImage.jpg" alt="group" /> */}
        </div>

        <Counter />
      </div>
    </>
  );
};
