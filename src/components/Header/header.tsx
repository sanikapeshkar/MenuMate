import styles from "./header.module.scss";

interface HeaderProps {}

export const Header = ({}: HeaderProps) => {
  return (
    <>
      <div className={styles.Header}>
        <h1 className={styles.heading}>MenuMate</h1>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 230">
  <path fill="#000b76" fill-opacity="1" d="M0,160L40,165.3C80,171,160,181,240,165.3C320,149,400,107,480,122.7C560,139,640,213,720,208C800,203,880,117,960,106.7C1040,96,1120,160,1200,186.7C1280,213,1360,203,1400,197.3L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
</svg>
    </>
  );
};
