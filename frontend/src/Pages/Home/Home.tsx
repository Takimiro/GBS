import React from "react";
import logo from '../../Assets/logo.svg';
import './Home.css';

export default function Header() {
  return (
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          GIVE BACK STORAGE
        </p>
        <span className="Subtitle">Devolução Sem Enrolação</span>
        
    </header>
  );
}
