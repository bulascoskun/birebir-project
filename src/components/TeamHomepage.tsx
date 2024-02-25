import { teamInfo } from '../assets/teamInfo';
import TeamCard from './TeamCard';

import styles from './css-modules/TeamHomepage.module.css';

const TeamHomepage = () => {
  return (
    <section className="homepage-element-container">
      <div className={styles['team-cards']}>
        <div className={styles['border-box']} />
        {teamInfo.map((member, i) => {
          return <TeamCard key={i} {...member} />;
        })}
      </div>
    </section>
  );
};
export default TeamHomepage;
