import styles from "../../styles/Header.module.css";
import Link from "next/link";
export default function Header({ isLoggedIn, logoutUserFunction }) {
  return (
    <header className={styles.headerWrapper}>
      <div>
        <div className={styles.title}>
          <h1>Users&Auth</h1>
        </div>
        <nav className={styles.nav}>
          <ul>
            {isLoggedIn && (
              <>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <a onClick={logoutUserFunction} className={styles.logout}>
                    Log Out
                  </a>
                </li>
              </>
            )}
            {!isLoggedIn && (
              <>
                <li>
                  <Link href="/login">Login</Link>
                </li>
                <li>
                  <Link href="/create">Create User</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
