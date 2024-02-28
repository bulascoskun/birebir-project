import Link from 'next/link';
import styles from './css-modules/Footer.module.css';
import {
  MdMailOutline,
  MdOutlineContactPhone,
  MdOutlineLocationOn,
} from 'react-icons/md';

const Footer = () => {
  return (
    <section className="homepage-element-container">
      <div className={styles['container']}>
        <div className={styles['row']}>
          <div className={styles['info-container']}>
            <h3>Birebir Mimarlık</h3>
            <div className={styles['separator']} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              sodales, felis a ornare tempor, quam nulla ullamcorper ligula,
              vitae feugiat sapien nibh vitae enim. In hac habitasse platea
              dictumst. Curabitur sit amet lorem ipsum. Quisque fringilla nibh
              ante, vitae semper nulla dictum ac. Morbi varius.
            </p>
          </div>
          <div className={styles['info-container']}>
            <h3>Sayfalar</h3>
            <div className={styles['separator']} />

            <div className={styles['nav-links']}>
              <li>
                <Link href="/">Anasayfa</Link>
              </li>
              <li>
                <Link href="/hakkimizda">Hakkımızda</Link>
              </li>
              <li>
                <Link href="/projeler">Projeler</Link>
              </li>
              <li>
                <a href="/#iletisim">İletişim</a>
              </li>
            </div>
          </div>
          <div className={styles['info-container']}>
            <h3>İletişim</h3>
            <div className={styles['separator']} />

            <div className={styles['contact-row']}>
              <div className={styles['icon-container']}>
                <MdOutlineLocationOn className={styles['icon']} />
              </div>
              <a href="https://www.google.com/maps" target="_blank">
                Şile/İstanbul
              </a>
            </div>

            <div className={styles['contact-row']}>
              <div className={styles['icon-container']}>
                <MdOutlineContactPhone className={styles['icon']} />
              </div>
              <a href="https://web.whatsapp.com/" target="_blank">
                +90 553 274 47 66
              </a>
            </div>

            <div className={styles['contact-row']}>
              <div className={styles['icon-container']}>
                <MdMailOutline className={styles['icon']} />
              </div>
              <a href="mailto:info@birebirmimarlık.com">
                info@birebirmimarlık.com
              </a>
            </div>
          </div>
        </div>

        <div className={styles['copyright']}>
          © 2024 Birebir Mimarlık. Tüm hakları saklıdır.
        </div>
      </div>
    </section>
  );
};
export default Footer;
