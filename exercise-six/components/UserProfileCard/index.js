import styles from "../../styles/Header.module.css";
export default function UserProfileCard({ userInformation }) {
  return (
    <div className={styles.userProfile}>
      <h2>User Profile</h2>
      <div className={styles.userEmail}>
        <p>Email:{userInformation?.email}</p>
      </div>
    </div>
  );
}
