// import styles from "../../exercise-six/app/page.module.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import LoginForm from "../../components/LoginForm";
export default function Login({ isLoggedIn, loginUserFunction }) {
  const router = useRouter();
  useEffect(() => {
    if (isLoggedIn) router.push("/");
  }, [isLoggedIn]);
  console.log(isLoggedIn);
  return (
    <div>
      <LoginForm loginUserFunction={loginUserFunction} />
    </div>
  );
}
