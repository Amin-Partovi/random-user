import { Loader } from "lucide-react";

import styles from "./spinner.module.css";

const Spinner = () => {
  return <Loader className={styles.spinner} />;
};

export default Spinner;
