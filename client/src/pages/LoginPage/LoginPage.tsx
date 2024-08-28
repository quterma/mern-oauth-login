import React from "react";
import styles from "./LoginPage.module.css";

const LoginPage: React.FC = () => {
  const handleLogin = (provider: string) => {
    window.location.href = `http://localhost:5000/auth/${provider}`;
  };

  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <button className={styles.button} onClick={() => handleLogin("google")}>
        Login with Google
      </button>
      <button className={styles.button} onClick={() => handleLogin("github")}>
        Login with GitHub
      </button>
    </div>
  );
};

export default LoginPage;
