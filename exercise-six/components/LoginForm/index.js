import styles from "../../styles/Header.module.css";
export default function LoginForm({ loginUserFunction }) {
  return (
    <div className={styles.form}>
      <h2>Login</h2>
      <form
        className={StyleSheet.formWrapper}
        onSubmit={(e) => loginUserFunction(e)}
      >
        <div className={styles.input}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" />
        </div>
        <div className={styles.input}>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
