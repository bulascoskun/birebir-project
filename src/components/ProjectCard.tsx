import Image, { StaticImageData } from 'next/image';

import styles from './css-modules/ProjectCard.module.css';

const ProjectCard = ({
  title,
  img,
}: {
  title: string;
  img: StaticImageData;
}) => {
  return <Image className={styles.image} alt={title} src={img} />;
};
export default ProjectCard;
