'use client';

import { portfolioArray } from '@/assets/portfolio';
import ProjectCard from '@/components/ProjectCard';
import ProjectModal from '@/components/ProjectModal';
import styles from './css-modules/PortfolioGallery.module.css';

import { useState } from 'react';

const PortfolioGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handleImageClick = (id: number) => {
    setSelectedImage(id);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="homepage-element-container">
      <div className={`${styles['portfolio-grid']}`}>
        {portfolioArray.map(({ title, img, id }) => {
          return (
            <div key={id} onClick={() => handleImageClick(id)}>
              <ProjectCard title={title} img={img} />
            </div>
          );
        })}
      </div>
      {selectedImage && (
        <ProjectModal selectedImage={selectedImage} closeModal={closeModal} />
      )}
    </section>
  );
};
export default PortfolioGallery;
