import styles from '../../styles/NotFound.module.css'

const Index = () => {
    return (
      <div className={styles.container}>
        <div>
          <h2 className={styles.code}>4 0 4</h2>
          <h2 className={styles.description}>Not Found</h2>
          <hr />
          <p className={styles.message}>
            The page you requested does not exist.
          </p>
        </div>
      </div>
    );
}

export default Index