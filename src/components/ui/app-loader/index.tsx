import * as styles from './app-loader.css';

const AppLoader = () => (
  <div id="root-loading" className={styles.rootLoading}>
    <div className={styles.loadingContainer}>
      <div className={styles.loadingSpinner}></div>
    </div>
  </div>
);

export default AppLoader;
