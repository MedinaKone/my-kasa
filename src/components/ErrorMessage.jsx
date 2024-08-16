import React from "react";
import { NavLink } from "react-router-dom";

const ErrorMessage = () => {
  return (
    <section className="errorMainContent">
    <div className="errorText">
        <div className="codeError404">404</div>
        <div className="errorDescription">Oups! La page que vous demandez n'existe pas</div>
    </div>
    <div><NavLink to="/" className="homeLink">Retourner sur la page d'accueil</NavLink></div>
    </section>
  );
};

export default ErrorMessage;
