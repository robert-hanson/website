import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../../data/content';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <a href="#" className={styles.logo}>
          RH<span className={styles.logoDot}>.</span>
        </a>

        <ul className={styles.links}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={styles.link}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.resumeBtn}
            >
              Resume
            </a>
          </li>
        </ul>

        <button
          className={styles.menuBtn}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <ul className={styles.mobileLinks}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={styles.mobileLink}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.resumeBtn}
              onClick={() => setMobileOpen(false)}
            >
              Resume
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
