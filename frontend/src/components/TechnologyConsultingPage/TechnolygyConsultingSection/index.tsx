import styles from "./styles.module.css";

const TechConsultingSection = () => (
  <section className={styles['tech-consulting-section']}>
    <div className={styles['content-container']}>
      <div className={styles['content-wrapper']}>
        <h1 className={styles['section-title']}>Technology consulting</h1>
        <p className={styles['section-text']}>
          Explore technology consulting services that
          open doors to a wealth of industry experience,
          cutting-edge ideas, and a wide array of skills. 
          Whether you’re building a new product or revisiting 
          your legacy systems, harnessing the power of expert 
          guidance guarantees your project success.
        </p>
      </div>
    </div>
  </section>
);

export default TechConsultingSection;
