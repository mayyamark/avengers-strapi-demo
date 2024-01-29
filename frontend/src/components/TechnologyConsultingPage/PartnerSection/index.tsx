import { getPartnerSection } from "@/requests/consultingServices";
import styles from "./styles.module.css";

const PartnerSection = async () => {
  const { 
    data: { 
      attributes: { 
        textSection,
        items
      } 
    }
  } = await getPartnerSection();

  return (
    <section>
      <div className={styles['section-container']}>
        <div className={styles['text-container']}>
          <h2 className={styles['section-title']}>
            {textSection.title}
          </h2>
          <p className={styles['section-text']}>
            {textSection.text}
          </p>
        </div>
        <div className={styles['list-container']}>
          <ul>
            {items.map(({ id, title }) => (
              <li key={id} className={styles['list-item']}>
                {title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
};

export default PartnerSection;
