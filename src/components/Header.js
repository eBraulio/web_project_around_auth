import logo from "../images/vector/header__logo.svg";

export default function Header() {
  return (
    <header className="header">
      <img
        className="header__logo"
        src={logo}
        alt="Around EEUU logo"
        id="header-logo"
      />
    </header>
  );
}
