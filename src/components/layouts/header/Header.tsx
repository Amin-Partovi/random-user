import Container from "../container/Container";
import Logo from "assets/images/logo.png";

import styles from "./header.module.css";

const Header = (): React.ReactElement => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles["header-content"]}>
          <img src={Logo} alt="news hub logo" width={150} />
        </div>
      </Container>
    </header>
  );
};

export default Header;
