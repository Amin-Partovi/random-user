import React, { ButtonHTMLAttributes } from "react";

import styles from "./button.module.css";
import Spinner from "../spinner/Spinner";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isLoading?: boolean;
}

const Button = ({ children, isLoading = false, ...rest }: ButtonProps) => {
  return (
    <button className={styles.button} {...rest}>
      {isLoading && (
        <div className={styles.loading}>
          <Spinner />
        </div>
      )}

      {children}
    </button>
  );
};

export default Button;
