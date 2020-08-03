import React from 'react';
import './styles.css';

export default function SignIn() {

  return (
    <div className="container signin-container">
      <div className="row">
        <form>
          <div className="row">
            <div className="input-field" >
              <input id="txtUsername" type="text" className="validate" />
              <label for="txtUsername">Nome de Usuário</label>
            </div>
          </div>
              
          <div className="row">
            <div className="input-field">
              <input id="txtPassword" type="password" className="validate" />
              <label for="txtPassword">Senha</label>
            </div>
          </div>

          <div className="row">
            <button className="col s12 btn waves-effect waves-light" type="submit" >Entrar</button>
          </div>
        </form>
      </div>
    </div>
  );
}