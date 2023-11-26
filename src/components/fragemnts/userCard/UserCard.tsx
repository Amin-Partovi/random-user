import { Card } from "components/elements";
import { RandomUserData } from "types";
import styles from "./user-card.module.css";
import useHighlightField from "./useHighlightField";

const UserCard = ({ user }: { user: RandomUserData }) => {
  const {
    name: { first, last },
    picture: { large: largeImg },
    location: { country },
  } = user;

  const highlight = useHighlightField(user);

  return (
    <Card>
      <div className={styles["card-header"]}>
        <h2>
          <span className={highlight.first ? styles.highlight : ""}>
            {first}
          </span>
          &nbsp;
          <span className={highlight.last ? styles.highlight : ""}>{last}</span>
        </h2>

        <span className={highlight.country ? styles.highlight : ""}>
          {country}
        </span>
      </div>

      <div className={styles["card-content"]}>
        <img
          src={largeImg}
          alt={`${first} ${last}`}
          width={300}
          height={300}
          className={`${styles["user-img"]} ${
            highlight.largeImg ? styles["img-highlight"] : ""
          }`}
        />
      </div>
    </Card>
  );
};

export default UserCard;
