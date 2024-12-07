import CreateUser from "@/pages/create";
import styles from "../../styles/Header.module.css";

export default function CreateUserForm({ createUserFunction }) {
  return (
    <div className={styles.form}>
      <h2>Create User</h2>
      <form onSubmit={(e) => createUserFunction(e)}>
        <div className={styles.input}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" />
        </div>
        <div className={styles.input}>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
        </div>
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
}
