import { useState } from "react";
import styles from "./style";
import {
  Navbar,
  Billing,
  Button,
  Business,
  Carddeal,
  Client,
  GetStarted,
  Cta,
  Footer,
  Hero,
  Testomonials,
} from "./compemt";
import Stats from "./compemt/Stats";

const App = () => {
  return (
    <>
      <div className=" bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

        <div className={`${`bg-primary`} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>

        <div
          className={`${`bg-primary`} ${styles.paddingX} ${styles.flexStart}`}
        >
          <div className={`${styles.boxWidth}`}>
            <Stats />
            <Business />
            <Billing />
            <Carddeal />
            <Testomonials />
            <Cta />
            <Footer />
            Stats Businnes Caredeal testmoinal clients cta footer
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
