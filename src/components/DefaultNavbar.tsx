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
  MdMenu,
} from 'react-icons/md';
import { LiaTimesSolid } from 'react-icons/lia';

import { useEffect, useState } from 'react';

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
});

const DefaultNavbar = ({ display }: { display?: 'absolute' }) => {
  const pathname = usePathname();

  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const handleHamburgerClick = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  return (
    <section className="homepage-element-container">
      {/* HAMBURGER MENU */}
      <div
        className={`${styles['hamburger-menu']} ${
          isHamburgerOpen ? styles['hamburger-menu-active'] : ''
        }`}
      >
        <div className={styles['hamburger-menu-title']}>
          Menu
          <LiaTimesSolid onClick={handleHamburgerClick} />
        </div>
        <ul className={styles['hamburger-links']}>
          <li>
            <Link
              onClick={handleHamburgerClick}
              href="/"
              className={`${styles['hamburger-links-link']}`}
            >
              <MdOutlineHome className={styles['hamburger-icon']} />
              Anasayfa
            </Link>
          </li>
          <li>
            <Link
              onClick={handleHamburgerClick}
              href="/hakkimizda"
              className={`${styles['hamburger-links-link']}`}
            >
              <MdSort className={styles['hamburger-icon']} />
              Hakkımızda
            </Link>
          </li>
          <li>
            <Link
              onClick={handleHamburgerClick}
              href="/projeler"
              className={styles['hamburger-links-link']}
            >
              <MdOutlineVilla className={styles['hamburger-icon']} />
              Projeler
            </Link>
          </li>
          <li>
            <a
              onClick={handleHamburgerClick}
              href="/#iletisim"
              className={styles['hamburger-links-link']}
            >
              <MdOutlineLocalPhone className={styles['hamburger-icon']} />
              İletişim
            </a>
          </li>
        </ul>
      </div>

      {/* ACTUAL NAVBAR */}
      <nav
        className={`${styles['navbar-container']} ${styles['navbar-container-absolute']} ${styles['navbar-container-sticky']}`}
      >
        <MdMenu
          className={styles['menu-icon']}
          onClick={handleHamburgerClick}
        />
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
            <Link
              href="/hakkimizda"
              className={`${styles['navbar-links-link']}`}
            >
              <MdSort className={styles['icon']} />
              Hakkımızda
            </Link>
            <div
              className={`${
                pathname === '/hakkimizda' ? styles['navlink-underline'] : ''
              }`}
            />
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
