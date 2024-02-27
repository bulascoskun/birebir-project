'use client';

import Image from 'next/image';
import styles from './css-modules/PortfolioHomepage.module.css';

import portfolioImage2 from '../assets/images/portfolio-2.jpg';
import portfolioImage3 from '../assets/images/portfolio-3.jpg';
import portfolioImage4 from '../assets/images/portfolio-4.jpg';

import { portfolioArray } from '@/assets/portfolio';
import ProjectModal from './ProjectModal';
import { useState } from 'react';

const PortfolioHomepage = () => {
  const { id, title, info, img } = portfolioArray[0]; // DINAMIK YAPILACAK

  /* MODAL */
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const handleImageClick = (id: number) => {
    setSelectedImage(id);
  };
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="homepage-element-container">
      {selectedImage && (
        <ProjectModal selectedImage={selectedImage} closeModal={closeModal} />
      )}

      {/* NORMAL DISPLAY */}
      <div className={`${styles['portfolio-homepage']}`}>
        {/* DISPLAY 1 */}
        <div
          className={`${styles['portfolio-display']} ${styles['portfolio-display-1']}`}
        >
          <Image
            src={img}
            alt={title}
            className={`${styles['portfolio-display-1-left']} ${styles['portfolio-display-image']}`}
            priority
          />
          <div className={styles['portfolio-display-1-right']}>
            <div
              className={`${styles['portfolio-display-1-right-text']} ${styles['portfolio-display-text']}`}
            >
              <h2>{title}</h2>
              <p>{info}</p>
              <div
                className={styles['see-all']}
                onClick={() => handleImageClick(1)}
              >
                Tümünü gör
              </div>
            </div>
          </div>
        </div>

        {/* DISPLAY 2 */}
        <div
          className={`${styles['portfolio-display']} ${styles['portfolio-display-2']}`}
        >
          <div className={styles['portfolio-display-2-top']}>
            <div
              className={`${styles['portfolio-display-2-top-text']} ${styles['portfolio-display-text']}`}
            >
              <h2>{title}</h2>
              <p>{info}</p>
              <span
                className={styles['see-all']}
                onClick={() => handleImageClick(2)}
              >
                Tümünü gör
              </span>
            </div>
          </div>
          <div className={`${styles['portfolio-display-2-bottom-container']}`}>
            <Image
              src={portfolioImage2}
              alt="Birebir Mimarlık"
              className={`${styles['portfolio-display-2-bottom']} ${styles['portfolio-display-image']}`}
              priority
            />
          </div>
        </div>

        {/* DISPLAY 3 (REVERSE 1) */}
        <div
          className={`${styles['portfolio-display']} ${styles['portfolio-display-1']}`}
        >
          <Image
            src={portfolioImage3}
            alt="Birebir Mimarlık"
            className={`${styles['portfolio-display-1-left']} ${styles['portfolio-display-image']}`}
            priority
          />
          <div className={styles['portfolio-display-1-right']}>
            <div
              className={`${styles['portfolio-display-1-right-text']} ${styles['portfolio-display-text']}`}
            >
              <h2>{title}</h2>
              <p>{info}</p>
              <span
                className={styles['see-all']}
                onClick={() => handleImageClick(3)}
              >
                Tümünü gör
              </span>
            </div>
          </div>
        </div>

        {/* DISPLAY 4 (2) */}
        <div
          className={`${styles['portfolio-display']} ${styles['portfolio-display-2']}`}
        >
          <div className={styles['portfolio-display-2-top']}>
            <div
              className={`${styles['portfolio-display-2-top-text']} ${styles['portfolio-display-text']}`}
            >
              <h2>{title}</h2>
              <p>{info}</p>
              <span
                className={styles['see-all']}
                onClick={() => handleImageClick(4)}
              >
                Tümünü gör
              </span>
            </div>
          </div>
          <div className={`${styles['portfolio-display-2-bottom-container']}`}>
            <Image
              src={portfolioImage4}
              alt="Birebir Mimarlık"
              className={`${styles['portfolio-display-2-bottom']} ${styles['portfolio-display-image']}`}
              priority
            />
          </div>
        </div>
      </div>

      {/* SMALL DISPLAY */}
      <div className={`${styles['portfolio-small']}`}>
        <Image
          src={img}
          alt={title}
          className={`${styles['portfolio-small-image']}`}
          onClick={() => handleImageClick(1)}
          priority
        />
        <Image
          src={portfolioImage2}
          alt={title}
          className={`${styles['portfolio-small-image']}`}
          onClick={() => handleImageClick(2)}
          priority
        />
        <Image
          src={portfolioImage3}
          alt={title}
          className={`${styles['portfolio-small-image']}`}
          onClick={() => handleImageClick(3)}
          priority
        />
        <Image
          src={portfolioImage4}
          alt={title}
          className={`${styles['portfolio-small-image']}`}
          onClick={() => handleImageClick(4)}
          priority
        />
      </div>
    </section>
  );
};
export default PortfolioHomepage;
