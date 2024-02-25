import styles from './css-modules/HomepageNavbar.module.css';
import Image from 'next/image';
import heroImage from '../assets/images/homepageheader-image.jpg';

import DefaultNavbar from './DefaultNavbar';

const HomepageNavbar = () => {
  return (
    <section className={styles['homepage-navbar']}>
      <DefaultNavbar display="absolute" />
      <div className={styles['image-wrapper']}>
        <Image
          src={heroImage}
          alt="Birebir Mimarlık"
          className={styles['image-wrapper-image']}
          priority
        />
      </div>
    </section>
  );
};
export default HomepageNavbar;
