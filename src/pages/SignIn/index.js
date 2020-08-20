import React, { useState } from "react";
import { Link, useHistory } from 'react-router-dom';
import "./styles.css";
import api from '../../services/api';
import { login } from "../../services/auth";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  async function handleSignIn(e) {
    e.preventDefault();

    if (!username || !password) {
      alert("Preencha todos os campos corretamente!");
    } else {
      try {
        const response = await api.post("sessions", { username, password });
        login(response.data.token);
        history.push("/home");
      } catch (error) {
        console.log(error);
        alert("Erro ao fazer login tente novamente.");
      }
    }
  }

  return (
    <div className="container signin-container">
      <form onSubmit={handleSignIn}>
        <div className="form-group">
          <label htmlFor="txtUsername">Nome de Usuário</label>
          <input
            id="txtUsername"
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="txtPassword">Senha</label>
          <input
            id="txtPassword"
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="btn btn-primary form-control" type="submit">
          Entrar
        </button>
      </form>
    </div>
  );
}
