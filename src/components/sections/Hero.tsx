import { ArrowDown } from 'lucide-react';
import { siteConfig } from '../../data/content';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <p className={styles.greeting}>Hi, my name is</p>
        <h1 className={styles.name}>{siteConfig.name}.</h1>
        <h2 className={styles.tagline}>I build things for the web.</h2>
        <p className={styles.description}>
          I'm a software engineer specializing in building high-quality web
          applications and digital experiences. Currently focused on creating
          accessible, performant products.
        </p>
        <div className={styles.cta}>
          <a href="#projects" className={styles.primaryBtn}>
            View my work
          </a>
          <a href="#contact" className={styles.secondaryBtn}>
            Get in touch
          </a>
        </div>
      </div>
      <a href="#about" className={styles.scrollHint} aria-label="Scroll down">
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
