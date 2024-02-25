import styles from './css-modules/TeamCard.module.css';
import Image from 'next/image';

import { TeamInfoType } from '../assets/teamInfo';

const TeamCard = ({
  name,
  profession,
  mobileNumber,
  email,
  image,
}: TeamInfoType) => {
  return (
    <div className={`${styles['team-card']}`}>
      <div className={`${styles['image-info-container']}`}>
        <Image
          className={`${styles['team-member-image']}`}
          src={image}
          alt={name}
        />
        <p className={`${styles['team-member-name']}`}>{name}</p>
        <p>{profession}</p>
      </div>

      <div className={`${styles['info']}`}>
        <p>İletişim Bilgileri</p>
        <div className={`${styles['title-separator']}`} />

        <p>{mobileNumber}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};
export default TeamCard;
