import styles from "../../styles/Users.module.css";
import { User, UsersContainerProps } from "../../types/users.types";
import dynamic from "next/dynamic";

const UserItem = dynamic(() => import("./UserItem"));

const UsersContainer = (props: UsersContainerProps) => {
  const { users } = props;
  return (
    <div className={styles.container}>
      {users.map((item: User, index: number) => {
        return item ? <UserItem item={item} key={index} /> : "";
      })}
    </div>
  );
};

export default UsersContainer;
