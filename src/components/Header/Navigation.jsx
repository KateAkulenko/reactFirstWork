import styles from './navigation.module.css';

function Navigation() {
  return (
    <nav>
      <div>
        <ul className={styles.n_list} role="list">
          <li role="item">
            <a href="#" className={styles.nav_link}>
              <div className={styles.nav_circle}>
              </div>
              <span>ABOUT US</span>
            </a>
          </li>
          <li role="item">
            <a href="#" className={styles.nav_link}>
              <div className={styles.nav_circle}>
              </div>
              <span>PROJECTS</span>
            </a>
          </li>
          <li role="item">
            <a href="#" className={styles.nav_link}>
              <div className={styles.nav_circle}>
              </div>
              <span>NEWS</span>
            </a>
          </li>
          <li role="item">
            <a href="#" className={styles.nav_link}>
              <div className={styles.nav_circle}>
              </div>
              <span>CONTACT</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
