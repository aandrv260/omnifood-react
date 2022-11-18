import styles from './Header.module.scss';
import logo from '../../assets/images/omnifood-logo.png';
import { headerNav } from '../../assets/ts/navigation';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a href="#">
          <img className={styles.logo} src={logo} alt="Logo" />
        </a>

        <ul className={styles['nav__list']}>
          {headerNav.map(menuItem => (
            <li
              className={`${styles['nav__list-item']}${
                menuItem.isCta ? ` ${styles['btn--cta']}` : ''
              }`}
              key={Math.random()}
            >
              <a className={!menuItem.isCta ? styles['nav__list-link'] : ''} href={menuItem.url}>
                {menuItem.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
