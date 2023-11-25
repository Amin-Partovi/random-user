import { Button } from "components/elements";
import { UserCard } from "components/fragemnts";
import { useFetchRandomUser } from "hooks";

import styles from "./home.module.css";
import { TEXTS } from "consts";

const Home = () => {
  const { refetch, data, isLoading } = useFetchRandomUser();

  if (!data) {
    return <></>;
  }

  return (
    <div className={styles.content}>
      <UserCard user={data} />
      <Button isLoading={isLoading} onClick={refetch}>
        {TEXTS.FETCH_RANDOM_USER}
      </Button>
    </div>
  );
};

export default Home;
