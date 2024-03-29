import styles from './css-modules/Title.module.css';

const Title = ({ title, href }: { title: string; href?: string }) => {
  return (
    <>
      <div className={`${styles['expanded-link']} `} id={href || ''}></div>
      <div className={`${styles['title-container']}`}>
        <h1 className={styles['title-text']}>{title}</h1>
        <div className={styles['title-separator']} />
      </div>
    </>
  );
};
export default Title;
