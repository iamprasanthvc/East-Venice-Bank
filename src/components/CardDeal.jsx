import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
       Explore better Banking Solution <br className="sm:block hidden" /> in few easy
        steps.
      </h2>
      <p className={`${styles.paragraph2} max-w-[470px] mt-5`}>
        It's time to leave traditional credit cards behind. Our cutting-edge technology and personalized rewards make the future of spending a reality.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
