import { Link, useMatches } from "react-router";
import styles from "@/components/task2/breadcrumbs/Breadcrumbs.module.css";

function Breadcrumbs() {
  const matches = useMatches();

  return (
    <div className={styles.container}>
      {matches.map((match) => (
        <Link to={match.pathname} key={match.id}>
          {match?.handle?.title}
        </Link>
      ))}
    </div>
  );
}

export default Breadcrumbs;
