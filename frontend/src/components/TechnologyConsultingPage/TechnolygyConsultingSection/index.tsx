import { getTechnologyConsultingSection } from "@/requests/consultingServices";
import styles from "./styles.module.css";

const TechConsultingSection = async() => {
  const { 
    data: { 
      attributes: { 
        backgroundImage, 
        textSection
      } 
    }
  } = await getTechnologyConsultingSection();

  return (
    <section 
      className={styles['tech-consulting-section']} 
      style={{ 
        backgroundImage: `url(${backgroundImage.src})`
      }}
    >
      <div className={styles['content-container']}>
        <div className={styles['content-wrapper']}>
          <h1 className={styles['section-title']}>
            {textSection.title}
          </h1>
          <p className={styles['section-text']}>
            {textSection.text}
          </p>
        </div>
      </div>
    </section>
  )
};

export default TechConsultingSection;
