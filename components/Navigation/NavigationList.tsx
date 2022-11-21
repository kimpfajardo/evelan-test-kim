import { navigation } from "../../constants/navigation";
import styles from "../../styles/Navigation.module.css";
import { MobileNavigationProps } from "../../types/navigation.types";

const NavigationList = (props: Partial<MobileNavigationProps>) => {
  const { router, handleClick } = props;
  return (
    <>
      {navigation.map((link) => (
        <a
          href={link.url}
          className={`${styles.nav__item} ${
            router?.pathname === link.url.toLocaleLowerCase()
              ? styles.nav__item__active
              : ""
          }`}
          onClick={
            handleClick as unknown as React.MouseEventHandler<HTMLAnchorElement>
          }
        >
          {link.label}
        </a>
      ))}
    </>
  );
};
export default NavigationList;
