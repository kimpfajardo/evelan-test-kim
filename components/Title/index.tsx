import { TitleProps } from "../../types/title.types";
import styles from "../../styles/Layout.module.css";

const Title = (props: TitleProps) => {
  const { title } = props;
  return (
    <div>
      <h1 className={styles.page__title}>{title}</h1>
      <div className={styles.centered}>
        <hr className={styles.v_divider} />
      </div>
    </div>
  );
};
export default Title;
