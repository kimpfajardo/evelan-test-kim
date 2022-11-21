import styles from "../../styles/Button.module.css";
import { ButtonProps } from "../../types/button.types";

const Button = (props: ButtonProps) => {
  const { className, text = "Submit", ...rest } = props;
  return (
    <button className={`${className} ${styles.button}`} {...rest}>
      {text}
    </button>
  );
};

export default Button;
