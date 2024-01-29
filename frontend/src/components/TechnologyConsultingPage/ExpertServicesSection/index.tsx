import Link from "@/components/common/Link";
import styles from "./styles.module.css";

const ExpertServicesSection = () => (
  <section className={styles['expert-services-section']}>
    <div className={styles['section-container']}>
      <h1 className={styles['section-title']}>
        Expert Technology Consulting Services
      </h1>
      <div className={styles['buttons-container']}>
        <Link href='#'>Businnes analysis</Link>
        <Link href='#'>UX design</Link>
        <Link href='#'>Solution architecture</Link>
        <Link href='#'>Technology advisory</Link>
        <Link href='#'>Cyber security</Link>
      </div>
    </div>
  </section>
);

export default ExpertServicesSection;