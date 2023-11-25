import React from "react";
import { Container } from "components/layouts";

import ExternalLinks from "./components/ExternalLinks";

import styles from "./footer.module.css";

const Footer = (): React.ReactElement => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles["footer-content"]}>
          <ExternalLinks />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
