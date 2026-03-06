import { aboutContent } from '../../data/content';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="section__inner">
        <p className="section__label">01. About</p>
        <h2 className="section__title">About Me</h2>
        <div className={styles.content}>
          <div className={styles.text}>
            {aboutContent.paragraphs.map((p, i) => (
              <p key={i} className={styles.paragraph}>
                {p}
              </p>
            ))}
          </div>
          <div className={styles.imageWrapper}>
            <div className={styles.imagePlaceholder}>
              <span>Your photo here</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
