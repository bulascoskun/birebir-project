'use client';
import Image from 'next/image';
import Link from 'next/link';

import styles from './css-modules/DefaultNavbar.module.css';
import logoImage from '../assets/images/birebir-logo.jpg';
import { usePathname } from 'next/navigation';
import { Lexend } from 'next/font/google';

// icons
import {
  MdOutlineHome,
  MdSort,
  MdOutlineVilla,
  MdOutlineLocalPhone,
  MdOutlineMessage,
} from 'react-icons/md';

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
});

const DefaultNavbar = ({ display }: { display?: 'absolute' }) => {
  const pathname = usePathname();

  const navbarContainerClass = () => {
    if (display === 'absolute') {
      return styles['navbar-container-absolute'];
    }
    return '';
  };

  return (
    <section className="homepage-element-container">
      <nav
        className={`${styles['navbar-container']} ${navbarContainerClass()}`}
      >
        <Link className={styles['logo-container']} href="/">
          <Image
            src={logoImage}
            alt="Birebir Logo"
            className={styles['navbar-logo']}
          />
        </Link>
        <ul className={styles['navbar-links']}>
          <li>
            <Link href="/" className={`${styles['navbar-links-link']}`}>
              <MdOutlineHome className={styles['icon']} />
              Anasayfa
            </Link>
            <div
              className={`${
                pathname === '/' ? styles['navlink-underline'] : ''
              }`}
            />
          </li>
          <li>
            <a href="/#hakkimizda" className={styles['navbar-links-link']}>
              <MdSort className={styles['icon']} />
              Hakkımızda
            </a>
          </li>
          <li>
            <Link href="/projeler" className={styles['navbar-links-link']}>
              <MdOutlineVilla className={styles['icon']} />
              Projeler
            </Link>
            <div
              className={`${
                pathname === '/projeler' ? styles['navlink-underline'] : ''
              }`}
            />
          </li>
          <li>
            <a href="/#iletisim" className={styles['navbar-links-link']}>
              <MdOutlineLocalPhone className={styles['icon']} />
              İletişim
            </a>
          </li>
        </ul>
        <button className={`${styles['offer-button']} ${lexend.className}`}>
          <MdOutlineMessage className={styles['offer-icon']} />
          Teklif Verin
        </button>
      </nav>
    </section>
  );
};
export default DefaultNavbar;
