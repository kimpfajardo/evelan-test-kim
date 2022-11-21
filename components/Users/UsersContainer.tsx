import Image from "next/image";
import styles from "../../styles/Users.module.css";
import { User, UsersContainerProps } from "../../types/users.types";

const UsersContainer = (props: UsersContainerProps) => {
  const { users } = props;
  return (
    <div className={styles.container}>
      {users.map((item: User) => {
        return item ? (
          <div className={styles.card}>
            <div className={styles.user}>
              <div className={styles.user__avatar}>
                <Image
                  fill
                  src={item.avatar}
                  alt={`Image of ${item.first_name}`}
                />
              </div>
              <div className={styles.user__details}>
                <h2 className={styles.user__name}>
                  {`
                  ${item.first_name} 
                  ${item.last_name}`}
                </h2>
                <div className={styles.user__email}>{item.email}</div>
                <span className={styles.user__id}>{item.id}</span>
              </div>
            </div>
          </div>
        ) : (
          ""
        );
      })}
    </div>
  );
};

export default UsersContainer;
