import logo from "../assets/logo.jpg";
import CartModal from "./CartModal.jsx";
import { useContext, useRef, useState } from "react";
import { CartContext } from "../store/cart-context.jsx";
export default function Header() {
  const modal = useRef();
  const cartCtx = useContext(CartContext);

  const cartQuantity = cartCtx.items.length;

  function handleOpenCartClick() {
    modal.current.open();
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="yep" />
        <h1>REACTFOOD</h1>
      </div>
      <CartModal ref={modal} />
      <button className="button" onClick={handleOpenCartClick}>
        Cart ({cartQuantity})
      </button>
    </header>
  );
}
