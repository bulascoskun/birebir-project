import styles from './css-modules/AboutHomepage.module.css';

const AboutHomepage = () => {
  return (
    <section className="homepage-element-container">
      <div className={`${styles['about-homepage-aligner']}`}>
        {/* MİSYONUMUZ */}
        <div className={`${styles['flex-start']}`}>
          <div className={`${styles['about-info-container']}`}>
            <div className={`${styles['about-title-container']}`}>
              <h1>Misyonumuz</h1>
              <div className={`${styles['title-separator']}`} />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              sodales, felis a ornare tempor, quam nulla ullamcorper ligula,
              vitae feugiat sapien nibh vitae enim. In hac habitasse platea
              dictumst. Curabitur sit amet lorem ipsum. Quisque fringilla nibh
              ante, vitae semper nulla dictum ac. Morbi varius consequat nisi,
              quis molestie mauris scelerisque eu. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia curae; Ut
              accumsan nisi ac mi tempus suscipit.
            </p>
          </div>
        </div>

        {/* VİZYONUMUZ */}
        <div className={`${styles['flex-end']}`}>
          <div className={`${styles['about-info-container']}`}>
            <div className={`${styles['about-title-container']}`}>
              <h1>Vizyonumuz</h1>
              <div className={`${styles['title-separator']}`} />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              sodales, felis a ornare tempor, quam nulla ullamcorper ligula,
              vitae feugiat sapien nibh vitae enim. In hac habitasse platea
              dictumst. Curabitur sit amet lorem ipsum. Quisque fringilla nibh
              ante, vitae semper nulla dictum ac. Morbi varius consequat nisi,
              quis molestie mauris scelerisque eu. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia curae; Ut
              accumsan nisi ac mi tempus suscipit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutHomepage;
