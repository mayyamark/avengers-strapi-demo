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

  /**
   * `links` is a dynamic zone!
   * 
   * Here is how Strapi creators have implemented dynamic zones in the frontend:
   * 1. Render a `BlockManager` component and pass the dynamic zone data
   * https://github.com/strapi/foodadvisor/blob/ceb9ace8a3de04c6dffa9fb6ccb91102305342bc/client/pages/%5B%5B...slug%5D%5D.js#L20
   * 2. Inside `BlockManager` there is a `switch` around the `__component` field. Based on the value, the correct component is rendered
   * https://github.com/strapi/foodadvisor/blob/ceb9ace8a3de04c6dffa9fb6ccb91102305342bc/client/components/shared/BlockManager/index.js#L60
   * 
   * Weird, but makes sense!
   */
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