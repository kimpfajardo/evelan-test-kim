import Link from "next/link";
import { navigation } from "../../constants/navigation";
import styles from "../../styles/Navigation.module.css";
import { MobileNavigationProps } from "../../types/navigation.types";

const NavigationList = (props: Partial<MobileNavigationProps>) => {
  const { router, handleClick } = props;
  return (
    <>
      {navigation.map((link, index) => (
        <Link
          className={`${styles.nav__item} ${
            router?.pathname === link.url.toLocaleLowerCase()
              ? styles.nav__item__active
              : ""
          }`}
          href={link.url}
          key={index}
          onClick={
            handleClick as unknown as React.MouseEventHandler<HTMLAnchorElement>
          }
          prefetch={false}
        >
          {link.label}
        </Link>
      ))}
    </>
  );
};
export default NavigationList;
