import { skills } from '../../data/content';
import styles from './Skills.module.css';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section__inner">
        <p className="section__label">04. Skills</p>
        <h2 className="section__title">Technologies I Work With</h2>
        <div className={styles.grid}>
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className={styles.category}>
              <h3 className={styles.categoryTitle}>{category}</h3>
              <ul className={styles.list}>
                {items.map((skill) => (
                  <li key={skill} className={styles.item}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
