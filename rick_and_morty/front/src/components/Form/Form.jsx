import { useState } from "react";
import validation from "./validation";
import styles from "./Form.module.css";

const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validation({
        ...userData,
        [event.target.value]: event.target.value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.form}>
        {/* <label htmlFor="username"  className={styles.labels}>User</label> */}
        <input
          name="username"
          type="text"
          onChange={handleInputChange}
          value={userData.username}
          className={styles.input}
          placeholder="user"
        />
        {errors.username && <p className={styles.error}>{errors.username}</p>}
        <br></br>
        {/* <label htmlFor="password" className={styles.labels}>Password</label> */}
        <input
          name="password"
          type="password"
          onChange={handleInputChange}
          value={userData.password}
          className={styles.input}
          placeholder="password"
        />
        {errors.password && <p className={styles.error}>{errors.password}</p>}
        <button type="submit" className={styles.botoncito}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Form;
