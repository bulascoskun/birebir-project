import ContactUsForm from './ContactUsForm';
import GoogleMap from './GoogleMap';
import styles from './css-modules/ContactUsHomepage.module.css';

import {
  MdMailOutline,
  MdOutlineLocationOn,
  MdOutlineContactPhone,
} from 'react-icons/md';

const ContactUsHomepage = () => {
  return (
    <section className="homepage-element-container">
      <div className={styles['container']}>
        <div className={`${styles['big-row']}`}>
          {/* İLETİŞİM BİLGİLERİ */}
          <div className={`${styles['contact-info']} ${styles['box']}`}>
            <h3>İletişim Bilgileri</h3>

            <div className={styles['separator']} />

            <div className={styles['row']}>
              <div className={styles['icon-container']}>
                <MdOutlineLocationOn className={styles['icon']} />
              </div>
              <p>
                Çavuş Mahallesi Bayrak Caddesi İdealist Cadde No:7/C Daire:2
                Şile/İstanbul
              </p>
            </div>
            <div className={styles['row']}>
              <div className={styles['icon-container']}>
                <MdOutlineContactPhone className={styles['icon']} />
              </div>
              <p>+90 553 274 47 66</p>
            </div>
            <div className={styles['row']}>
              <div className={styles['icon-container']}>
                <MdOutlineContactPhone className={styles['icon']} />
              </div>
              <p>+90 553 274 47 66</p>
            </div>
            <div className={styles['row']}>
              <div className={styles['icon-container']}>
                <MdMailOutline className={styles['icon']} />
              </div>
              <p>info@birebirmimarlık.com</p>
            </div>
          </div>

          {/* FORM */}
          <ContactUsForm />
        </div>

        {/* GOOGLE MAP */}
        <div className={`${styles['big-row']} ${styles['map-container']}`}>
          <GoogleMap />
        </div>
      </div>
    </section>
  );
};
export default ContactUsHomepage;
