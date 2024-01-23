import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Cart from "./Cart";
import Checkout from "./Checkout.jsx";

const CartModal = forwardRef(function Modal({}, ref) {
  const [showCheckout, setShowCheckout] = useState(false);
  const dialog = useRef();
  let content;

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
    };
  });

  const handleCheckout = function (event) {
    event.preventDefault();

    if (event.nativeEvent.submitter.value === "close") {
      dialog.current.close();
    } else {
      setShowCheckout(() => true);
    }
  };

  const handleClose = function () {
    dialog.current.close();
  };

  if (showCheckout) {
    content = <Checkout onClose={handleClose} />;
  } else {
    content = <Cart onCheckout={handleCheckout} />;
  }

  return createPortal(
    <dialog className="modal" ref={dialog}>
      {content}
    </dialog>,
    document.getElementById("modal"),
  );
});

export default CartModal;
