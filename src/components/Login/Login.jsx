import React, { useState } from "react";
import { images } from "../../constants";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import "./Login.scss";
import { useSelector } from "react-redux";


const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const store = useSelector((state) => state);

  const [focused, setFocused] = useState(false);

  const [show, setShow] = useState(false);

  const showBtn = () => {
    setShow((prevState) => !prevState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleFocus = (e) => {
    setFocused(true);
  };

  const Submit = (e) => {
    let error = document.querySelector(".errorenter");
    const checkName = store.find((store) => store.name === name);
    const checkPass = store.find((store) => store.password === password);

    if (checkName && checkPass) {
      console.log("true");
    } else {
      e.preventDefault();
      error.style.display = "block";
    }
  };

  return (
    <main className="login">
      <div className="login__content">
        <div className="login__box">
          <div className="login__box-left">
            <img src={images.login} alt="girl" />
          </div>
          <div className="login__box-right">
            <img src={images.loginLogo} className="login__logo" alt="logo" />
            <form className="login__form" onSubmit={handleSubmit}>
              <div className="field">
                <span className="login__form-span">Логин</span>
                <input
                  type="text"
                  className="login__form-input"
                  placeholder="Логин"
                  autoComplete="off"
                  name="username"
                  onChange={(e) => setName(e.target.value)}
                  onBlur={handleFocus}
                  focused={focused.toString()}
                  pattern="^[A-Za-z0-9]{5,20}$"
                  value={name}
                  required
                />
                <span className="error">
                  Username should be 5-20 characters and shouldn't include any
                  special character!
                </span>
              </div>
              <span className="errorenter">login va parol xato</span>
              <div className="field">
                <span className="login__form-span">Парол</span>
                <input
                  type={show ? "text" : "password"}
                  className="login__form-input"
                  placeholder="Парол"
                  autoComplete="off"
                  name="password"
                  pattern="^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+]{8,20}"
                  onChange={(e) => setPassword(e.target.value)}
                  focused={focused.toString()}
                  value={password}
                  required
                />
                <span className="error">
                  Password should be 8-20 characters and include at least 1
                  letter, 1 number and 1 special character!
                </span>
                <button className="eye" onClick={showBtn}>
                  {show ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </button>
              </div>
              <div className="field">
                <a href="/" className="login__form-forgotten">
                  Забыли пароль?
                </a>
                <a
                  // type="submit"
                  href="/about"
                  onClick={(e) => Submit(e)}
                  className="login__form-success"
                >
                  Кириш
                </a>
              </div>
            </form>
            <div className="field">
              <div className="login__form-about">
                <p className="login__form-about-text">
                  Безопасность системы осуществлена на базе стандартов
                </p>
                <p className="login__form-about-text">
                  O'zDST 1105:2009 Алгоритм шифрования данных
                </p>
                <p className="login__form-about-text">
                  O'zDST 1192:2009 Процессы формирования и проверки ЭЦП
                </p>
                <p className="login__form-about-text">
                  Версия 3.0 ГУП UNICON.UZ, OOO UNICON-SOFT 2011-2018
                </p>
                <a href="/" className="login__form-about-btn">
                  Ввод ключа
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
