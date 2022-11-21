import HeadTag from "../HeadTag";
import Navigation from "../Navigation";
import styles from '../../styles/Layout.module.css'
import Title from "../Title";
import { LayoutProps } from "../../types/layout.types";

const Layout = (props: LayoutProps) => {
  const { children, title } = props;
  return (
    <div className={styles.page__container}>
      <HeadTag title={title} />
      <Navigation />
      <Title title={title} />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
