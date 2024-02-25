'use client';

import Image from 'next/image';
import styles from './css-modules/ProjectModal.module.css';
import { portfolioArray } from '@/assets/portfolio';

import { FaTimes } from 'react-icons/fa';

const ProjectModal = ({
  closeModal,
  selectedImage,
}: {
  closeModal: () => void;
  selectedImage: number;
}) => {
  const { title, info, img } = portfolioArray[selectedImage - 1];

  return (
    <div className={styles['modal-screen']} onClick={closeModal}>
      <div
        className={styles['modal-content']}
        onClick={(e) => e.stopPropagation()}
      >
        <FaTimes className={styles.icon} onClick={closeModal} />

        <Image src={img} alt={title} className={styles['modal-image']} />
        <div className={styles['modal-info']}>
          <h2>{title}</h2>
          <p>{info}</p>
        </div>
      </div>
    </div>
  );
};
export default ProjectModal;
