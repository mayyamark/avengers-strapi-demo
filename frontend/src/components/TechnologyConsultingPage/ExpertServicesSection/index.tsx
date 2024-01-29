import Link from "@/components/common/Link";
import styles from "./styles.module.css";
import { getExpertServicesSection } from "@/requests/consultingServices";

const ExpertServicesSection = async () => {
  const { 
    data: { 
      attributes: { 
        title,
        links
      } 
    }
  } = await getExpertServicesSection();

  return (
    <section className={styles['expert-services-section']}>
      <div className={styles['section-container']}>
        <h1 className={styles['section-title']}>
          {title}
        </h1>
        <div className={styles['buttons-container']}>
          {links.map(({ id, href, text }) => (
            <Link key={id} href={href}>{text}</Link>
          ))}
        </div>
      </div>
    </section>
  )
};

export default ExpertServicesSection;