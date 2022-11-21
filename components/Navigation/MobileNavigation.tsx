import { MobileNavigationProps } from "../../types/navigation.types";
import styles from "../../styles/Navigation.module.css";
import Image from "next/image";
import NavigationList from "./NavigationList";

const MobileNavigation = (props: MobileNavigationProps) => {
  const { visible, toggle, handleClick, router } = props;
  return (
    <>
      <button
        className={styles.nav__mobile__btn}
        onClick={() => toggle(!visible)}
      >
        <Image height={30} width={30} src={"/img/menu.svg"} alt="Open Menu" />
      </button>
      <div
        className={`${styles.nav__mobile__menu} ${
          visible ? styles.nav__mobile__show : ""
        }`}
      >
        <button
          className={styles.nav__mobile__btn}
          onClick={() => toggle(!visible)}
        >
          <Image
            style={{ filter: "invert()" }}
            height={30}
            width={30}
            src={"/img/x.svg"}
            alt="Open Menu"
          />
        </button>
        <div className={styles.nav__mobile__list}>
          <NavigationList handleClick={handleClick} router={router} />
        </div>
      </div>
    </>
  );
};

export default MobileNavigation;
