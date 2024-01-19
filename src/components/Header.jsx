import logo from "../assets/logo.jpg";

export default function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="yep" />
        <h1>REACTFOOD</h1>
      </div>
      <button className="button">Cart(0)</button>
    </header>
  );
}
