import { Card } from "components/elements";
import { RandomUserData } from "types";
import styles from "./user-card.module.css";

const UserCard = ({ user }: { user: RandomUserData }) => {
  const {
    name: { first, last },
    picture: { large: largeImg },
    location: { country },
  } = user;

  return (
    <Card>
      <div className={styles["card-header"]}>
        <h2>
          {first} {last}
        </h2>
        <span>{country}</span>
      </div>
      <img
        src={largeImg}
        alt={`${first} ${last}`}
        width={300}
        height={300}
        className={styles["user-img"]}
      />
    </Card>
  );
};

export default UserCard;
