import Image from "next/image";
import styles from "../../styles/Users.module.css";
import { UserItemProps } from "../../types/users.types";

const UserItem = (props: UserItemProps) => {
  const { item, key } = props;
  return (
    <div className={styles.card} key={key}>
      <div className={styles.user}>
        <div className={styles.user__avatar}>
          <Image fill src={item.avatar} alt={`Image of ${item.first_name}`} />
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
  );
};

export default UserItem;
