import styles from "../../styles/Error.module.css";
import { ErrorMsgProps } from "../../types/errormsg.types";

const ErrorMsg = (props: ErrorMsgProps) => {
  const { error, onClose } = props;
  if (error === null) {
    return <></>;
  }
  return (
    <div className={styles.container}>
      <span className={styles.error}>{error.message}</span>
      <button
        className={`${styles.error__dismiss} ${styles.error}`}
        onClick={onClose}
      >
        Dismiss
      </button>
    </div>
  );
};

export default ErrorMsg;
