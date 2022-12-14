import { useRouter } from "next/router";
import styles from "../../styles/Navigation.module.css";
import { useState } from "react";
import MobileNavigation from "./MobileNavigation";
import NavigationList from "./NavigationList";

const Navigation = () => {
  const router = useRouter();
  const [showMobileNav, setShowMobileNav] = useState(false);
  const handleClick = () => {
    setShowMobileNav(false);
  };

  return (
    <div>
      <nav className={styles.nav__mobile}>
        <MobileNavigation
          visible={showMobileNav}
          toggle={setShowMobileNav}
          handleClick={handleClick}
          router={router}
        />
      </nav>
      <nav className={styles.nav}>
        <NavigationList handleClick={handleClick} router={router} />
      </nav>
    </div>
  );
};

export default Navigation;
