import { Mail } from 'lucide-react';
import { siteConfig } from '../../data/content';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className={styles.inner}>
        <p className="section__label">05. Contact</p>
        <h2 className={styles.title}>Get In Touch</h2>
        <p className={styles.description}>
          I'm currently open to new opportunities and always happy to connect.
          Whether you have a question, a project idea, or just want to say hi,
          feel free to reach out.
        </p>
        <a href={`mailto:${siteConfig.email}`} className={styles.btn}>
          <Mail size={18} />
          Say Hello
        </a>
      </div>
    </section>
  );
}
