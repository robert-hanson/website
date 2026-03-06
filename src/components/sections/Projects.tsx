import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../../data/content';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section__inner">
        <p className="section__label">03. Projects</p>
        <h2 className="section__title">Things I've Built</h2>
        <div className={styles.grid}>
          {projects.map((project, i) => (
            <article key={i} className={styles.card}>
              <div className={styles.cardTop}>
                <h3 className={styles.title}>{project.title}</h3>
                <div className={styles.links}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} GitHub`}
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} live site`}
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
              <p className={styles.description}>{project.description}</p>
              <ul className={styles.tags}>
                {project.tags.map((tag) => (
                  <li key={tag} className={styles.tag}>
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
