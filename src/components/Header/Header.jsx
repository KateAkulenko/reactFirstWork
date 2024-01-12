import styles from './Header.module.css';
import base from './../../styles/base.module.css';
import cn from 'classnames';
import Logo from './Logo';
import Navigation from './Navigation';
import Social from './Social';

function Header() {
  return (
    <header className={styles.header}>
      <div className={cn([base.wrapper, styles.wrapper_header])}>
        <Logo />
        <Navigation />
        <Social />
      </div>
    </header>
  );
}

export default Header;
