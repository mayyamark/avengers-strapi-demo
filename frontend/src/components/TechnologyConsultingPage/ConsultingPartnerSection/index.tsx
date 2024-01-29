import styles from "./styles.module.css";

const ConsultingPartnerSection = () => (
  <section>
    <div className={styles['section-container']}>
      <div className={styles['text-container']}>
        <h2 className={styles['section-title']}>Accedia as your technology consulting partner</h2>
        <p className={styles['section-text']}>
          Accedia is an IT services company, specializing in
          technology consulting services and software development.
          For the past 10 years since its founding, the company
          has become an example of sustainable growth and
          is recognized by long-term clients, business partners,
          as well as international rankings such as Deloitte
          Technology Fast 50  & 500, Financial Times 1000 Europe
          or IAOP’s Global 100 Outsourcing Companies. 
          Our Software Consultants combine extensive industry 
          knowledge with technical proficiency and excel at contextualizing
          client challenges within strategic business objectives. 
        </p>
      </div>
      <div className={styles['list-container']}>
        <ul>
          <li className={styles['list-item']}>
            A highly skilled team of 250+ consultants with
            diverse expertise deliver proven solutions across industries.
          </li>
          <li className={styles['list-item']}>
            AWS and Microsoft partnerships enhance solution quality and versatility.
          </li>
          <li className={styles['list-item']}>
            Agile principles enable quick adaptation, ensuring on-time, flexible solutions.
          </li>
          <li className={styles['list-item']}>
            Certified for Quality Management (ISO 9001:2015),
            Information Security Management (ISO/IEC 27001:2013),
            and Environmental Management (ISO 14001:2015).
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default ConsultingPartnerSection;
