import { footerNav } from '../../assets/ts/navigation';
import SocialIcon from '../../components/SocialIcon/SocialIcon';
import styles from './Footer.module.scss';
import { IonIcons } from 'react-ion-icon';

import logo from '../../assets/images/omnifood-logo.png';
import { useEffect, useState } from 'react';
import contactInfo from '../../assets/ts/contactInfo';

const socialIconNames: IonIcons[] = [
  'logo-facebook',
  'logo-instagram',
  'logo-pinterest',
  'logo-twitter',
];

const Footer = () => {
  const [curYear, setCurYear] = useState<number>(2022);

  // Set the year at the copyright text programatically
  // only the first time after the component is rendered
  useEffect(() => {
    const year = new Date().getFullYear();

    setCurYear(year);
  }, []);

  const SocialIcons = () => {
    return (
      <ul className={styles['social-links']}>
        {socialIconNames.map(iconName => (
          <li key={Math.random()}>
            <a href="#">
              <SocialIcon className={styles['social-icon']} name={iconName} />
            </a>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <footer className={styles['footer']}>
      <div className={`${styles['footer--grid']} container`}>
        {/* Logo Column */}
        <div className={styles['logo-col']}>
          <a href="#">
            <img className={styles['footer-logo']} src={logo} alt="Omnifood logo" />
          </a>

          <SocialIcons />

          {/* Copyright */}
          <p className={styles['copyright']}>
            Copyright © <span className={styles['year']}>{curYear}</span> by Omnifood, Inc. All
            rights reserved.
          </p>
          <br />

          <p className={styles['copyright']}>Design by Jonas Schmedtmann. Coded by Angel Andreev</p>
        </div>

        {/* Company Address */}
        <div className={styles['address-col']}>
          <p className={styles['footer-heading']}>Contact us</p>
          <address className={styles['address']}>
            <p className={styles['address-p']}>{contactInfo.address}</p>

            <p className={styles['contacts']}>
              <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
              <br />
              <a href={`mailto:${contactInfo.phone}`}>{contactInfo.email}</a>
            </p>
          </address>
        </div>

        {/* Nav Menus */}
        {footerNav.length > 0 &&
          footerNav.map(menu => (
            <nav className={styles['footer-nav']} key={Math.random()}>
              <p className={styles['footer-heading']}>{menu.heading}</p>

              {menu.items.length > 0 && (
                <ul className={styles['footer-nav-list']}>
                  {menu.items.map(menuItem => (
                    <li className={styles['footer-link']} key={Math.random()}>
                      <a href={menuItem.url}>{menuItem.title}</a>
                    </li>
                  ))}
                </ul>
              )}
            </nav>
          ))}
      </div>
    </footer>
  );
};

export default Footer;
