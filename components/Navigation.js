import Link from "next/link";
import styles from "../styles/Nav.module.css";

function Navigation() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/reflections">Reflections</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
