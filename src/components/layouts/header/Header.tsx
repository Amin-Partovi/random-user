import { TEXTS } from "consts";
import Container from "../container/Container";

import styles from "./header.module.css";

const Header = (): React.ReactElement => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles["header-content"]}>
          <h1>{TEXTS.RANDOM_USER}</h1>
        </div>
      </Container>
    </header>
  );
};

export default Header;
