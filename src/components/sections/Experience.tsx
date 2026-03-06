import { Briefcase } from 'lucide-react';
import { experiences } from '../../data/content';
import styles from './Experience.module.css';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section__inner">
        <p className="section__label">02. Experience</p>
        <h2 className="section__title">Where I've Worked</h2>
        <div className={styles.timeline}>
          {experiences.map((exp, i) => (
            <div key={i} className={styles.item}>
              <div className={styles.marker}>
                <Briefcase size={16} />
              </div>
              <div className={styles.card}>
                <div className={styles.header}>
                  <h3 className={styles.role}>{exp.role}</h3>
                  <span className={styles.period}>{exp.period}</span>
                </div>
                <p className={styles.company}>{exp.company}</p>
                <p className={styles.description}>{exp.description}</p>
                <ul className={styles.highlights}>
                  {exp.highlights.map((h, j) => (
                    <li key={j}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
