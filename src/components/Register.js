import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register({ onRegister }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(evt) {
    evt.preventDefault();
    onRegister({ email, password })
  }

  return (
    <div className="authorization">
      <form className="authorization__form"
        onSubmit={handleSubmit}>
        <h3 className="authorization__heading">Регистрация</h3>
        <input
          className="authorization__input"
          type="email"
          name="email"
          placeholder="Email"
          minLength={2}
          maxLength={200}
          required
          onChange={({ target }) => setEmail(target.value)}
          value={email}
        />
        <input
          className="authorization__input"
          type="password"
          name="password"
          placeholder="Пароль"
          minLength={2}
          maxLength={200}
          required
          onChange={({ target }) => setPassword(target.value)}
          value={password}
        />
        <button className="authorization__submit-button"
          type="submit">Зарегистрироваться</button>
        <Link to="/sign-in"
          className="authorization__text">Уже зарегистрированы? Войти</Link>
      </form>
    </div>
  )
}