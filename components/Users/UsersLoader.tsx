import Button from "../Button";
import styles from "../../styles/Users.module.css";
import { UsersLoaderProps } from "../../types/users.types";

const UsersLoader = (props: UsersLoaderProps) => {
  const { setError, setPage, isLoadable, page } = props;
  return (
    <div className={styles.container__btn}>
      <Button
        text="Load more"
        onClick={() => {
          setError(null);
          setPage(page + 1);
        }}
        disabled={!isLoadable}
      />
    </div>
  );
};

export default UsersLoader;
